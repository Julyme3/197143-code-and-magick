'use strict';

// генерируем магов на основе данных объекта wizards

window.setupWizard = (function () {
  var fragment = document.createDocumentFragment();
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var WIZARDS_FIRSTNAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARDS_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var wizards = [
    {
      name: utils.getRandomNumber(WIZARDS_FIRSTNAMES) + ' ' + utils.getRandomNumber(WIZARDS_LASTNAMES),
      coatColor: 'rgb(101, 137, 164)',
      eyesColor: 'black'
    },
    {
      name: utils.getRandomNumber(WIZARDS_FIRSTNAMES) + ' ' + utils.getRandomNumber(WIZARDS_LASTNAMES),
      coatColor: 'rgb(241, 43, 107)',
      eyesColor: 'red'
    },
    {
      name: utils.getRandomNumber(WIZARDS_FIRSTNAMES) + ' ' + utils.getRandomNumber(WIZARDS_LASTNAMES),
      coatColor: 'rgb(146, 100, 161)',
      eyesColor: 'blue'
    },
    {
      name: utils.getRandomNumber(WIZARDS_FIRSTNAMES) + ' ' + utils.getRandomNumber(WIZARDS_LASTNAMES),
      coatColor: 'rgb(56, 159, 117)',
      eyesColor: 'green'
    }
  ];

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  var addWizard = function () {
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };
  return addWizard;
})();

window.setupWizard();
