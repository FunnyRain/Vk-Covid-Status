# Vk-Covid-Status

> Устаналивает смайлик Ковид возле фамилии
***Токен брать тут https://oauth.vk.com/authorize?client_id=7362610&scope=online&redirect_uri=https://oauth.vk.com/blank.html&display=page&response_type=token&revoke=1*** 
![example](https://i.imgur.com/Jpscnil.png)

### **```config.js```**

```js
module.exports = {

    //? Токен
    token: `токен`,

    //! Id смайлика (Смотри README.md) / -1 - случайный смайлик
    status_id: -1,

    //* Время обновления (в секундах)
    time: 1
}
```

### **```status_id:```**

```js
    -1 - Случайный
    0 - Убрать статус
    1 - Сижу дома
    2 - Иногда выхожу
    3 - Игнорирую пандемию
    4 - Хожу на работу
    5 - Болею
    9 - Глажу кота
    10 - Спасаю жизни
    17 - Строю теории заговора
    19 - Уже ничего не жду
    20 - Сторонюсь соседей
    21 - Хочу свежего воздуха
    22 - Преисполняюсь в своем познании
    23 - Теперь шеф-повар
    24 - Не могу сидеть дома
    25 - Изолируюсь на даче
    26 - Жду 2021
    27 - Путешествую кукухой
    28 - Верю в светлое будущее
    29 - Мечтаю о море
    30 - Строю планы
    31 - Скучаю по офису
    32 - Навожу порядок
    33 - Придумываю, что съесть
    34 - Прогуливаюсь до мусорки
    // 35 - Вспонимаю VK Fest - Не работает
    // 36 - Оканчиваю школу онлайн - Не работает
    // 37 - Готовлюсь к егэ - Не работает
    38 - Смотрю клипы
    39 - Покупаю ВКонтакте
```
