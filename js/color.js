'use strict';
(function () {
  var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoatColor = setupWizard.querySelector('.wizard-coat');
  var wizardEyesColor = setupWizard.querySelector('.wizard-eyes');
  var fireballColor = window.dialog.setupModal.querySelector('.setup-fireball-wrap');

  var coatColorInput = document.querySelector('input[name="coat-color"]');
  var eyesColorInput = document.querySelector('input[name="eyes-color"]');
  var fireballColorInput = document.querySelector('input[name="fireball-color"]');

  var setWizardColor = function (element, wizardsColor, styleProperty, inputOption) {
    var color = window.setup.getRandomElement(wizardsColor);
    element.style[styleProperty] = color;
    inputOption.value = color;
  };

  var changeCoatColor = function () {
    setWizardColor(wizardCoatColor, window.setup.coatColor, 'fill', coatColorInput);
  };

  var changeEyesColor = function () {
    setWizardColor(wizardEyesColor, window.setup.eyesColor, 'fill', eyesColorInput);
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
})();
