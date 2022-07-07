import React from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'

export default function Home(): JSX.Element
{

  return (
    <Layout
      title={`О себе`}
      description="Главная страница"
    >
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">

            <h1>Александр Алёхин</h1>
            <h5 style={{fontWeight: 'normal'}}>
              Веб-разработчик на стеке MERN
            </h5>
            <p>
              Добро пожаловать на мой персональный сайт! Я позиционирую себя как веб-разработчик на стеке
              <span> </span>
              <b>MERN</b> <i>(MongoDB, Express.JS, React.JS, Node.JS)</i>.
              На данный момент занимаюсь разработкой онлайн-проектов на заказ.
            </p>

            <p>
              Мне 22 года, живу в Москве. Работал в нескольких Московских и федеральных компаниях веб-разработчиком
              (Middle).
              Мои профессиональные навыки описаны <Link to="/services">тут</Link>, но при этом они постоянно
              расширяются,
              ибо я люблю узнавать что-то новое. Также есть любительские познания
              в области искусственного интеллекта, горизонтального масштабирования веб-приложений и криптовалюты.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
