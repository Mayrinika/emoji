# Пара №1
# Виджет выбора эмоджи
Задача сделать встраиваемый на другие сайты инструмент для выбора эмоджи.

- Виджет открывается по нажатию на кнопку, которая размещается поверх поля ввода.
- В самом виджете есть список эмоджи отсортированный как угодно, хоть по порядку, хоть по цветам. Хоть вообще в нем только животных или только еду выбрать можно. 
- Когда пользователь кликает по какому-то эмоджи, оно добавляется в конец текста в поле ввода, в котором была кнопка.
- Так как виджет предполагается для использования на других сайтах, нужно придумать такой сценарий, чтобы виджет рисовал себя сам, при вызове какой-то функции, в которую передается только ссылка на DOM-ноду поля ввода, например, такой интерфейс: function emojiWidget(input, settings).
- Должна быть возможность выбрать темную или светлую тему виджету
- В виджете должно быть можно искать эмоджи по их текстовому описанию. Например, если написать, тигр, то список отфильтруется и покажет только 🐅 и 🐯
* Должна быть возможность добавить некоторые эмоджи в избранное. Или они сами туда должны добавляться, например, как «недавно использованные» или «самые часто-используемые».
** Так как это кроссайтовая штука, то должна быть возможность видеть избранные эмоджи, если они добавлены на любом сайте с этим виджетом
** Сделать расширение для хрома. Оно будет добавлять кнопку для выбора эмоджи во все поля ввода, на любом сайте.
