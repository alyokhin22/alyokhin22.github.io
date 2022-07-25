---
slug: soskidki-bot-launched
title: Создал Telegram-бота для проекта So Skidki
authors: alyokhin
tags: [портфолио, партнёры]
image: /img/blog/cpNGRDnaCGQ.jpg
---

Сделал Telegram-бота для проекта So Skidki.

![](/img/blog/cpNGRDnaCGQ.jpg)

<!--truncate-->

Это бот-каталог скидок на различные товары/услуги от крупных российских ритейлеров.

Бот сделан на __Node.JS__ с использованием фреймворка __Telegraf.JS__ ([telegraf.js.org](https://telegraf.js.org)).
Написан на __TypeScript__. В качестве БД используется __MongoDB__.

Также сделал веб-интерейс для управления ботом (пример: [botadmin.hoolie.org](https://botadmin.hoolie.org)). Там можно
добавлять, изменять, удалять категории со скидками и сами скидки; вносить для этого изменения в исходный код бота не
требуется.

---

Кроме того на том же стеке реализовал VK-бота для тех же нужд ([vk.me/mimi_skidki](https://vk.me/mimi_skidki)). В
качестве фреймворка использовал __vk-io__ ([npmjs.com/package/vk-io](https://npmjs.com/package/vk-io)).

В плюс ко всему, я написал ещё одного бота, который автоматичеки пересылает посты из группы проекта во ВКонтакте в его
же Telegram-канал. Стек разработки тот же
