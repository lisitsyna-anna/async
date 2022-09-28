import '../css/common.css';

/*
 * Метод window.setTimeout(callback, delay, args)
 */

// console.log('До вызова setTimeout');

// setTimeout(() => {
//   console.log('Внутри callback для setTimeout');
// }, 2000);

// console.log('После  вызова setTimeout');
/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

const logger = time => {
  console.log(`Лог через ${time}ms, потому что не отменили setTimeout`);
};

const timerId = setTimeout(logger, 2000, 2000);

const shouldCancelTime = Math.random() > 0.3;

console.log(shouldCancelTime);

if (shouldCancelTime) {
  clearTimeout(timerId);
}
