'use strict';

(function () {
  var setupModal = document.querySelector('.setup');
  var setupModalOpen = document.querySelector('.setup-open');
  var setupModalClose = setupModal.querySelector('.setup-close');

  var openModal = function () {
    setupModal.classList.remove('hidden');
    document.addEventListener('keydown', onModalEscPress);
  };

  var closeModal = function () {
    setupModal.classList.add('hidden');
    setupModal.removeAttribute('style');
    document.removeEventListener('keydown', onModalEscPress);
  };

  var onModalEscPress = function (evt) {
    if (evt.key === 'Escape' && !(window.validation.username === document.activeElement)) {
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

  var setupWizards = function () {
    setupModal.querySelector('.setup-similar').classList.remove('hidden');
  };
  setupWizards();

  window.dialog = {
    setupModal: setupModal,
  };
})();
