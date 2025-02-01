import React, { useEffect } from "react";
import Nav from "../../components/Nav/Nav";
import Specialist from "../../data/Specialist";
import "./Experts.scss";
export const Experts = () => {
  useEffect(() => {
    document.title = "Наши Специалисты"; // Меняем title
  }, []);
  return (
    <>
      <header> 
        <section className="experts app__background">
            <Nav></Nav>
            <div className="container">
            <div className="items__greeting">
              <h1 className="second__title">Наши эксперты</h1>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className="our__experts">
          <div className="our__experts-title">
            <h2>
              Travel Ingushetia удалось привлечь самых ярких и опытных
              консультантов индустрии туризма. Члены нашей команды потратили
              тысячи часов, лично проверяя рекомендуемые ими отели, кемпинги и
              направления по всему миру. Наши консультанты были директорами
              некоторых крупнейших туристических компаний страны и ежегодно
              получают награды. Самое главное, наши консультанты дружелюбны,
              хорошо осведомлены и увлечены нашей миссией: созданием
              индивидуальных поездок, которые превосходят ожидания каждого
              клиента.
            </h2>
            <p>ПОЗНАКОМЬТЕСЬ С НАШЕЙ КОМАНДОЙ</p>
          </div>

          <div className="our__experts-bio">
              {Specialist.map((item) =>(
                <div className="expert__bio" key={`Expert + ${item.id}`}>
                    <img src= {`/src/assets/team/${item.imgUrl}`}></img>
                    <article>
                        <h2>{item.name}</h2>
                        <p className="p-text">{item.desc}</p>
                    </article>
                </div>
              ))}
          </div>

        </section>
      </main>
    </>
  );
};

export default Experts;
