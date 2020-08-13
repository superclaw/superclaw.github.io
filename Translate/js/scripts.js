const FORM = document.querySelector('.translate');
const SELECT = document.querySelector('.translate__in-lang');
const TEXTAREA_IN = document.querySelector('.translate__input');
const TEXTAREA_OUT = document.querySelector('.translate__output');
const URL = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
const API_KEY = '?key=trnsl.1.1.20181031T062132Z.f849174da6229ec7.4bf744eaa43c4c4f626373d5ef7f0fecbe71bee6';

SELECT.addEventListener('change', (event) => {
  const optOut = document.querySelector('.translate__out-lang *:disabled');
  optOut.disabled = false;
  optOut.selected = true;

  const optIn = document.querySelector(`.translate__out-lang *[value = '${event.target.value}'`);
  optIn.disabled = true;
});

FORM.addEventListener('submit', (event) => {
  event.preventDefault();

  const req = new XMLHttpRequest();
  const lang1 = '&lang=' + document.querySelector('.translate__in-lang *:checked').value;
  const lang2 = '-' + document.querySelector('.translate__out-lang *:checked').value;
  const text = '&text=' + TEXTAREA_IN.value;

  req.addEventListener('load', () => {
    const response = JSON.parse(req.response);

    TEXTAREA_OUT.textContent = (response.code !== 200)
        ? 'Ответ с сервера не получен: ' + response.message
        : (response.text.length === 0)
            ? 'Данный текст не переводится'
            : (response.text[0].split(' ').join('') === '')
                ? 'Вы ничего не ввели'
                : response.text[0];
  });

  req.open('GET', URL + API_KEY + text + lang1 + lang2);
  req.send();
});