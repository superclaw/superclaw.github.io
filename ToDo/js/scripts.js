{
  const FORM = document.querySelector('.new');
  const FORM_INPUT = document.querySelector('.new__text');
  const LIST = document.querySelector('.list');
  let getCount = makeCounter();
  let getString = makeString();

  FORM.addEventListener('submit', (event) => {
    event.preventDefault();
    addNewItem();
    FORM.reset();
  });

  LIST.addEventListener('click', (event) => {
    const target = event.target;
    if (target.className === 'del') {
     delItem.call(target);
    } else if (target.className === 'list__item') {
      const checkbox = target.querySelector('.list__checkbox');
      checkbox.checked = !checkbox.checked;
    }
  });

  function addNewItem() {
    const newValue = FORM_INPUT.value;

    if (newValue.trim().length > 0) {
      const newItem = document.createElement('li');
      newItem.classList.add('list__item', 'list__item--added');
      newItem.innerHTML = getString(newValue, getCount('inc'));

      LIST.appendChild(newItem);
      setTimeout(() => newItem.classList.remove('list__item--added'), 1);
    }
  }

  function delItem() {
    this.parentNode.classList.add('list__item--deleted');
    setTimeout(() => this.parentNode.remove(), 200);
    getCount('dec');

    let items = document.querySelectorAll('.list__item');
    let i = 1;

    for (let j = 0; j < items.length; j++) {
      items[j].querySelector('.list__checkbox').id = 'txt' + i;
      items[j].querySelector('.list__text').setAttribute('for', 'txt' + i);
      i++;
    }
  }

  function makeCounter() {
    let count = 1;
    return (op) => {
      return (op === 'inc') ? count++ : --count;
    }
  }

  function makeString() {
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    const btnDel = document.createElement('button');

    checkbox.className = 'list__checkbox';
    checkbox.setAttribute('type', 'checkbox');
    label.className = 'list__text';
    btnDel.className = 'del';
    btnDel.innerHTML = '&#10008;';

    return (val, i) => {
      checkbox.id = 'txt' + i;
      label.setAttribute('for', 'txt' + i);
      label.textContent = val;

      return checkbox.outerHTML + label.outerHTML + btnDel.outerHTML;
    }
  }
}