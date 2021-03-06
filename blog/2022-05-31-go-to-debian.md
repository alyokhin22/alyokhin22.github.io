---
slug: go-to-debian
title: Меняю Fedora на Debian
authors: alyokhin
tags: [новости-старости]
image: /img/blog/tfcnUMgf9QE.jpg
---

Fedora выпустила 36 версию, решил попробовать.

Значит в свой единственный выходной в неделю сохранил всё важное с компа, форматнул жёсткий диск и поставил Fedora 36.

![](/img/blog/tfcnUMgf9QE.jpg)

<!--truncate-->

Что могу сказать. Интерфейс переработали. Теперь всё стало выглядить более современно и свежо. Какие-то технические
подробности обновления я не стал смотреть, т.к. мне в любом обновлении важны закрытие багов, проработка интерфейса и
добавление новых интересных фич. Если там внутри системы было обновлено ядро Linux, меня это не интересует.

Так вот. После установки ОС я, в первую очередь, скачиваю все обновления, которые есть, потом пробегаюсь по настройкам
самой ОС, потом по настройкам программ.

Ну и дальше поставил PyCharm, WebStorm, Postman и другие программы. Поставил Node.JS, Redis... В общем потратил часов 5,
но вылизал свою систему идеально.

Ну и в итоге под конец своего выходного пытаюсь запустить проект одного из своих клиентов, а он не запускается...
Загуглил ошибку, там говорят что-то про версию Node.JS. А у Node.JS реально есть такая особенность, что если ваш проект
запускается, допустим, на 14 версии, то не факт, что запустится на 16. Поэтому в идеале с каждым проектом нужно свой
Node.JS тащить, как в Python venv.

В итоге я попробовал и 14 версию, и 16. И 16.15, и 16.13. Проект не запускается. Решил потом залить себе на сервер и...
там проект запустился! Причём с той же версией Node.JS, что изначально была у меня установлена в Fedora.

В общем у меня промелькнула мысль, что возможно это проблема в ОС. Возможно вырезали от туда нужные Node.JS библиотеки
или изменили стандартные пути для чего-то.

В итоге на след. день я попробовал установить Debian. На нём я не стал настраивать систему и программы, пока не убедюсь,
что проект запустится. В итоге сразу после установки ОС установил Node.JS, попробовал запустить проект и... ПРОЕКТ
ЗАПУСТИЛСЯ!

В общем в мире Linux есть одно не гласное правило: никогда не пользуйся свежими обновлениями чего-либо. Подожди, пока их
хорошенечко обкатают. Увы, Fedora заставила меня уйти от неё после 5 лет использования. Теперь буду сидеть на Debian.

---

Для тех, кто не понял, о чём речь:
Fedora и Debian - две операционные системы на основе Linux. Чаще всего Linux-дистрибутивами пользуются программиисты,
хакеры и сисадмины, хотя Linux-дистрибутивами могут пользоваться всех.

Fedora: [getfedora.org](https://getfedora.org)

Debian: [debian.org](https://debian.org)

Я не использую Windows для чего-либо уже 3.5 года
