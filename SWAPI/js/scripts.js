const
    SELECT = document.querySelector('.search_select'),
    SEARCH_INPUT = document.querySelector('.search_input'),
    SEARCH_BTN = document.querySelector('.search_btn'),
    SEARCH_RESULT = document.querySelector('.search_result');

let resultData = [];
let type = 'people';

SELECT.addEventListener('change', (ev) => {
  type = ev.target.value;
  loadClasses(type);
});

SEARCH_BTN.addEventListener('click', search);
SEARCH_RESULT.addEventListener('click', ev => setData(ev));

loadClasses(type);

function loadClasses(type) {
  clearValue();
  SEARCH_RESULT.innerHTML = '';
  resultData = [];

  const dataClasses = {
    people: ['name', 'height', 'mass', 'birth_year', 'films_count'],
    planets: ['name', 'diameter', 'population', 'residents_count', 'films_count'],
    starships: ['name', 'model', 'starship_class', 'manufacturer', 'length', 'crew', 'passengers', 'cost_in_credits', 'films_count'],
  }
  const classes = dataClasses[type];
  const dataAll = Array.from(document.querySelectorAll('.data li'));

  for (let i = 0; i < dataAll.length; i++) {
    dataAll[i].style.display = 'none';

    if (classes.includes(dataAll[i].className)) {
      dataAll[i].style.display = 'block';
    }
  }
}

function search() {
  fetch(`https://swapi.dev/api/${type}/?search=${SEARCH_INPUT.value}`)
      .then(response => {
        if (response.ok) {
          response.json().then(json => {
            (json.count === 0)
                ? alert('Ничего не найдено!')
                : loadResults(json.results);
          });
        } else {
          response.json()
              .then(json => alert(`Ответ с сервера не получен:\n${response.status} ${json.detail}`));
        }
      });

  function loadResults(results) {
    SEARCH_RESULT.innerHTML = '';
    resultData = [];

    for (let i in results) {
      resultData.push(results[i]);

      const li = document.createElement('li');
      li.className = i;
      li.textContent = results[i].name;
      SEARCH_RESULT.appendChild(li);
    }
  }
}

function setData(ev) {
  if (ev.target.tagName === 'LI') {
    clearValue();

    const filmsCount = document.querySelector('.films_count .data_value');
    const residentsCount = document.querySelector('.residents_count .data_value');
    const obj = resultData[ev.target.className];
    const list = Array.from(document.querySelectorAll('.data li .data_value'));

    for (let i = 0; i < list.length; i++) {
      if (list[i].parentNode.style.display !== 'none') {
        list[i].textContent = obj[list[i].parentNode.className];
      }
    }

    filmsCount.textContent = obj['films'].length;
    if (residentsCount.parentElement.style.display !== 'none') {
      residentsCount.textContent = obj['residents'].length;
    }
  }
}

function clearValue() {
  const dataValue = Array.from(document.querySelectorAll('.data_value'));

  for (let i = 0; i < dataValue.length; i++) {
    dataValue[i].textContent = '';
  }
}