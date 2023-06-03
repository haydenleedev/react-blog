import style from "./App.css";

function Modal(props) {
  return (
    <div className={style.modal}>
      <h4>{props.title}</h4>
      <p>{props.date}</p>
      <p>{props.description}</p>
      <button onClick={props.editTitle}>Edit Title</button>
    </div>
  );
}

export default Modal;
