import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch, } from "react-icons/fa";

export default function NavBar() {
    return (
        <div>
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand ps-3" href="#!">School Admin</a>
                <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                        <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas"><FaSearch /></i></button>
                    </div>
                </form>
            </nav>
        </div>
    )
}
