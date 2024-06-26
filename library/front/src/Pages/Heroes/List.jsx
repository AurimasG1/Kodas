import { useContext } from "react";
import { Heroes } from "../../Contexts/Heroes";
import { SERVER_URL } from "../../Constants/main";

export default function List() {

    const { heroes, setDeleteHero, setEditHero } = useContext(Heroes);

    return (
        <>
            {
                heroes.map(hero => (
                    <div key={hero.id}>
                        {
                            hero.deleted
                                ?
                                <div className="alert alert-danger mt-2" role="alert">
                                    {hero.name} was deleted
                                </div>
                                :
                                <div className="card mt-2" style={{
                                    opacity: hero.temp ? 0.5 : 1
                                }}>
                                    <div className="card-header">
                                        <h4>{hero.name}</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="row" >
                                            <div className="col-5">

                                                <p>Alignment: {hero.good ? 'Good' : 'Bad'}</p>
                                                <p>Book title: {hero?.book?.title}</p>
                                                <p>Author's name: <b>{hero?.author?.name} {hero?.author?.surname}</b></p>
                                            </div>
                                            <div className="col-7 ">
                                                {hero?.image && <img src={hero?.image} alt={hero?.name} className="img-fluid" />}
                                                {!hero?.image && <p><img src={`${SERVER_URL}/images/no.jpg`} alt="hero no" className="img-fluid" /></p>}
                                            </div>
                                        </div>

                                    </div>
                                    <div className="card-footer">
                                        <button
                                            type="button"
                                            disabled={hero.temp ? true : false}
                                            className="btn btn-danger m-2"
                                            onClick={_ => setDeleteHero(hero)}
                                        >
                                            Delete
                                        </button>
                                        <button
                                            type="button"
                                            disabled={hero.temp ? true : false}
                                            className="btn btn-warning m-2"
                                            onClick={_ => setEditHero(hero)}
                                        >
                                            Edit
                                        </button>
                                    </div>
                                </div>
                        }
                    </div>
                ))
            }
        </>
    );

}