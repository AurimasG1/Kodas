import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { SERVER_URL } from "../Constants/main";
import * as a from "../Actions/heroes";
import { v4 as uuidv4 } from 'uuid';
import { MessagesContext } from "../Contexts/Messages";



export default function useHeroes(dispatchHeroes) {

    const [storeHero, setStoreHero] = useState(null);
    const [updateHero, setUpdateHero] = useState(null);
    const [destroyHero, setDestroyHero] = useState(null);
    const { addMessage } = useContext(MessagesContext)

    // list
    useEffect(_ => {

        axios.get(`${SERVER_URL}/heroes`)
            .then(res => {
                dispatchHeroes(a.getHeroes(res.data))
            })
            .catch(err => {
                console.log(err)
            });
    }, [dispatchHeroes]);


    // store
    useEffect(_ => {
        if (null !== storeHero) {
            const uuid = uuidv4();
            dispatchHeroes(a.storeHeroAsTemp({ ...storeHero, id: uuid }))
            const toServer = { ...storeHero };
            delete toServer.author;
            delete toServer.book;
            axios.post(`${SERVER_URL}/heroes`, { ...toServer, id: uuid })
                .then(res => {
                    dispatchHeroes(a.storeHeroAsReal(res.data))
                    setStoreHero(null);
                    addMessage(res.data.message)
                })
                .catch(err => {
                    console.log(err)
                    dispatchHeroes(a.storeHeroAsUndo({ id: uuid }));
                    setStoreHero(null);
                    err?.response?.data?.message && addMessage(err.response.data.message)
                });
        }
    }, [storeHero, dispatchHeroes, addMessage]);


    useEffect(_ => {
        if (null !== destroyHero) {
            dispatchHeroes(a.deleteHeroAsTemp(destroyHero));

            axios.delete(`${SERVER_URL}/heroes/${destroyHero.id}`)
                .then(res => {
                    setDestroyHero(null);
                    dispatchHeroes(a.deleteHeroAsReal(res.data));
                    addMessage(res.data.message)
                })
                .catch(err => {
                    dispatchHeroes(a.deleteHeroAsUndo(destroyHero))
                    setDestroyHero(null);
                    err?.response?.data?.message && addMessage(err.response.data.message)
                })
        }
    }, [destroyHero, dispatchHeroes, addMessage])

    useEffect(_ => {
        if (null !== updateHero) {
            dispatchHeroes(a.updateHeroAsTemp(updateHero))
            const toServer = { ...updateHero };
            delete toServer.author;
            delete toServer.book;
            if (updateHero.image === updateHero.old.image) {
                toServer.image = null
            }
            axios.put(`${SERVER_URL}/heroes/${updateHero.id}`, toServer)
                .then(res => {
                    setUpdateHero(null);
                    dispatchHeroes(a.updateHeroAsReal(res.data))
                    addMessage(res.data.message)
                })
                .catch(err => {
                    dispatchHeroes(a.updateHeroAsUndo(updateHero))
                    setUpdateHero(null);
                    err?.response?.data?.message && addMessage(err.response.data.message)
                })
        }
    }, [updateHero, dispatchHeroes, addMessage])



    return {
        storeHero,
        setStoreHero,
        updateHero,
        setUpdateHero,
        destroyHero,
        setDestroyHero
    };

}