export default function ListItem(props) {
    return (
        <li>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    );
}