document.body.insertAdjacentHTML('afterbegin', '<h1>RSS Виртуальная клавиатура</h1><textarea name="" id="textarea" placeholder ="Клавиатура появляется при фокусировке на textarea или наборе текста на клавиатуре!!!"></textarea> <p>Клавиатура создана в операционной системе Windows</p><p>Для переключения языка комбинация: левыe alt + shift (перетаскиванием alt на shift) </p><p><a href="https://github.com/OldWhaler/virtual-keyboard">Ссылка на репо</a></p>');

const keyboard = {
  elements: {
    keyboard: null,
    engKeysElementsNoCaps: null,
    engKeysElementsCaps: null,
    ruKeysElementsNoCaps: null,
    ruKeysElementsCaps: null,
  },

  dictionary: {
    ru: [{ code: 'Backquote', key: 'ё' }, { code: 'Digit1', key: '1' }, { code: 'Digit2', key: '2' }, { code: 'Digit3', key: '3' }, { code: 'Digit4', key: '4' }, { code: 'Digit5', key: '5' }, { code: 'Digit6', key: '6' }, { code: 'Digit7', key: '7' }, { code: 'Digit8', key: '8' }, { code: 'Digit9', key: '9' }, { code: 'Digit0', key: '0' }, { code: 'Minus', key: '-' }, { code: 'Equal', key: '=' }, { code: 'Backspace', key: 'Backspace' }, { code: 'Tab', key: 'Tab' }, { code: 'KeyQ', key: 'й' }, { code: 'KeyW', key: 'ц' }, { code: 'KeyE', key: 'у' }, { code: 'KeyR', key: 'к' }, { code: 'KeyT', key: 'е' }, { code: 'KeyY', key: 'н' }, { code: 'KeyU', key: 'г' }, { code: 'KeyI', key: 'ш' }, { code: 'KeyO', key: 'щ' }, { code: 'KeyP', key: 'з' }, { code: 'BracketLeft', key: 'х' }, { code: 'BracketRight', key: 'ъ' }, { code: 'Backslash', key: '\\' }, { code: 'Delete', key: 'Delete' }, { code: 'CapsLock', key: 'CapsLock' }, { code: 'KeyA', key: 'ф' }, { code: 'KeyS', key: 'ы' }, { code: 'KeyD', key: 'в' }, { code: 'KeyF', key: 'а' }, { code: 'KeyG', key: 'п' }, { code: 'KeyH', key: 'р' }, { code: 'KeyJ', key: 'о' }, { code: 'KeyK', key: 'л' }, { code: 'KeyL', key: 'д' }, { code: 'Semicolon', key: 'ж' }, { code: 'Quote', key: 'э' }, { code: 'Enter', key: 'Enter' }, { code: 'ShiftLeft', key: 'Shift' }, { code: 'KeyZ', key: 'я' }, { code: 'KeyX', key: 'ч' }, { code: 'KeyC', key: 'с' }, { code: 'KeyV', key: 'м' }, { code: 'KeyB', key: 'и' }, { code: 'KeyN', key: 'т' }, { code: 'KeyM', key: 'ь' }, { code: 'Comma', key: 'б' }, { code: 'Period', key: 'ю' }, { code: 'Slash', key: '.' }, { code: 'ArrowUp', key: 'ArrowUp' }, { code: 'ShiftRight', key: 'Shift' }, { code: 'ControlLeft', key: 'Control' }, { code: 'MetaLeft', key: 'Meta' }, { code: 'AltLeft', key: 'Alt' }, { code: 'Space', key: ' ' }, { code: 'AltRight', key: 'Alt' }, { code: 'ArrowLeft', key: 'ArrowLeft' }, { code: 'ArrowDown', key: 'ArrowDown' }, { code: 'ArrowRight', key: 'ArrowRight' }, { code: 'ControlRight', key: 'Control' }],

    ruShiftedKeys: [{ value: '1', shifted: '!' }, { value: '2', shifted: '"' }, { value: '3', shifted: '№' }, { value: '4', shifted: ';' }, { value: '5', shifted: '%' }, { value: '6', shifted: ':' }, { value: '7', shifted: '?' }, { value: '8', shifted: '*' }, { value: '9', shifted: '(' }, { value: '0', shifted: ')' }, { value: '-', shifted: '_' }, { value: '=', shifted: '+' }, { value: '\\', shifted: '/' }, { value: '.', shifted: ',' }],

    eng: [{ code: 'Backquote', key: '`' }, { code: 'Digit1', key: '1' }, { code: 'Digit2', key: '2' }, { code: 'Digit3', key: '3' }, { code: 'Digit4', key: '4' }, { code: 'Digit5', key: '5' }, { code: 'Digit6', key: '6' }, { code: 'Digit7', key: '7' }, { code: 'Digit8', key: '8' }, { code: 'Digit9', key: '9' }, { code: 'Digit0', key: '0' }, { code: 'Minus', key: '-' }, { code: 'Equal', key: '=' }, { code: 'Backspace', key: 'Backspace' }, { code: 'Tab', key: 'Tab' }, { code: 'KeyQ', key: 'q' }, { code: 'KeyW', key: 'w' }, { code: 'KeyE', key: 'e' }, { code: 'KeyR', key: 'r' }, { code: 'KeyT', key: 't' }, { code: 'KeyY', key: 'y' }, { code: 'KeyU', key: 'u' }, { code: 'KeyI', key: 'i' }, { code: 'KeyO', key: 'o' }, { code: 'KeyP', key: 'p' }, { code: 'BracketLeft', key: '[' }, { code: 'BracketRight', key: ']' }, { code: 'Backslash', key: '\\' }, { code: 'Delete', key: 'Delete' }, { code: 'CapsLock', key: 'CapsLock' }, { code: 'KeyA', key: 'a' }, { code: 'KeyS', key: 's' }, { code: 'KeyD', key: 'd' }, { code: 'KeyF', key: 'f' }, { code: 'KeyG', key: 'g' }, { code: 'KeyH', key: 'h' }, { code: 'KeyJ', key: 'j' }, { code: 'KeyK', key: 'k' }, { code: 'KeyL', key: 'l' }, { code: 'Semicolon', key: ';' }, { code: 'Quote', key: "'" }, { code: 'Enter', key: 'Enter' }, { code: 'ShiftLeft', key: 'Shift' }, { code: 'KeyZ', key: 'z' }, { code: 'KeyX', key: 'x' }, { code: 'KeyC', key: 'c' }, { code: 'KeyV', key: 'v' }, { code: 'KeyB', key: 'b' }, { code: 'KeyN', key: 'n' }, { code: 'KeyM', key: 'm' }, { code: 'Comma', key: ',' }, { code: 'Period', key: '.' }, { code: 'Slash', key: '/' }, { code: 'ArrowUp', key: 'ArrowUp' }, { code: 'ShiftRight', key: 'Shift' }, { code: 'ControlLeft', key: 'Control' }, { code: 'MetaLeft', key: 'Meta' }, { code: 'AltLeft', key: 'Alt' }, { code: 'Space', key: ' ' }, { code: 'AltRight', key: 'Alt' }, { code: 'ArrowLeft', key: 'ArrowLeft' }, { code: 'ArrowDown', key: 'ArrowDown' }, { code: 'ArrowRight', key: 'ArrowRight' }, { code: 'ControlRight', key: 'Control' }],

    engShiftedKeys: [{ value: '`', shifted: '~' }, { value: '1', shifted: '!' }, { value: '2', shifted: '@' }, { value: '3', shifted: '#' }, { value: '4', shifted: '$' }, { value: '5', shifted: '%' }, { value: '6', shifted: '^' }, { value: '7', shifted: '&' }, { value: '8', shifted: '*' }, { value: '9', shifted: '(' }, { value: '0', shifted: ')' }, { value: '-', shifted: '_' }, { value: '=', shifted: '+' }, { value: '[', shifted: '{' }, { value: ']', shifted: '}' }, { value: '\\', shifted: '|' }, { value: ';', shifted: ':' }, { value: '\'', shifted: '"' }, { value: ',', shifted: '<' }, { value: '.', shifted: '>' }, { value: '/', shifted: '?' }],

    specialKeys: ['key_close', 'Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
  },

  handlers: {
    bodyKeydownHandler(event) {
      const textarea = document.querySelector('#textarea');
      document.querySelector('#textarea').focus();
      keyboard.openKeyboard();

      if (event.code === 'Tab') {
        event.preventDefault();
        textarea.setRangeText('    ', textarea.selectionStart, textarea.selectionEnd, 'end');
      }

      if (event.code === 'AltLeft' || event.code === 'AltRight') {
        event.preventDefault();
      }

      if (event.code === 'CapsLock') {
        keyboard.changeCharacterCase();
      }

      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        keyboard.addShiftedKeysIntoKeyboard(event);
      }

      if (event.shiftKey && event.altKey) {
        keyboard.changeKeybordLang();
      }

      const pressedKey = document.body.querySelector(`.keyboard__key[data-keyCode=${event.code}]`);
      if (pressedKey) pressedKey.classList.add('pressed');
    },

    bodyKeyupHandler() {
      if (sessionStorage.getItem('shiftPressed') === 'true') {
        sessionStorage.setItem('shiftPressed', false);
        const lang = sessionStorage.getItem('lang');
        const isCapsLockPressed = sessionStorage.getItem('capsLock') === 'true';

        keyboard.addKeysIntoKeyboard(isCapsLockPressed, lang);
      }
      const pressedKeys = document.body.querySelectorAll('.pressed');
      pressedKeys.forEach((key) => key.classList.remove('pressed'));
    },

    keyboardMousedownHandler(event) {
      const textarea = document.querySelector('#textarea');
      textarea.focus();

      const targetButton = event.target.closest('.keyboard__key');
      if (!targetButton) return;

      switch (targetButton.dataset.keycode) {
        case 'ShiftRight':
          setTimeout(() => keyboard.addShiftedKeysIntoKeyboard(event), 0);
          break;

        case 'ShiftLeft':
          setTimeout(() => keyboard.addShiftedKeysIntoKeyboard(event), 0);
          break;

        case 'AltLeft':
          sessionStorage.setItem('altPressed', true);
          break;

        case 'Backspace':
          if (textarea.selectionStart === textarea.selectionEnd) {
            textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd, 'end');
          } else {
            textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd, 'end');
          }
          break;

        case 'Delete':
          if (textarea.selectionStart === textarea.selectionEnd) {
            textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd + 1, 'end');
          } else {
            textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd, 'end');
          }
          break;

        case 'Enter':
          textarea.setRangeText('\n', textarea.selectionStart, textarea.selectionEnd, 'end');
          break;

        case 'Tab':
          textarea.setRangeText('    ', textarea.selectionStart, textarea.selectionEnd, 'end');
          break;

        case 'Space':
          textarea.setRangeText(' ', textarea.selectionStart, textarea.selectionEnd, 'end');
          break;

        case 'ArrowLeft':
          if (!textarea.selectionStart) return;
          if (textarea.selectionStart === textarea.selectionEnd) {
            textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd - 1, 'end');
          } else {
            textarea.selectionEnd = textarea.selectionStart;
          }
          break;

        case 'ArrowRight':
          if (textarea.selectionStart === textarea.length - 1) return;
          if (textarea.selectionStart === textarea.selectionEnd) {
            textarea.setRangeText('', textarea.selectionStart + 1, textarea.selectionEnd + 1, 'end');
          } else {
            textarea.selectionStart = textarea.selectionEnd;
          }
          break;

        case 'ArrowUp':
          if (textarea.selectionStart === 0 && textarea.selectionEnd === 0) break;
          if (textarea.value.lastIndexOf('\n', textarea.selectionStart - 1) === -1) {
            textarea.selectionStart = 0;
            textarea.selectionEnd = 0;
          } else {
            const indexOfNearestsN = textarea.value.lastIndexOf('\n', textarea.selectionStart - 1);
            const indexOfPreviousN = textarea.value.lastIndexOf('\n', indexOfNearestsN - 1);
            const shift = textarea.selectionStart - indexOfNearestsN;

            if (indexOfPreviousN === -1 && shift > indexOfNearestsN) {
              textarea.selectionStart = indexOfNearestsN;
              textarea.selectionEnd = indexOfNearestsN;
              break;
            }

            if (indexOfPreviousN === -1) {
              textarea.selectionStart = shift - 1;
              textarea.selectionEnd = shift - 1;
              break;
            }

            if (shift > indexOfNearestsN - indexOfPreviousN) {
              textarea.selectionStart = indexOfNearestsN;
              textarea.selectionEnd = indexOfNearestsN;
              break;
            }

            textarea.selectionStart = indexOfPreviousN + shift;
            textarea.selectionEnd = indexOfPreviousN + shift;
          }
          break;

        case 'ArrowDown':
          if (textarea.selectionStart === textarea.value.length - 1) break;
          if (textarea.value.indexOf('\n', textarea.selectionStart) === -1) {
            textarea.selectionStart = textarea.value.length;
            textarea.selectionEnd = textarea.value.length;
          } else {
            const indexOfPreviousN = textarea.value.lastIndexOf('\n', textarea.selectionStart - 1);

            let indexOfNearestsN;
            if (textarea.value.indexOf('\n', textarea.selectionStart) === -1) {
              indexOfNearestsN = textarea.selectionStart;
            } else {
              indexOfNearestsN = textarea.value.indexOf('\n', textarea.selectionStart);
            }

            const indexOfNextN = textarea.value.indexOf('\n', indexOfNearestsN + 1);

            let shift;
            if (indexOfPreviousN === -1) {
              shift = textarea.selectionStart;
            } else {
              shift = textarea.selectionStart - indexOfPreviousN;
            }

            if (indexOfNextN === -1 && shift > textarea.value.length - 1 - indexOfNearestsN) {
              textarea.selectionStart = textarea.value.length;
              textarea.selectionEnd = textarea.value.length;
              break;
            }
            if (indexOfNextN === -1) {
              textarea.selectionStart = indexOfNearestsN + shift;
              textarea.selectionEnd = indexOfNearestsN + shift;
              break;
            }

            if (shift >= indexOfNextN - indexOfNearestsN) {
              textarea.selectionStart = indexOfNextN;
              textarea.selectionEnd = indexOfNextN;
              break;
            }

            textarea.selectionStart = indexOfNearestsN + shift + 1;
            textarea.selectionEnd = indexOfNearestsN + shift + 1;
          }

          break;

        default:
          break;
      }

      if (!keyboard.dictionary.specialKeys.includes(targetButton.dataset.keycode)) {
        textarea.setRangeText(targetButton.textContent, textarea.selectionStart, textarea.selectionEnd, 'end');
      }
    },

    keyboardMouseupHandler(event) {
      const textarea = document.querySelector('#textarea');
      textarea.focus();

      const targetButton = event.target.closest('.keyboard__key');
      if (!targetButton) return;

      if (sessionStorage.getItem('shiftPressed') === 'true') {
        if (!keyboard.dictionary.specialKeys.includes(targetButton.dataset.keycode)) {
          textarea.setRangeText(targetButton.textContent, textarea.selectionStart, textarea.selectionEnd, 'end');
        }

        sessionStorage.setItem('shiftPressed', false);
        const lang = sessionStorage.getItem('lang');
        const isCapsLockPressed = sessionStorage.getItem('capsLock') === 'true';

        keyboard.addKeysIntoKeyboard(isCapsLockPressed, lang);
      }

      if (sessionStorage.getItem('altPressed') === 'true' && targetButton.dataset.keycode === 'ShiftLeft') {
        keyboard.changeKeybordLang();
        sessionStorage.setItem('altPressed', false);
      }
      if (targetButton.dataset.keycode === 'key_close') {
        keyboard.closeKeyboard();
      }

      targetButton.blur();
    },
  },

  init() {
    this.elements.keyboard = document.createElement('div');
    this.elements.keyboard.classList.add('keyboard', 'keyboard--hidden');

    this.elements.engKeysElementsNoCaps = this.createKeys(false, 'eng');
    this.elements.engKeysElementsCaps = this.createKeys(true, 'eng');
    this.elements.ruKeysElementsNoCaps = this.createKeys(false, 'ru');
    this.elements.ruKeysElementsCaps = this.createKeys(true, 'ru');

    if (!sessionStorage.getItem('lang')) {
      sessionStorage.setItem('lang', 'russian');
      sessionStorage.setItem('capsLock', false);
    }
    this.addKeysIntoKeyboard(sessionStorage.getItem('capsLock') === 'true', sessionStorage.getItem('lang'));
    document.body.append(this.elements.keyboard);

    document.body.addEventListener('mousedown', (event) => {
      this.handlers.keyboardMousedownHandler(event);
    });

    document.body.addEventListener('mouseup', (event) => {
      this.handlers.keyboardMouseupHandler(event);
    });

    document.body.addEventListener('keydown', (event) => {
      this.handlers.bodyKeydownHandler(event);
    });

    document.body.addEventListener('keyup', (event) => {
      this.handlers.bodyKeyupHandler(event);
    });
  },

  createKeys(isCapsLockPressed, lang) {
    const result = [];

    const closeButton = document.createElement('div');
    closeButton.classList.add('keyboard__key', 'keyboard__key_close');
    closeButton.setAttribute('data-keyCode', 'key_close');
    closeButton.innerHTML = '<span class="material-icons">disabled_visible</span>';
    result.push(closeButton);

    const createIconHTML = (iconName) => `<span class="material-icons">${iconName}</span>`;

    this.dictionary[lang].forEach((elem) => {
      const button = document.createElement('button');

      button.setAttribute('type', 'button');
      button.classList.add('keyboard__key');

      switch (elem.code) {
        case 'Backspace':
          button.classList.add('keyboard__key_wide', 'keyboard__key_dark');
          button.setAttribute('data-keyCode', 'Backspace');
          button.innerHTML = createIconHTML('backspace');
          break;

        case 'Tab':
          button.innerHTML = createIconHTML('keyboard_tab');
          button.setAttribute('data-keyCode', 'Tab');
          button.classList.add('keyboard__key_dark');
          button.textContent = 'Tab';
          break;

        case 'CapsLock':
          button.classList.add('keyboard__key_wide', 'keyboard__key_dark', 'keyboard__key_activailible');
          button.setAttribute('data-keyCode', 'CapsLock');
          button.innerHTML = createIconHTML('keyboard_capslock');
          button.addEventListener('click', () => {
            button.classList.toggle('keyboard__key_active');
            this.changeCharacterCase();
          });
          break;

        case 'Enter':
          button.classList.add('keyboard__key_wide', 'keyboard__key_dark');
          button.setAttribute('data-keyCode', 'Enter');
          button.innerHTML = createIconHTML('keyboard_return');
          break;

        case 'ShiftLeft':
          button.classList.add('keyboard__key_wide', 'keyboard__key_dark');
          button.setAttribute('data-keyCode', 'ShiftLeft');
          button.textContent = 'Shift';
          break;

        case 'ShiftRight':
          button.classList.add('keyboard__key_wide', 'keyboard__key_dark');
          button.setAttribute('data-keyCode', 'ShiftRight');
          button.textContent = 'Shift';
          break;

        case 'ControlLeft':
          button.classList.add('keyboard__key_dark');
          button.setAttribute('data-keyCode', 'ControlLeft');
          button.textContent = 'Ctrl';
          break;

        case 'ControlRight':
          button.classList.add('keyboard__key_dark');
          button.setAttribute('data-keyCode', 'ControlRight');
          button.textContent = 'Ctrl';
          break;

        case 'AltRight':
          button.classList.add('keyboard__key_dark');
          button.setAttribute('data-keyCode', 'AltRight');
          button.innerHTML = createIconHTML('keyboard_alt');
          break;

        case 'AltLeft':
          button.classList.add('keyboard__key_dark');
          button.setAttribute('data-keyCode', 'AltLeft');
          button.innerHTML = createIconHTML('keyboard_alt');
          break;

        case 'Delete':
          button.classList.add('keyboard__key_dark');
          button.setAttribute('data-keyCode', 'Delete');
          button.textContent = 'Del';
          break;

        case 'MetaLeft':
          button.classList.add('keyboard__key_dark');
          button.setAttribute('data-keyCode', 'MetaLeft');
          button.innerHTML = createIconHTML('window');
          break;

        case 'ArrowUp':
          button.classList.add('keyboard__key_dark');
          button.setAttribute('data-keyCode', 'ArrowUp');
          button.innerHTML = createIconHTML('keyboard_arrow_up');
          break;

        case 'ArrowLeft':
          button.classList.add('keyboard__key_dark');
          button.setAttribute('data-keyCode', 'ArrowLeft');
          button.innerHTML = createIconHTML('keyboard_arrow_left');
          break;

        case 'ArrowDown':
          button.classList.add('keyboard__key_dark');
          button.setAttribute('data-keyCode', 'ArrowDown');
          button.innerHTML = createIconHTML('keyboard_arrow_down');
          break;

        case 'ArrowRight':
          button.classList.add('keyboard__key_dark');
          button.setAttribute('data-keyCode', 'ArrowRight');
          button.innerHTML = createIconHTML('keyboard_arrow_right');
          break;

        case 'Space':
          button.classList.add('keyboard__key_extra-wide');
          button.setAttribute('data-keyCode', 'Space');
          button.innerHTML = createIconHTML('space_bar');
          break;

        default:
          button.setAttribute('data-keyCode', `${elem.code}`);
          button.textContent = isCapsLockPressed ? elem.key.toUpperCase() : elem.key;
      }

      result.push(button);
    });

    return result;
  },

  addKeysIntoKeyboard(isCapsLockPress, lang) {
    const langModifier = lang === 'english' ? 'eng' : 'ru';
    const capsModifier = isCapsLockPress ? '' : 'No';
    const newKeys = this.elements[`${langModifier}KeysElements${capsModifier}Caps`];

    this.elements.keyboard.innerHTML = '';
    this.elements.keyboard.append(...newKeys);
  },

  addShiftedKeysIntoKeyboard() {
    const lang = sessionStorage.getItem('lang');
    const isCapsLockPress = sessionStorage.getItem('capsLock') === 'true';
    sessionStorage.setItem('shiftPressed', true);

    const langModifier = lang === 'english' ? 'eng' : 'ru';
    const capsModifier = isCapsLockPress ? 'No' : '';

    const keys = keyboard.elements[`${langModifier}KeysElements${capsModifier}Caps`];
    const shiftedKeys = keyboard.dictionary[`${langModifier}ShiftedKeys`];

    const elements = [...keys].map((button) => {
      const findButton = shiftedKeys.find((item) => item.value === button.textContent);
      if (findButton) {
        const newButton = button.cloneNode(true);
        newButton.textContent = findButton.shifted;
        return newButton;
      }
      return button;
    });
    const keyboardElement = document.querySelector('.keyboard');
    keyboardElement.innerHTML = '';
    keyboardElement.append(...elements);
  },

  changeCharacterCase() {
    const newCapsLockValue = !(sessionStorage.getItem('capsLock') === 'true');
    sessionStorage.setItem('capsLock', newCapsLockValue);

    switch (sessionStorage.getItem('lang')) {
      case 'english':
        if (sessionStorage.getItem('capsLock') === 'true') {
          this.addKeysIntoKeyboard(true, 'english');
          this.addActivailibleKeyClassActive();
        } else {
          this.addKeysIntoKeyboard(false, 'english');
          this.removeActivailibleKeyClassActive();
        }
        break;

      case 'russian':
        if (sessionStorage.getItem('capsLock') === 'true') {
          this.addKeysIntoKeyboard(true, 'russian');
          this.addActivailibleKeyClassActive();
        } else {
          this.addKeysIntoKeyboard(false, 'russian');
          this.removeActivailibleKeyClassActive();
        }
        break;

      default:
        break;
    }
  },

  changeKeybordLang() {
    switch (sessionStorage.getItem('lang')) {
      case 'russian':
        sessionStorage.setItem('lang', 'english');
        if (sessionStorage.getItem('capsLock') === 'true') {
          this.addKeysIntoKeyboard(true, 'english');
          this.addActivailibleKeyClassActive();
        } else {
          this.addKeysIntoKeyboard(false, 'english');
        }
        break;

      case 'english':
        sessionStorage.setItem('lang', 'russian');
        if (sessionStorage.getItem('capsLock') === 'true') {
          this.addKeysIntoKeyboard(true, 'russian');
          this.addActivailibleKeyClassActive();
        } else {
          this.addKeysIntoKeyboard(false, 'russian');
        }
        break;

      default:
        break;
    }
  },

  switchToCorrectLanguageAndCase(event) {
    const currentChar = event.target.value[event.target.value.length - 1];
    if (!currentChar) return;

    if (currentChar.match(/\p{L}/u)) {
      const targetLanguage = currentChar.match(/\w/) ? 'english' : 'russian';
      const isCharCapitalCase = currentChar === currentChar.toUpperCase();

      if (isCharCapitalCase !== sessionStorage.getItem('capsLock')) {
        sessionStorage.setItem('capsLock', isCharCapitalCase);
      }

      if (targetLanguage !== sessionStorage.getItem('lang')) {
        sessionStorage.setItem('lang', targetLanguage);
      }

      keyboard.addKeysIntoKeyboard(isCharCapitalCase, targetLanguage);

      if (isCharCapitalCase) {
        keyboard.addActivailibleKeyClassActive();
      } else {
        keyboard.removeActivailibleKeyClassActive();
      }
    }
  },

  addActivailibleKeyClassActive() {
    document.querySelector('.keyboard__key_activailible').classList.add('keyboard__key_active');
  },

  removeActivailibleKeyClassActive() {
    document.querySelector('.keyboard__key_activailible').classList.remove('keyboard__key_active');
  },

  closeKeyboard() {
    document.querySelector('#textarea').blur();
    this.elements.keyboard.classList.add('keyboard--hidden');
  },
  openKeyboard() {
    this.elements.keyboard.classList.remove('keyboard--hidden');
  },
};

window.addEventListener('DOMContentLoaded', () => {
  keyboard.init();
});

document.querySelector('#textarea').addEventListener('focus', () => {
  keyboard.openKeyboard();
});

document.querySelector('#textarea').addEventListener('input', (event) => {
  keyboard.switchToCorrectLanguageAndCase(event);
});
