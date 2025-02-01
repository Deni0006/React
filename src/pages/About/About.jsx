import React from "react";
import Nav from "../../components/Nav/Nav";
import "./About.scss";
import { images } from "../../constants";
export const About = () => {
  return (
    <>
      <header>
        <section class="about__header app__background">
          <Nav></Nav>
          <div class="container">
            <div class="items__greeting">
              <h1 class="second__title">О Нас</h1>
            </div>
          </div>
        </section>
      </header>
      <main>
        <div className="container">
          <div className="about__items">
            <article>
              <div className="line"></div>
              <p>Your Vision Our Expertise Your Success Get Noticed Generate</p>
              <p>МЕДИКО ТЕХНОЛОГИЧЕСКИЙ КОЛЛЕДЖ</p>
              <img src={images.beta} alt="" />
            </article>

            <div className="about__description-item">
              <div className="about__img-box">
                <img src={images.beta} alt="" />{" "}
                <img src={images.beta} alt="" />
                <p className="text__description p-text-black">
                  Travel Ingushetia удалось привлечь самых ярких и опытных
                  консультантов индустрии туризма. Члены нашей команды потратили
                  тысячи часов.
                </p>
              </div>

              <div className="about__statistics">
                <div className="stat">
                  <span>10k+</span>
                  <p>Студентов</p>
                </div>
                <div className="stat">
                  <span>15k</span>
                  <p>Студентов</p>
                </div>
                <div className="stat">
                  <span>10k+</span>
                  <p>Студентов</p>
                </div>
                <div className="stat">
                  <span>45+</span>
                  <p>Студентов</p>
                </div>
              </div>

              <div className="about__info">
                <div className="image-group">
                  <img src={images.beta} alt="" />{" "}
                  <img src={images.beta} alt="" />{" "}
                  <img src={images.beta} alt="" />
                </div>
                <a href="#" className="learn__more">
                  <div className="app__flex">
                    <img src={images.arrow}></img>
                  </div>
                  <span>узнать больше</span>
                </a>
              </div>
            </div>
          </div>

          <div className="about__info-items">
            <img src={images.beta2} alt="" />

            <article>
              <h2>Our Expertise Noticed </h2>
              <h3>МЕДИКО ТЕХНОЛОГИЧЕСКИЙ КОЛЛЕДЖ</h3>

              <hr />

              <p className="p-text-black">
                Говорят, что программист – это специальность грядущего. И с этим
                сложно не согласиться, ведь спецтехнологии совершенствуются с
                грандиозной скоростью, и в мире программирования всякий день
                открывается что-то новое. Говорят, что программист – это
                специальность грядущего. И с этим Говорят, что программист – это
                специальность грядущего. И с этим
              </p>

              <p className="p-text-black">
                Поэтому наша цель не только обучить вас всему, что связано с
                современными компьютерными системами и их программированием, но
                и обучить ориентироваться в непрерывно обновляющихся системах,
                дабы ваши знания и умения постоянно были актуальны и
                востребованы. программированием, но и обучить ориентироваться в
                непрерывно обновляющихся системах, дабы ваши знания и умения
              </p>
            </article>
          </div>

          <div className="about__info-items">
            <img src={images.beta2} alt="" />

            <article>
              <h2>Our Expertise Noticed </h2>
              <h3>МЕДИКО ТЕХНОЛОГИЧЕСКИЙ КОЛЛЕДЖ</h3>

              <hr />

              <p className="p-text-black">
                Говорят, что программист – это специальность грядущего. И с этим
                сложно не согласиться, ведь спецтехнологии совершенствуются с
                грандиозной скоростью, и в мире программирования всякий день
                открывается что-то новое. Говорят, что программист – это
                специальность грядущего. И с этим Говорят, что программист – это
                специальность грядущего. И с этим
              </p>

              <p className="p-text-black">
                Поэтому наша цель не только обучить вас всему, что связано с
                современными компьютерными системами и их программированием, но
                и обучить ориентироваться в непрерывно обновляющихся системах,
                дабы ваши знания и умения постоянно были актуальны и
                востребованы. программированием, но и обучить ориентироваться в
                непрерывно обновляющихся системах, дабы ваши знания и умения
              </p>
            </article>
          </div>

          <div className="about__info-items">
            <img src={images.beta2} alt="" />

            <article>
              <h2>Our Expertise Noticed </h2>
              <h3>МЕДИКО ТЕХНОЛОГИЧЕСКИЙ КОЛЛЕДЖ</h3>

              <hr />

              <p className="p-text-black">
                Говорят, что программист – это специальность грядущего. И с этим
                сложно не согласиться, ведь спецтехнологии совершенствуются с
                грандиозной скоростью, и в мире программирования всякий день
                открывается что-то новое. Говорят, что программист – это
                специальность грядущего. И с этим Говорят, что программист – это
                специальность грядущего. И с этим
              </p>

              <p className="p-text-black">
                Поэтому наша цель не только обучить вас всему, что связано с
                современными компьютерными системами и их программированием, но
                и обучить ориентироваться в непрерывно обновляющихся системах,
                дабы ваши знания и умения постоянно были актуальны и
                востребованы. программированием, но и обучить ориентироваться в
                непрерывно обновляющихся системах, дабы ваши знания и умения
              </p>
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
