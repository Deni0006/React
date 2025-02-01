import React, { useState } from "react";
import Nav from "../../components/Nav/Nav";
import { images } from "../../constants";
import "./Contact.scss";

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dist:'',
    selectedDirections: [],
  });

  // Обработчик изменения данных формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Обработчик отправки формы
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      dist: formData.dist
    };

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      // Отображаем результат отправки
      if (result.status === 200) {
        setResponseMessage(result.message);
        setResponseColor('green');
      } else {
        setResponseMessage('Произошла ошибка при отправке.');
        setResponseColor('red');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Произошла ошибка')
    }
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const directions = [
    "Информационные системы",
    "Правоохранительная деятельность",
    "Экономика",
    "Делопроизводитель",
    "ПНК",
    "Сестринское дело",
    "Акушерское дело",
    "Стоматолог",
    "Ортопед",
    "Фармация",
    "Медсестра",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const handleCheckboxChange = (direction) => {
    setFormData((prev) => {
      const alreadySelected = prev.selectedDirections.includes(direction);
      return {
        ...prev,
        selectedDirections: alreadySelected
          ? prev.selectedDirections.filter((item) => item !== direction)
          : [...prev.selectedDirections, direction],
      };
    });
  }

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        {/* Блок с контактной информацией */}
        <div className="contact__up">
          <div className="contact__content-up">
            <img src={images.geo} alt="Геолокация" />
            <h1 className="contact__title">Адрес</h1>
            <p>
              г. Карабулак <br /> улица Фрунзе 10
            </p>
          </div>
          <div className="contact__content-up">
            <img src={images.phone} alt="Телефон" />
            <h2 className="contact__title">Звонок бесплатный</h2>
            <p>8928-006-06-06</p>
          </div>
        </div>

        {/* Блок с формой */}
        <div className="contact__form">
          <div className="contact__form-content">
            <h2>Контакты</h2>
            <form onSubmit={handleSubmit}>
              {/* Поле для имени */}
              <div className="name">
                <div>
                  <label className="contact__form-label" htmlFor="firstName">Имя</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Введите имя"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="contact__form-label" htmlFor="lastName">Фамилия</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Введите фамилию"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Поле для почты */}
              <label className="contact__form-label" htmlFor="email">Почта</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Введите email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              {/* Выпадающий список */}
              <label className="contact__form-label">Направления</label>
              <div className="contact__form-dropdown">
                <div
                  className="dropdown-button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Выберите направление
                  <img src=""></img>
                  <span>{dropdownOpen ? "▲" : "▼"}</span>
                </div>

                {dropdownOpen && (
                  <div className="dropdown-list">
                    {directions.map((direction, index) => (
                      <div key={index} className="dropdown-item">
                        <input
                          type="checkbox"
                          id="dist"
                          checked={formData.selectedDirections.includes(
                            direction
                          )}
                          onChange={() => handleCheckboxChange(direction)}
                        />
                        {direction}
                      </div>
                    ))}
                    <div className="dropdown-footer">
                      <button
                        type="button"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Выбрать
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Кнопка отправки */}
              <div className="contact__submit">
                <button type="submit">Отправить</button>
              </div>
            </form>
          </div>

          {/* Карта */}
          <div className="map-container">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d893.151232946243!2d44.88569427600286!3d43.304830969483824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sru!4v1737927851642!5m2!1sru!2sru" 
              width="100%"
              height="400"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              title="map"
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
