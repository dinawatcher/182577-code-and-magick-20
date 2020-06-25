'use strict';

(function () {
  var MIN_NAME_LENGTH = 2;
  var MAX_NAME_LENGTH = 25;

  var username = window.dialog.setupModal.querySelector('.setup-user-name');

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

  window.validation = {
    username: username,
  };
}());
