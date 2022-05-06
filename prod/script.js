document.body.insertAdjacentHTML('afterbegin', '<h1>RSS Виртуальная клавиатура</h1><textarea name="" id="textarea" placeholder ="Focus to open keyboard"></textarea>');

const keyboard = {
  elements: {
    keyboard: null,
    engKeysElementsNoCaps: null,
    engKeysElementsCaps: null,
    ruKeysElementsNoCaps: null,
    ruKeysElementsCaps: null,
  },

  dictionary: {
    ru: [{ code: 'Backquote', key: 'ё' }, { code: 'Digit1', key: '1' }, { code: 'Digit2', key: '2' }, { code: 'Digit3', key: '3' }, { code: 'Digit4', key: '4' }, { code: 'Digit5', key: '5' }, { code: 'Digit6', key: '6' }, { code: 'Digit7', key: '7' }, { code: 'Digit8', key: '8' }, { code: 'Digit9', key: '9' }, { code: 'Digit0', key: '0' }, { code: 'Minus', key: '-' }, { code: 'Equal', key: '=' }, { code: 'Backspace', key: 'Backspace' }, { code: 'Tab', key: 'Tab' }, { code: 'KeyQ', key: 'й' }, { code: 'KeyW', key: 'ц' }, { code: 'KeyE', key: 'у' }, { code: 'KeyR', key: 'к' }, { code: 'KeyT', key: 'е' }, { code: 'KeyY', key: 'н' }, { code: 'KeyU', key: 'г' }, { code: 'KeyI', key: 'ш' }, { code: 'KeyO', key: 'щ' }, { code: 'KeyP', key: 'з' }, { code: 'BracketLeft', key: 'х' }, { code: 'BracketRight', key: 'ъ' }, { code: 'Backslash', key: '\\' }, { code: 'Delete', key: 'Delete' }, { code: 'CapsLock', key: 'CapsLock' }, { code: 'KeyA', key: 'ф' }, { code: 'KeyS', key: 'ы' }, { code: 'KeyD', key: 'в' }, { code: 'KeyF', key: 'а' }, { code: 'KeyG', key: 'п' }, { code: 'KeyH', key: 'р' }, { code: 'KeyJ', key: 'о' }, { code: 'KeyK', key: 'л' }, { code: 'KeyL', key: 'д' }, { code: 'Semicolon', key: 'ж' }, { code: 'Quote', key: 'э' }, { code: 'Enter', key: 'Enter' }, { code: 'ShiftLeft', key: 'Shift' }, { code: 'KeyZ', key: 'я' }, { code: 'KeyX', key: 'ч' }, { code: 'KeyC', key: 'с' }, { code: 'KeyV', key: 'м' }, { code: 'KeyB', key: 'и' }, { code: 'KeyN', key: 'т' }, { code: 'KeyM', key: 'ь' }, { code: 'Comma', key: 'б' }, { code: 'Period', key: 'ю' }, { code: 'Slash', key: '.' }, { code: 'ArrowUp', key: 'ArrowUp' }, { code: 'ShiftRight', key: 'Shift' }, { code: 'ControlLeft', key: 'Control' }, { code: 'MetaLeft', key: 'Meta' }, { code: 'AltLeft', key: 'Alt' }, { code: 'Space', key: ' ' }, { code: 'AltRight', key: 'AltGraph' }, { code: 'ArrowLeft', key: 'ArrowLeft' }, { code: 'ArrowDown', key: 'ArrowDown' }, { code: 'ArrowRight', key: 'ArrowRight' }, { code: 'ControlRight', key: 'Control' }],

    eng: [{ code: 'Backquote', key: '`' }, { code: 'Digit1', key: '1' }, { code: 'Digit2', key: '2' }, { code: 'Digit3', key: '3' }, { code: 'Digit4', key: '4' }, { code: 'Digit5', key: '5' }, { code: 'Digit6', key: '6' }, { code: 'Digit7', key: '7' }, { code: 'Digit8', key: '8' }, { code: 'Digit9', key: '9' }, { code: 'Digit0', key: '0' }, { code: 'Minus', key: '-' }, { code: 'Equal', key: '=' }, { code: 'Backspace', key: 'Backspace' }, { code: 'Tab', key: 'Tab' }, { code: 'KeyQ', key: 'q' }, { code: 'KeyW', key: 'w' }, { code: 'KeyE', key: 'e' }, { code: 'KeyR', key: 'r' }, { code: 'KeyT', key: 't' }, { code: 'KeyY', key: 'y' }, { code: 'KeyU', key: 'u' }, { code: 'KeyI', key: 'i' }, { code: 'KeyO', key: 'o' }, { code: 'KeyP', key: 'p' }, { code: 'BracketLeft', key: '[' }, { code: 'BracketRight', key: ']' }, { code: 'Backslash', key: '\\' }, { code: 'Delete', key: 'Delete' }, { code: 'CapsLock', key: 'CapsLock' }, { code: 'KeyA', key: 'a' }, { code: 'KeyS', key: 's' }, { code: 'KeyD', key: 'd' }, { code: 'KeyF', key: 'f' }, { code: 'KeyG', key: 'g' }, { code: 'KeyH', key: 'h' }, { code: 'KeyJ', key: 'j' }, { code: 'KeyK', key: 'k' }, { code: 'KeyL', key: 'l' }, { code: 'Semicolon', key: ';' }, { code: 'Quote', key: "'" }, { code: 'Enter', key: 'Enter' }, { code: 'ShiftLeft', key: 'Shift' }, { code: 'KeyZ', key: 'z' }, { code: 'KeyX', key: 'x' }, { code: 'KeyC', key: 'c' }, { code: 'KeyV', key: 'v' }, { code: 'KeyB', key: 'b' }, { code: 'KeyN', key: 'n' }, { code: 'KeyM', key: 'm' }, { code: 'Comma', key: ',' }, { code: 'Period', key: '.' }, { code: 'Slash', key: '/' }, { code: 'ArrowUp', key: 'ArrowUp' }, { code: 'ShiftRight', key: 'Shift' }, { code: 'ControlLeft', key: 'Control' }, { code: 'MetaLeft', key: 'Meta' }, { code: 'AltLeft', key: 'Alt' }, { code: 'Space', key: ' ' }, { code: 'AltRight', key: 'Alt' }, { code: 'ArrowLeft', key: 'ArrowLeft' }, { code: 'ArrowDown', key: 'ArrowDown' }, { code: 'ArrowRight', key: 'ArrowRight' }, { code: 'ControlRight', key: 'Control' }],
  },

  init() {
    this.elements.keyboard = document.createElement('div');
    this.elements.keyboard.classList.add('keyboard', 'keyboard--hidden');

    const closeButton = document.createElement('div');
    closeButton.classList.add('keyboard__key', 'keyboard__key_close');
    closeButton.innerHTML = '<span class="material-icons">disabled_visible</span>';
    this.elements.keyboard.append(closeButton);

    closeButton.addEventListener('click', () => this.closeKeyboard());

    this.elements.engKeysElementsNoCaps = this.createKeys(false, 'eng');
    this.elements.engKeysElementsCaps = this.createKeys(true, 'eng');
    this.elements.ruKeysElementsNoCaps = this.createKeys(false, 'ru');
    this.elements.ruKeysElementsCaps = this.createKeys(true, 'ru');

    this.elements.keyboard.append(this.elements.ruKeysElementsCaps);
    document.body.append(this.elements.keyboard);
  },

  closeKeyboard() {
    this.elements.keyboard.classList.add('keyboard--hidden');
  },
  openKeyboard() {
    this.elements.keyboard.classList.remove('keyboard--hidden');
  },

  createKeys(isCapsLockPressed, lang) {
    const fragment = document.createDocumentFragment();

    const createIconHTML = (iconName) => `<span class="material-icons">${iconName}</span>`;

    this.dictionary[lang].forEach((elem) => {
      const button = document.createElement('button');

      button.setAttribute('type', 'button');
      button.classList.add('keyboard__key');

      switch (elem.code) {
        case 'Backspace':
          button.classList.add('keyboard__key_wide', 'keyboard__key_dark');
          button.innerHTML = createIconHTML('backspace');
          break;

        case 'Tab':
          button.innerHTML = createIconHTML('keyboard_tab');
          button.classList.add('keyboard__key_dark');
          button.textContent = 'Tab';
          break;

        case 'CapsLock':
          button.classList.add('keyboard__key_wide', 'keyboard__key_dark', 'keyboard__key_activailible');
          button.innerHTML = createIconHTML('keyboard_capslock');
          button.addEventListener('click', () => button.classList.toggle('keyboard__key_active'));
          break;

        case 'Enter':
          button.classList.add('keyboard__key_wide', 'keyboard__key_dark');
          button.innerHTML = createIconHTML('keyboard_return');
          break;

        case 'ShiftLeft':
          button.classList.add('keyboard__key_wide', 'keyboard__key_dark');
          button.textContent = 'Shift';
          break;

        case 'ShiftRight':
          button.classList.add('keyboard__key_wide', 'keyboard__key_dark');
          button.textContent = 'Shift';
          break;
        case 'ControlLeft':
          button.classList.add('keyboard__key_dark');
          button.textContent = 'Ctrl';
          break;

        case 'ControlRight':
          button.classList.add('keyboard__key_dark');
          button.textContent = 'Ctrl';
          break;

        case 'AltRight':
          button.classList.add('keyboard__key_dark');
          button.innerHTML = createIconHTML('keyboard_alt');
          break;

        case 'AltLeft':
          button.classList.add('keyboard__key_dark');
          button.innerHTML = createIconHTML('keyboard_alt');
          break;

        case 'Delete':
          button.classList.add('keyboard__key_dark');
          button.textContent = 'Del';
          break;

        case 'MetaLeft':
          button.classList.add('keyboard__key_dark');
          button.innerHTML = createIconHTML('window');
          break;

        case 'ArrowUp':
          button.classList.add('keyboard__key_dark');
          button.innerHTML = createIconHTML('keyboard_arrow_up');
          break;

        case 'ArrowLeft':
          button.classList.add('keyboard__key_dark');
          button.innerHTML = createIconHTML('winkeyboard_arrow_leftdow');
          break;

        case 'ArrowDown':
          button.classList.add('keyboard__key_dark');
          button.innerHTML = createIconHTML('keyboard_arrow_down');
          break;

        case 'ArrowRight':
          button.classList.add('keyboard__key_dark');
          button.innerHTML = createIconHTML('keyboard_arrow_right');
          break;

        case 'Space':
          button.classList.add('keyboard__key_extra-wide');
          button.innerHTML = createIconHTML('space_bar');
          break;

        default:
          button.textContent = isCapsLockPressed ? elem.key.toUpperCase() : elem.key;
      }

      fragment.append(button);
    });
    return fragment;
  },

};

window.addEventListener('DOMContentLoaded', () => {
  keyboard.init();
});

document.querySelector('#textarea').addEventListener('focus', () => {
  keyboard.openKeyboard();
});
