'use strict';

var WIZARDS = 4;
var WIZARD_FIRSTNAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

var setupModal = document.querySelector('.setup');
var setupModalOpen = document.querySelector('.setup-open');
var setupModalClose = setupModal.querySelector('.setup-close');
var username = setupModal.querySelector('.setup-user-name');
var setupWizard = document.querySelector('.setup-wizard');
var wizardCoatColor = setupWizard.querySelector('.wizard-coat');
var wizardEyesColor = setupWizard.querySelector('.wizard-eyes');
var fireballColor = setupModal.querySelector('.setup-fireball-wrap');

var coatColorInput = document.querySelector('input[name="coat-color"]');
var eyesColorInput = document.querySelector('input[name="eyes-color"]');
var fireballColorInput = document.querySelector('input[name="fireball-color"]');

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
var getWizardsList = function () {
  var wizardsList = new Array(4).fill(getWizardElement(WIZARD_FIRSTNAME, WIZARD_LASTNAME, WIZARD_COAT, WIZARD_EYES));
  return wizardsList;
};

// создание DOM-элементов на основе сгенерированных данных
var renderWizard = function (wizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizardsList = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < WIZARDS; i++) {
    fragment.appendChild(renderWizard(getWizardsList(WIZARDS)[i]));
  }
  var similarListElement = document.querySelector('.setup-similar-list');
  similarListElement.appendChild(fragment);
};

var setupWizards = function () {
  setupModal.classList.remove('hidden');
  setupModal.querySelector('.setup-similar').classList.remove('hidden');
};

setupWizards();
renderWizardsList();

var openModal = function () {
  setupModal.classList.remove('hidden');

  document.addEventListener('keydown', onModalEscPress);
};

var closeModal = function () {
  setupModal.classList.add('hidden');

  document.removeEventListener('keydown', onModalEscPress);
};

var onModalEscPress = function (evt) {
  if (evt.key === 'Escape' && !(username === document.activeElement)) {
    evt.preventDefault();
    closeModal();
  }
};

setupModalOpen.addEventListener('click', function () {
  openModal();
});

setupModalOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openModal();
  }
});

setupModalClose.addEventListener('click', function () {
  closeModal();
});

setupModalClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closeModal();
  }
});

username.addEventListener('invalid', function () {
  if (username.validity.valueMissing) {
    username.setCustomValidity('Обязательное поле');
  } else {
    username.setCustomValidity('');
  }
});

username.addEventListener('input', function () {
  var valueLength = username.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    username.setCustomValidity('Еще' + (MIN_NAME_LENGTH - valueLength) + 'симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    username.setCustomValidity('Удалите лишние ' + (valueLength - MIN_NAME_LENGTH) + ' симв.');
  } else {
    username.setCustomValidity('');
  }
});

var setWizardColor = function (element, wizardsColor, styleProperty, inputOption) {
  var color = getRandomElement(wizardsColor);
  element.style[styleProperty] = color;
  inputOption.value = color;
};

var changeCoatColor = function () {
  setWizardColor(wizardCoatColor, WIZARD_COAT, 'fill', coatColorInput);
};

var changeEyesColor = function () {
  setWizardColor(wizardEyesColor, WIZARD_EYES, 'fill', eyesColorInput);
};

var changeFireballColor = function () {
  setWizardColor(fireballColor, WIZARD_FIREBALL, 'background-color', fireballColorInput);
};

var startSettingsListeners = function () {
  wizardCoatColor.addEventListener('click', changeCoatColor);
  wizardEyesColor.addEventListener('click', changeEyesColor);
  fireballColor.addEventListener('click', changeFireballColor);
};

startSettingsListeners();
