import '../css/common.css';
import BSN from 'bootstrap.native';

const refs = {
  modal: document.querySelector('#subscription-modal'),
  subscribeBtn: document.querySelector('button[data-subscribe]'),
  closeBtn: document.querySelector('button[data-dismiss="modal"]'),
};

const PROMPT_DELAY = 3000; // интервал с котрым будет показываться модальное окно
const MAX_PROMPT_ATTEMPTS = 3; //максимальное ко-во, сколько юудет показыватся модальное окно

let promptCounter = 0; //увеличиваем каждый раз, когда мы просим человека подписаться
let hasSubscribed = false;

const modal = new BSN.Modal(refs.modal);

openModal();

refs.modal.addEventListener('hide.bs.modal', openModal);

refs.closeBtn.addEventListener('click', () => {
  modal.hide();
});

refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

function openModal() {
  if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    console.log('Максимальное количество надоеданий ');
    return;
  }

  setTimeout(() => {
    console.log('Открываем надоедалку');
    modal.show();
    promptCounter += 1;
  }, PROMPT_DELAY);
}

function onSubscribeBtnClick() {
  hasSubscribed = true;
  modal.hide();
}
