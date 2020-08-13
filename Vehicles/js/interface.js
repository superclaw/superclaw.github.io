{
  const
      BODY = document.querySelector('.body'),
      POPUP = document.querySelector('.pop-up-container'),
      POPUP_HEADER = document.querySelector('.pop-up__header'),
      POPUP_INPUT = document.querySelector('.pop-up__input'),
      GET_NAME_BT = document.querySelector('.get-name'),
      GET_COLOR_BT = document.querySelector('.get-color'),
      GET_MODEL_BT = document.querySelector('.get-model'),
      REFUEL_BT = document.querySelector('.refuel'),
      START_ENGINE_BT = document.querySelector('.start-engine'),
      START_MOVING_BT = document.querySelector('.start-moving'),
      USE_HORN_BT = document.querySelector('.use-horn');

  let userVehicle = getNewVehicle();
  let page;

  const userProps = {
    type: '',
    args: {
      color: {},
      name: '',
      mark: '',
      model: ''
    }
  };

  const doNextPage = element => {
    POPUP_HEADER.textContent = `Выберите ${element.init.header}:`;
    POPUP_INPUT.innerHTML = '';

    let index = 0;
    for (let obj in element.init.input) {
      let item = document.createElement('li');
      item.setAttribute('data-index', `${index}`)
      item.innerHTML = `
          <p>${element.init.input[obj]}</p>
          <button>Выбрать</button>`;
      POPUP_INPUT.appendChild(item);
      index++;
    }

    page = element;
  }

  const doLastPage = () => {
    POPUP_HEADER.textContent = 'Выберите цвет';
    POPUP_INPUT.innerHTML = '';

    for (let obj in COLORS) {
      let item = document.createElement('li');
      item.setAttribute('data-index', `${obj}`)
      item.innerHTML = `
          <div class="color" style="background: ${COLORS[obj].code};"></div>
          <button>Выбрать</button>`;
      POPUP_INPUT.appendChild(item);
    }

    page = {
      init: {
        input: COLORS
      },
      pageIndex: 'last'
    };
  }

  const setProps = () => {
    const model = (userProps.args.mark !== '')
        ? `${userProps.args.mark} ${userProps.args.model}`
        : userProps.args.model;
    const date = new Date();

    document.querySelector('.main__header').textContent = userProps.args.name;
    document.querySelector('.model').textContent = model;
    document.querySelector('.color-text').textContent = userProps.args.color.name;
    document.querySelector('.color-block').setAttribute('style', `background: ${userProps.args.color.code};`);
    document.querySelector('.creation-date').textContent = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
        + ` ${date.getHours()}:${date.getMinutes()}`;
  }

  const closePopup = () => {
    POPUP.style.opacity = '0';
    POPUP.addEventListener('transitionend', () => {
      BODY.classList.remove('scroll-off');
      POPUP.style.display = 'none';
    });
  }

  POPUP.addEventListener('mousedown', function (ev) {
    if (ev.target === this) closePopup();
  });

  POPUP_INPUT.addEventListener('click', ev => {
    if (ev.target.tagName !== 'BUTTON') return;

    const index = ev.target.parentNode.getAttribute('data-index');
    const inputObj = Object.keys(page.init.input);
    const prop = inputObj[index];
    const value = page.init.input[prop];

    switch (page.pageIndex) {
      case 0:
        doNextPage(page[prop]);
        break;
      case 1:
        userProps.type = prop;
        doNextPage(page[prop]);
        break;
      case 2:
        userProps.args.mark = value;
        doNextPage(page[prop]);
        break;
      case 3:
        userProps.args.model = value;
        doLastPage();
        break;
      case 'last':
        userProps.args.color = value;
        userProps.args.name = prompt('Назовите ваше транспортное средство:');
        if (userProps.args.name === null) {
          userProps.args.name = 'Моё транспортное средство';
        }
        userVehicle = getNewVehicle(userProps.args, userProps.type);
        setProps();
        closePopup();
        break;
    }
  });

  GET_NAME_BT.addEventListener('click', () => userVehicle.getName());
  GET_COLOR_BT.addEventListener('click', () => userVehicle.getColor());
  GET_MODEL_BT.addEventListener('click', () => userVehicle.getModel());
  REFUEL_BT.addEventListener('click', () => userVehicle.refuel());
  START_ENGINE_BT.addEventListener('click', () => userVehicle.startEngine());
  START_MOVING_BT.addEventListener('click', () => userVehicle.startMoving());
  USE_HORN_BT.addEventListener('click', () => userVehicle.useVehicleHorn());

  doNextPage(VEHICLES);


}