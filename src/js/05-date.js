import '../css/common.css';

/*
 - Создание
 - Unix-время - ко-во милесек которое прошло с 1.01.1970 года 00:00
 - Методы
 - Разница времени
 - Date.now()
*/

const date1 = Date.now();

setTimeout(() => {
  const date2 = Date.now();

  console.log('date1', date1);
  console.log('date2', date2);

  console.log(date2 - date1);
}, 3000);
