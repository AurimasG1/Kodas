import { useContext, useEffect, useState } from "react";
import TopNav from "../TopNav";
import { Users } from "../../Contexts/Users";
import { Router } from "../../Contexts/Router";

export default function Edit() {

    const [role, setRole] = useState('');
    const [user, setUser] = useState(null)
    const { users, setEditUser, setUsers } = useContext(Users);
    const { params } = useContext(Router);


    useEffect(_ => {
        if (null == users) {
            return;
        }
        const user = users.find(user => user.id === +params[1]);

        if (!user) {
            setUser(null)
        } else {
            setUser(user)
        }
    }, [users, params]);

    useEffect(_ => {
        if (null === user) {
            return;
        }
        setRole(user.role.toLowerCase());

    }, [user, setRole]);

    if (!users) return (
        <div>
            <TopNav />
            <h1>Loading...</h1>

        </div>
    );
    if (!user) return (
        <div>
            <TopNav />
            <h1>User not found</h1>

        </div>
    );


    const save = _ => {
        const editedUser = {
            role,
            name: user.name,
            id: user.id
        }
        setUsers(f => f.map(user => user.id === editedUser.id ? { ...editedUser, temp: true, preEdit: user } : user));
        setEditUser(editedUser);
        window.location.href = '#users'
    };

    return (

        <div>
            <TopNav />
            <h1>Edit user</h1>
            <div className="users-bin">
                <div className="form">
                    <div className="form-group">
                        <label>Role</label>
                        <div className="checkboxes">
                            <div>
                                <input id="S" type="checkbox" checked={'admin' === role} onChange={_ => setRole('admin')} />
                                <label htmlFor="S">Admin</label>
                            </div>
                            <div>
                                <input id="C" type="checkbox" checked={'user' === role} onChange={_ => setRole('user')} />
                                <label htmlFor="C">User</label>
                            </div>
                            <div>
                                <input id="R" type="checkbox" checked={'animal' === role} onChange={_ => setRole('animal')} />
                                <label htmlFor="R">Animal</label>
                            </div>
                        </div>
                    </div>

                    <button className="green" onClick={save}>Change role</button>

                </div>
            </div>
        </div>
    )
}