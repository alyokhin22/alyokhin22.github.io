---
slug: fylik-launched
title: Встречайте, Fylik!
authors: alyokhin
tags: [пет-проекты, fylik]
image: https://fylik.ru/poster.png
---

Недавно запустил свой проект [Fylik](https://fylik.ru).

Это пет-проект, который я сделал в первый раз ещё в детстве. Его суть заключается в том, что любой человек может
анонимно загружать файлы и кто угодно может их скачать. Все загруженные файлы находятся на главной странице проекта и со
временем автоматически удаляются.

![Fylik Poster](https://fylik.ru/poster.png)

<!--truncate-->

Файлик имеет открытый исходный
код ([github.com/hoolie-projects/fylik-web](https://github.com/hoolie-projects/fylik-web)) и открытый REST
API ([api.fylik.ru](https://api.fylik.ru)).

Проект построен на стеке технологий MERN. На клиенсткой стороне использован CRA с библиотеками router5 для роутинга и
redux для хранения информации в браузере и обмена ею между компонентами. На серверной стороне классика: Express.JS +
MongoDB. Возможно в будущем сделаю реализацю на Redis вместо MongoDB.

Сам проект [fylik.ru](https://fylik.ru)
