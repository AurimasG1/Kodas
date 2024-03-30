import { useContext } from "react";
import Navbar from "../../Components/Navbar";
import Create from "./Create";
import Delete from "./Delete";
import Edit from "./Edit";
import List from "./List";
import { Books } from "../../Contexts/Books";

export default function Layout() {

    const { editBook, deleteBook } = useContext(Books)

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-4 mt-4">
                        <h1>Books</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-4 mt-4">
                        <Create />
                    </div>
                    <div className="col-8 mt-4">
                        <List />
                    </div>
                </div>
            </div>
            {deleteBook && <Delete />}
            {editBook && <Edit />}
        </>
    )
}