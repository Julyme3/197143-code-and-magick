'use strict';

var fragment = document.createDocumentFragment();
var coatOfColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)'];
var colorEyes = ['black', 'red', 'blue', 'yellow', 'green'];
var colorFireball = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var randomNumber;
var userModal = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupCLose = userModal.querySelector('.setup-close');
var setupIcon = document.querySelector('.setup-open-icon');
var setupUserName = userModal.querySelector('.setup-user-name');
var wizardBlock = document.querySelector('.wizard');
var wizardCoat = wizardBlock.querySelector('.wizard-coat');
var wizardEyes = wizardBlock.querySelector('.wizard-eyes');
var setupFireball = document.querySelector('.setup-fireball-wrap');

document.body.querySelector('.setup-similar').classList.remove('hidden');

// Данные для генерации магов
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var WIZARDS_FIRSTNAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var FirstNameRandom = [];
var LastNameRandom = [];
var FullName = [];

// Генерация имени магов
var getRandom = function (arrFirstNames, arrLastNames) {
  for (var j = 0; j < arrFirstNames.length; j++) {
    FirstNameRandom[j] = (Math.round(Math.random() * arrFirstNames.length));
    LastNameRandom[j] = (Math.round(Math.random() * arrLastNames.length));
    FullName[j] = arrFirstNames[FirstNameRandom[j]] + ' ' + arrLastNames[LastNameRandom[j]];
  }
};
getRandom(WIZARDS_FIRSTNAMES, WIZARDS_LASTNAMES);

var wizards = [
  {
    name: FullName[0],
    coatColor: 'rgb(101, 137, 164)',
    eyesColor: 'black'
  },
  {
    name: FullName[1],
    coatColor: 'rgb(241, 43, 107)',
    eyesColor: 'red'
  },
  {
    name: FullName[2],
    coatColor: 'rgb(146, 100, 161)',
    eyesColor: 'blue'
  },
  {
    name: FullName[3],
    coatColor: 'rgb(56, 159, 117)',
    eyesColor: 'green'
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  return wizardElement;
};

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

// Обработчик - при нажатии на Esc попап закрывается
var popupEscHandlier = function (evt) {
  if (evt.keyCode === 27) {
    closePopup();
  }
};

var openPopup = function () {
  userModal.classList.remove('hidden');
  document.addEventListener('keydown', popupEscHandlier);
};

// При закрытии попата убираем обработчик нажатия на esc
var closePopup = function () {
  userModal.classList.add('hidden');
  document.removeEventListener('keydown', popupEscHandlier);
};

setupOpen.addEventListener('click', function () {
  openPopup();

  // закрываем попап нажатием enter на крестик
  setupCLose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      closePopup();
    }
  });
});

// закрываем попап мышкой
setupCLose.addEventListener('click', function () {
  closePopup();
});

// открываем попап нажав на иконку enter на иконке пользователя
setupIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openPopup();
  }
});

// При нажатии esc при фокусе в поле ввода, который находится в попапе, попап не
setupUserName.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.stopPropagation();
  }
});

// Рандомное число по длине массива
var getRandomNumber = function (arr) {
  randomNumber = Math.round((Math.random() * arr.length - 1));
  return arr[randomNumber];
};

// меняем цвет плаща по нажатию мышкой на него
wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomNumber(coatOfColor);
});

// меняем цвет глаз по нажатию мышкой на них
wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomNumber(colorEyes);
});

// меняем цвет фаербола по нажатию мышкой на него
setupFireball.addEventListener('click', function () {
  setupFireball.style.background = getRandomNumber(colorFireball);
});
