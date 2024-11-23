import { Link } from "react-router-dom";
const styles = {
    card: {
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      width: "300px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    img: {
      width: "100%",
      borderRadius: "8px",
    },
    title: {
      fontSize: "1.5em",
      margin: "16px 0 8px",
    },
    description: {
      fontSize: "1em",
      color: "#555",
    },
  };

function Card (props) {

return (
    <div  style={styles.card} className="card">
        <div className="card-body">
            <img style={styles.img} src={props.src} ></img>
            <h5  style={styles.title} className="card-title">{props.title}</h5>
            <p  style={styles.description} className="card-text" > {props.description} </p>
            <Link to={props.path} className="btn btn-primary" > 
            Ajouter au panier </Link>
        </div>
    </div>
)

}
export default Card