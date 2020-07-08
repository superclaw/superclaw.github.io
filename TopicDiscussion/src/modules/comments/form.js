import React from "react";
import './form.css';
import getDate from "../date";

const Form = props => {
  const {store, addNewComment, setAuthorValue, setTextValue} = props;

  return (
      <form action="#"
            className="comments__form"
            onSubmit={ev => {
              ev.preventDefault();
              return addNewComment(store.add.author, store.add.text, getDate());
            }}>
        <label htmlFor="author" className="visually-hidden">Имя:</label>
        <input type="text" id="author" required={true}
               className="comments__author"
               placeholder="Ваше имя"
               value={store.add.author}
               onChange={() => setAuthorValue(document.querySelector('.comments__author').value)}/>
        <label htmlFor="text" className="visually-hidden">Текст комментария:</label>
        <textarea id="text" required={true}
                  className="comments__textarea"
                  placeholder="Ваш комментарий"
                  value={store.add.text}
                  onChange={() => setTextValue(document.querySelector('.comments__textarea').value)}/>
        <input type="submit" className="comments__submit" value="Оставить комментарий"/>
      </form>
  )
}

export default Form;