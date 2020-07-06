import React from "react";
import './form.css';
import getDate from "../date/scripts";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      author: '',
      text: ''
    }
  }

  submitComment(ev) {
    ev.preventDefault();

    const FORM = document.querySelector('.comments__form');
    const authorVal = FORM.querySelector('#author').value;
    const textVal = FORM.querySelector('#text').value;
    const date = getDate();

    const list = (localStorage.getItem('commentsList'))
        ? JSON.parse(localStorage.getItem('commentsList'))
        : [];

    list.push({
      name: authorVal,
      text: textVal,
      date: date,
      btn: false
    });

    localStorage.removeItem('commentsList');
    localStorage.setItem('commentsList', JSON.stringify(list));

    this.setState({
      author: '',
      text: ''
    });
  }

  changeValue(ev) {
    const {id, value} = ev.target;
    switch (id) {
      case 'author': this.setState({author: value}); break;
      case 'text': this.setState({text: value}); break;
      default: break;
    }
  }

  render() {
    return (
        <form action="#"
              className="comments__form"
              onSubmit={ev => this.submitComment(ev)}>
          <label htmlFor="author" className="visually-hidden">Имя:</label>
          <input type="text" id="author" required={true}
                 className="comments__author"
                 placeholder="Ваше имя"
                 value={this.state.author}
                 onChange={ev => this.changeValue(ev)}/>
          <label htmlFor="text" className="visually-hidden">Текст комментария:</label>
          <textarea id="text" required={true}
                    className="comments__textarea"
                    placeholder="Ваш комментарий"
                    value={this.state.text}
                    onChange={ev => this.changeValue(ev)}/>
          <input type="submit" className="comments__submit" value="Оставить комментарий"/>
        </form>
    )
  }
}

export default Form;