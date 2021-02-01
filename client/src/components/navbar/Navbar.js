import { Link } from "react-router-dom";

import logo from "../../assets/Logo_ML.png";

import "./Navbar.css";

import Searchbar from "./searchbar/Searchbar";

function Navbar() {
    return (
        <nav className="grid">
            <div className="col-10 offset-2 grid">
                <div className="col-1">
                    <Link to={{ pathname: "/" }}>
                        <img id="logo" src={logo} alt="Logo"></img>
                    </Link>
                </div>
                <div className="col-11 offset-2">
                    <Searchbar />
                </div>
            </div>
        </nav>
    );
}
export default Navbar;