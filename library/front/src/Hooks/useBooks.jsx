import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { SERVER_URL } from "../Constants/main";
import * as a from "../Actions/books";
import { v4 as uuidv4 } from 'uuid';
import { MessagesContext } from "../Contexts/Messages";



export default function useBooks(dispatchBooks) {

    const [storeBook, setStoreBook] = useState(null);
    const [updateBook, setUpdateBook] = useState(null);
    const [destroyBook, setDestroyBook] = useState(null);
    const { addMessage } = useContext(MessagesContext)


    // list
    useEffect(_ => {

        axios.get(`${SERVER_URL}/books`)
            .then(res => {
                dispatchBooks(a.getBooks(res.data))
            })
            .catch(err => {
                console.log(err)
            });
    }, [dispatchBooks]);


    // store
    useEffect(_ => {
        if (null !== storeBook) {
            const uuid = uuidv4();
            dispatchBooks(a.storeBookAsTemp({ ...storeBook, id: uuid }))
            const withoutAuthor = { ...storeBook };
            delete withoutAuthor.author;
            axios.post(`${SERVER_URL}/books`, { ...withoutAuthor, id: uuid }, { withCredentials: true })
                .then(res => {
                    dispatchBooks(a.storeBookAsReal(res.data))
                    setStoreBook(null);
                    addMessage(res.data.message)
                })
                .catch(err => {
                    dispatchBooks(a.storeBookAsUndo({ id: uuid }));
                    setStoreBook(null);
                    err?.response?.data?.message && addMessage(err.response.data.message)
                });
        }
    }, [storeBook, dispatchBooks, addMessage]);


    useEffect(_ => {
        if (null !== destroyBook) {
            dispatchBooks(a.deleteBookAsTemp(destroyBook));

            axios.delete(`${SERVER_URL}/books/${destroyBook.id}`, { withCredentials: true })
                .then(res => {
                    setDestroyBook(null);
                    dispatchBooks(a.deleteBookAsReal(res.data));
                    addMessage(res.data.message)
                })
                .catch(err => {
                    dispatchBooks(a.deleteBookAsUndo(destroyBook))
                    setDestroyBook(null);
                    err?.response?.data?.message && addMessage(err.response.data.message)
                })
        }
    }, [destroyBook, dispatchBooks, addMessage])

    useEffect(_ => {
        if (null !== updateBook) {
            dispatchBooks(a.updateBookAsTemp(updateBook))
            const withoutAuthor = { ...updateBook };
            delete withoutAuthor.author;
            axios.put(`${SERVER_URL}/books/${updateBook.id}`, withoutAuthor, { withCredentials: true })
                .then(res => {
                    setUpdateBook(null);
                    dispatchBooks(a.updateBookAsReal(res.data))
                    addMessage(res.data.message)
                })
                .catch(err => {
                    setUpdateBook(null);
                    dispatchBooks(a.updateBookAsUndo(updateBook))
                    err?.response?.data?.message && addMessage(err.response.data.message)
                })
        }
    }, [updateBook, dispatchBooks, addMessage])



    return {
        storeBook,
        setStoreBook,
        updateBook,
        setUpdateBook,
        destroyBook,
        setDestroyBook
    };

}