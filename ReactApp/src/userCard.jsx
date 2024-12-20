import "./userCard.css"

export default function UserCard(props) {
    return (
        <div className="user-container">
            <h3>{props.title}</h3>
            <img src={props.img}
                alt="love babbar" />
            <p>{props.desc}</p>
        </div>
    )
}