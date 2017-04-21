'use strict';

var fragment = document.createDocumentFragment();
var userModal = document.querySelector('.setup');
userModal.classList.remove('hidden');

document.body.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var WIZARDS_FIRSTNAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var FullName = [];
var FirstName = [];
var LastName = [];

for (var j = 0; j < WIZARDS_FIRSTNAMES.length; j++) {
  FirstName[j] = (Math.round(Math.random() * WIZARDS_FIRSTNAMES.length));
  LastName[j] = (Math.round(Math.random() * WIZARDS_LASTNAMES.length));
  FullName[j] = WIZARDS_FIRSTNAMES[FirstName[j]] + ' ' + WIZARDS_LASTNAMES[LastName[j]];
}

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
    eyesColor: 'yellow'
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
