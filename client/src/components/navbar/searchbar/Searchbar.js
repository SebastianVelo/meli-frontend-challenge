import { Component } from "react";
import { Link } from "react-router-dom";
import searchImg from "../../../assets/ic_Search.png";
import LinkQuery from "../../../const/LinkQuery";

import "./Searchbar.css";

class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        }
    }

    handleChange(value) {
        let query = "q:" + value;
        this.setState({ query });
    }

    render() {
        
        return (
            <div id="searchbar-wrapper">
                <input id="searchbar" type="text" placeholder=" Nunca dejes de buscar" name="search" onChange={(e) => this.handleChange(e.target.value)} />
                <Link to={{ pathname: "/items", search: LinkQuery("q=", this.state.query)}}><button id="search-button"><img src={searchImg} alt="search" /></button></Link>
            </div>
        );
    }
}
export default Searchbar;