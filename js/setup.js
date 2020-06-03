'use strict';

var WIZARDS = 4;
var WIZARD_FIRSTNAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

// случайный элемент
var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

// создание объекта
var getWizardElement = function (firstName, lastName, coat, eyes) {
  var wizard = {
    name: getRandomElement(firstName) + ' ' + getRandomElement(lastName),
    coatColor: getRandomElement(coat),
    eyesColor: getRandomElement(eyes),
  };

  return wizard;
};

// создание массива объектов
var getWizardsList = function (amount) {
  var wizardsList = [];
  for (var i = 0; i < amount; i++) {
    wizardsList.push(getWizardElement(WIZARD_FIRSTNAME, WIZARD_LASTNAME, WIZARD_COAT, WIZARD_EYES));
  }

  return wizardsList;
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// создание DOM-элементов на основе сгенерированных данных
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < WIZARDS; i++) {
  fragment.appendChild(renderWizard(getWizardsList(WIZARDS)[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
