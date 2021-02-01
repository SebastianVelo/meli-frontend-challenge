import "./Breadcrumb.css";

function Breadcrumb(props) {
    return (
        <ul className="breadcrumb">
            {props.items && props.items.map((item, i) =>
                <li key={i}> {item.name}</li>
            )}
        </ul>
    )
}
export default Breadcrumb;