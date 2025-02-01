import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import Nav from "../../components/Nav/Nav";
import Education from "../../data/education";
import Specialist from "../../data/Specialist";
import "./Home.scss";
import "swiper/css";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const homeSlidePerson = [1, 2, 3, 5]
  useEffect(() => {
    document.title = "МТК"; // Меняем title
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <header>
        <section className="greeting app__background">
            <Nav></Nav>
            <div className="container">
            <div className="items__greeting">
              <p className="p__headline">ДОБРО ПОЖАЛОВАТЬ В</p>
              <h1 className="sub__title">
                МЕДИКО ТЕХНОЛОГИЧЕСКИЙ <br /> КОЛЛЕДЖ
              </h1>
              <p className="p__headline">ПРИСОЕДЕНЯЙТЕСЬ К КОМАНДЕ МТК</p>
              <button className="header__button-left">
                <a href="#">Поступить</a>
              </button>
              <button className="header__button-right">
                <a href="#">Наша История</a>
              </button>
            </div>
          </div>
        </section>
      </header>

      <main>
        {/*Новости */}

        <section className="news">
          <div className="head__title">
            <h2 className="head-text">
              <span>Новости</span>
            </h2>
          </div>
          <div className="container">
            <div className="news__container app__flex">
              <div className="news__img-box">
                <img src={images.news1}></img>
              </div>
              <div className="news__content">
                <h2 className="bold-text">
                  How HIV research has reshaped modern medicine
                </h2>
                <p className="p-text-gray">
                  Although the search for a cure for HIV continues, the
                  40-plus-year journey has fueled advances well beyond the
                  virus.
                </p>
                <div>
                <a href="#" className="learn__more">
                    <div className="app__flex">
                      <img src={images.arrow}></img>
                    </div>
                    <span>узнать больше</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="news__container app__flex rotate">
              <div className="news__img-box">
                <img src={images.news2}></img>
              </div>
              <div className="news__content">
                <h2 className="bold-text">
                  Beginning of the end of the HIV epidemic?
                </h2>
                <p className="p-text-gray">
                  Researchers may have found a powerful new preventative
                  treatment against the virus that causes AIDS.
                </p>
                <div>
                <a href="#" className="learn__more">
                    <div className="app__flex">
                      <img src={images.arrow}></img>
                    </div>
                    <span>узнать больше</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="news__container app__flex">
              <div className="news__img-box">
                <img src={images.news3}></img>
              </div>
              <div className="news__content">
                <h2 className="bold-text">How does a virus work?</h2>
                <p className="p-text-gray">
                  What comes to mind when you hear the word “virus”? Perhaps the
                  common cold, a cold sore, or maybe even a global pandemic.
                </p>
                <div>
                  <a href="#" className="learn__more">
                    <div className="app__flex">
                      <img src={images.arrow}></img>
                    </div>
                    <span>узнать больше</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Профессии */}

        <section className="profession">
          <div className="head__title">
            <h2 className="head-text">
              Наши <br /> <span>Специальности</span>
            </h2>
          </div>
          <div className="container">
            <div className="profession__block-items">
              {Education.map((item) => (
                <div
                  className="profession__block-item"
                  key={`Education + ${item.id}`}
                >
                  <img src={`/src/assets/profession/${item.imgUrl}`} alt={item.name} />
                  <h2 className="profession__title">{item.name}</h2>
                  <span></span>
                  <p className="p-text-gray">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Команда */}

        <section className="team">
          <div className="head__title">
            <h2 className="head-text">
              Наши <span>Эксперты</span>
            </h2>
          </div>
          <Swiper
            className="our_experts"
            slidesPerView={windowWidth < 700 ? 1 : 2}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
          >
            {Specialist
            .filter((item => homeSlidePerson.includes(item.id)))
            .map(item =>(
              <SwiperSlide key={`Home slide + ${item.id}`}>
              <div className="person__parent">
                <div className="person__name">
                  <img src= {`/src/assets/team/${item.imgUrl}`} />
                  <article>
                    <h2>{item.name}</h2>
                    <p>{item.desc}</p>
                  </article>
                </div>
                <div className="person__education custom-cursor-element">
                  <article>
                    <h2>Мои направления:</h2>
                    <p>{item.education}</p>
                  </article>
                </div>
              </div>
            </SwiperSlide>
            ))
            }
          </Swiper>
          <div className="our__teams">
            <div className="our__teams-content">
              <article>
                <h2>Познакомьтесь с нашей полной командой</h2>
                <p>
                  Наши опытные консультанты — это штатные сотрудники, которые
                  занимают оплачиваемые должности и не получают комиссионных с
                  продаж. Наш единственный стимул - сделать наших клиентов
                  счастливыми, разработав индивидуальные поездки и превзойдя
                  ожидания по обслуживанию. Хотя каждый клиент сотрудничает с
                  одним консультантом, коллективные знания лучшей команды в
                  отрасли являются уникальным бонусом в нашем процессе
                  планирования и планирования поездок.
                </p>
                <Link to="/Experts">
                  <button>Познакомьтесь с нашей полной командой</button>
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* Вопросы */}

        <section className="questions">
          <div className="container">
            <div className="head__title">
              <h2 className="head-text">
                Часто задаваемые <br /> <span>вопросы</span>
              </h2>
            </div>
            <div className="questions__block-items">
              <div className="questions__item">
                <p>
                  Нужно ли сдавать вступительные экзамены для поступления в
                  колледж?
                </p>
                <div className="questions__plus"></div>
              </div>
              <div className="questions__item">
                <p>Какие документы нужны для поступления в колледж?</p>
                <div className="questions__plus"></div>
              </div>
              <div className="questions__item">
                <p>
                  Есть ли возможность сменить специальность в процессе обучения?
                </p>
                <div className="questions__plus"></div>
              </div>
              <div className="questions__item">
                <p>Можно ли обучаться дистанционно?</p>
                <div className="questions__plus"></div>
              </div>
              <div className="questions__item">
                <p>Является ли ваш колледж государственным?</p>
                <div className="questions__plus"></div>
              </div>
              <div className="questions__item">
                <p>Можно ли оплачивать курс в рассрочку?</p>
                <div className="questions__plus"></div>
              </div>
              <div className="questions__item">
                <p>Можно ли отменить или вернуть оплату за курс?</p>
                <div className="questions__plus"></div>
              </div>
              <div className="questions__item">
                <p>Можно ли оплатить курс через карту?</p>
                <div className="questions__plus"></div>
              </div>
              <div className="questions__item">
                <p>Можно ли оплатить курс наличными?</p>
                <div className="questions__plus"></div>
              </div>
              <div className="questions__item">
                <p>Какой документ я получу по итогам обучения?</p>
                <div className="questions__plus"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
