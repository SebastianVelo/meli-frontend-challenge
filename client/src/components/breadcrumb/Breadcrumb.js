import { Link } from "react-router-dom";
import LinkQuery from "../../const/LinkQuery";

import "./Breadcrumb.css";

function Breadcrumb(props) {
    return (
        <ul className="breadcrumb">
            {props.items && props.items.map((item, i) =>
                <li key={i}><Link to={{ pathname: "/items", search: LinkQuery("category=", item.id) }}>{item.name}</Link></li>
            )}
        </ul>
    )
}
export default Breadcrumb;