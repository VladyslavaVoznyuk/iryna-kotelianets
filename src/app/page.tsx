'use client';
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import TestimonialsSlider from "@/app/TestimonialsSlider";
export default function HomePage() {
  return (
      <main className="font-sans">
        <nav className="navbar">
          <ul>
            <li><Link href="#hero">Головна</Link></li>
            <li><Link href="#about">Про мене</Link></li>
            <li><Link href="#services">Послуги</Link></li>
            <li><Link href="#testimonials">Відгуки</Link></li>
          </ul>
        </nav>

          <section id="hero" className="hero">
              <div className="hero-content">
                  <div className="hero-text">
                      <h1>Ірина Котелянець</h1>
                      <p>Поєдную потужні езотеричні інструменти для твого істинного щастя, проявлення і контакту з собою</p>
                      <a href="#services" className="btn1">Послуги</a>
                  </div>
                  <div className="hero-image">
                      <h2>Активація Кундаліні & Робота з підсвідомістю & Нумерологія</h2>
                      <img src="/hero.jpg" alt="Енергія та гармонія" />
                  </div>
              </div>
          </section>

          <section id="about" className="about section">
              <div className="about-content">
                  <div className="about-images">
                      <img src="/about1.jpg" alt="Про мене 1" />
                      <img src="/about2.jpg" alt="Про мене 2" />
                      <img src="/about3.jpg" alt="Про мене 3" />
                      <img src="/about4.jpg" alt="Про мене 4" />
                  </div>
                  <div className="about-text">
                      <h2>Про мене</h2>
                      <p>
                          <span className="highlight">Ірина Котелянець</span> – провідник, який використовує в роботі енергетичні та тілесні практики, роботу з підсвідомістю, трансформаційну гру Ліла та нумерологію. <br /><br />
                          <span className="highlight">2 роки</span> досвіду роботи, <span className="highlight">150+</span> щасливих клієнтів. <br /><br />
                          В роботі зі мною ти відновиш звʼязок з собою, почнеш помічати щастя в кожному моменті життя, розкриєш і приймеш в собі свої грані, і почнеш йти своїм істинним шляхом в любові. <br /><br />
                          <em>*робота відбувається в сумісній співпраці й за відповідальністю двох сторін.</em>
                      </p>
                  </div>

              </div>
          </section>

          <section id="services" className="services-section">
              <h2>Послуги</h2>

              <div className="services-cards">

                  <div className="service-card">
                      <Image src="/kundalini.jpg" alt="Кундаліні активація"
                             width={400}
                             height={300}
                             className="rounded-md"/>
                      <h3>Активація кундаліні</h3>
                      <p>
                          Активація енергії Кундаліні — це пробудження життєвої енергії.
                          Чим вона активніша, тим з більшою чутливістю і яскравістю ми проживаємо життя.
                      </p>
                      <a href="/services/kundalini" className="btn">Дізнатись більше</a>

                  </div>

                  <div className="service-card">
                      <Image src="/teta.jpg" alt="Тета-хілінг" />
                      <h3>Тетахілінг</h3>
                      <p>
                          Тета хілінг (ThetaHealing) - це практичні знання, які дозволяють працювати над своїм підсвідомим на хвилі Тета.
                      </p>
                      <a href="/services/thetahealing" className="btn">Дізнатись більше</a>

                  </div>

                  <div className="service-card">
                      <Image src="/nastav.jpg" alt="Наставництво" />
                      <h3>Індивідуальний супровід</h3>
                      <p>
                          Індивідуальний формат глибинної сумісної роботи над запитом.
                          Для тих, хто хоче попрацювати над своїми переконаннями, обмеженнями, розкрити та прийняти в собі свої грані, почати жити в згоді з собою і виконувати свої істинні бажання.
                      </p>
                      <a href="/services/nastav" className="btn">Дізнатись більше</a>

                  </div>

                  <div className="service-card">
                      <Image src="/lila.jpg" alt="Гра Ліла" />
                      <h3>Гра Ліла </h3>
                      <p>
                          Ліла це глибока духовно психолигічна гра, яка допомогає знайти відповіді на найважливіші запитання, побачити внутрішні ресурси та подолати обмеження
                          Це більше, ніж гра - це подорож до себе, яка розкриває шляхи до змін та особистісного зростання.</p>

                  </div>

                  <div className="service-card">
                      <Image src="/tsv.jpg" alt="Цвяхостояння " />
                      <h3>Цвяхостояння </h3>
                      <p>
                        Церемонія цвяхостояння - практика на пізнання себе через чесність та розслаблений стан
                          Комплексна робота на фізіологічному, духовному (енергетичному) та психологічному рівнях, можливість почути себе без прикрас та масок.
                          Якщо відчуваєш імпульс, тоді є можливість записатись. </p>

                  </div>

                  <div className="service-card">
                      <Image src="/numer.jpg" alt="Нумерологічний розбір особистості" />
                      <h3>Нумерологічний розбір особистості</h3>
                      <p>
                          Це один з методів нумерології, який лише за допомогою твоєї дати народження, глибше розкриє твій потенціал та здібності.
                          На консультації ми зможемо глибинно пропрацювати будь-яку сферу твого життя, окрім цінної інформації ти отримаєш заряд енергії та мотивації, яку потім заземлиш в дії за допомогою завдання.
                      </p>
                  </div>

              </div>
          </section>

          <section id="telegram" className="telegram">
              <div className="telegram-content">
                  <div className="telegram-text">
                      <h1> Мій телеграм-канал з безкоштовними практиками, підкастами та медитаціями.</h1>
                      <a href="https://t.me/iryna_kotelianets" className="btn">Приєднатися до каналу</a>
                  </div>
                  <div className="telegram-image">
                      <a href="https://t.me/iryna_kotelianets" target="_blank" rel="noopener noreferrer">
                          <Image src="/telegram.jpg" alt="Telegram" />
                      </a>
                  </div>
              </div>
          </section>

          <TestimonialsSlider />

          <footer className="footer">
          <p>©2025 Vlada Vonk. All rights reserved.</p>
        </footer>
      </main>
  );
}
