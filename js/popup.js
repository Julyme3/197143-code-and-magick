'use strict';

// события на попапе (открытие/закрытие, настройка цвета мага)

// Данные для настройки мага
var optionOfWizard = {
  coatOfColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)'],
  colorEyes: ['black', 'red', 'blue', 'yellow', 'green'],
  colorFireball: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
  coatDOM: document.querySelector('.wizard-coat'),
  eyesDOM: document.querySelector('.wizard-eyes'),
  fireballDOM: document.querySelector('.setup-fireball-wrap')
};

window.popupEvent = (function () {

  var setupPopup = {

    popupDOMElement: {
      userModal: document.querySelector('.setup'),
      setupOpen: document.querySelector('.setup-open'),
      setupCLose: document.querySelector('.setup-close'),
      setupIcon: document.querySelector('.setup-open-icon'),
      setupUserName: document.querySelector('.setup-user-name'),
      setupSubmit: document.querySelector('.setup-submit')
    },

// метод - по клику получаем случайный цвет (в коллбэке() указываем как его применить)
    colorizeDOMElement: function (element, arrColor, callback) {
      element.addEventListener('click', function () {
        var randomColor = utils.getRandomNumber(arrColor);
        callback(randomColor);
      });
    }

  };

  document.body.querySelector('.setup-similar').classList.remove('hidden');

  // Обработчик - при нажатии на Esc попап закрывается
  var popupEscHandlier = function (evt) {
    if (evt.keyCode === 27) {
      closePopup();
    }
  };

  // открываем попап
  var openPopup = function () {
    setupPopup.popupDOMElement.userModal.classList.remove('hidden');
    document.addEventListener('keydown', popupEscHandlier);
  };

  // При закрытии попата убираем обработчик нажатия на esc
  var closePopup = function () {
    setupPopup.popupDOMElement.userModal.classList.add('hidden');
    document.removeEventListener('keydown', popupEscHandlier);
  };

  var onPopupEnterPress = function (evt) {
    if (evt.keyCode === 13) {
      closePopup();
    }
  };

  // открываем попап при клике на аватарку
  setupPopup.popupDOMElement.setupOpen.addEventListener('click', function () {
    openPopup();
    // закрываем попап нажатием enter на крестик
    setupPopup.popupDOMElement.setupCLose.addEventListener('keydown', onPopupEnterPress);
  });

  // закрываем попап при клике на крестик
  setupPopup.popupDOMElement.setupCLose.addEventListener('click', function () {
    closePopup();
  });

  // открываем попап нажав на иконку enter на иконке пользователя
  setupPopup.popupDOMElement.setupIcon.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      openPopup();
    }
    // жмем enter на крестике - закрываем попап
    setupPopup.popupDOMElement.setupCLose.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 13) {
        closePopup();
      }
    });
  });

  // При нажатии esc при фокусе в поле ввода, который находится в попапе, попап не закрывается
  setupPopup.popupDOMElement.setupUserName.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.stopPropagation();
    }
  });

  return setupPopup;
})();

// меняем цвет плаща по нажатию мышкой на него
window.popupEvent.colorizeDOMElement(optionOfWizard.coatDOM, optionOfWizard.coatOfColor, function (color) {
  optionOfWizard.coatDOM.style.fill = color;
});

// меняем цвет глаз по нажатию мышкой на них
window.popupEvent.colorizeDOMElement(optionOfWizard.eyesDOM, optionOfWizard.colorEyes, function (color) {
  optionOfWizard.eyesDOM.style.fill = color;
});

// меняем цвет фаербола по нажатию мышкой на него
window.popupEvent.colorizeDOMElement(optionOfWizard.fireballDOM, optionOfWizard.colorFireball, function (color) {
  optionOfWizard.fireballDOM.style.backgroundColor = color;
});
