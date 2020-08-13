import './style.css';

const script = () => {
  const BTN = document.querySelectorAll('.button-counter');

  const counter = () => {
    let count = 0;

    return () => {
      return ++count;
    }
  }

  BTN.forEach((el) => {
    const setCount = counter();
    el.textContent = '0';
    el.addEventListener('click', function () {
      this.textContent = setCount();
    });
  });
}

export default script();