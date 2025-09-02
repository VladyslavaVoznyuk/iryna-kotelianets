import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";

import "./index.css";
export default function KundaliniPage() {
    return (
        <main>
            <nav className="navbar">
                <ul>
                    <li><a href="/">Головна</a></li>
                    <li><a href="/#about">Про мене</a></li>
                    <li><a href="/#services">Послуги</a></li>
                    <li><a href="/#testimonials">Відгуки</a></li>
                </ul>
            </nav>

            <section className="service-detail section-bg">
                <div className="service-container">
                    <div className="service-image">
                        <Image
                            src="/images/kundalini2.jpg"
                            alt="Активація кундаліні"
                            width={400}
                            height={600}
                            className="rounded-xl shadow-lg"
                        />
                    </div>

                    <div className="service-info">
                        <h2>Активація кундаліні</h2>
                        <p>
                            Активація енергії Кундаліні — це пробудження життєвої енергії.
                            Чим вона активніша, тим з більшою чутливістю і яскравістю ми проживаємо життя 🪐
                            Можна звернути увагу, як проявляють себе діти…
                        </p>
                        <p>
                            Згодом наша енергія блокується. Нам стає страшно про себе заявити,
                            ми не знаємо чого хочемо від життя. Але практика допомагає розблокувати
                            власну енергію. Вона безпечна і посилює контакт з собою ✨
                        </p>
                        <p>
                            Активація енергії Кундаліні — це потужний процес, що пробуджує вашу внутрішню силу та трансформує життя.
                            Вона сприяє глибокому самопізнанню, емоційному зціленню та розкриттю творчого потенціалу.
                        </p>
                        <p>
                            Після практики ви можете відчути підвищення енергії, ясність думок та гармонію з собою. 🪐</p>
                        <p> Під час практики можливі сльози, сміх, мурашки, поколювання, активні рухи енергії в тілі, відповіді на хвилюючі питання, звільнення від емоційних блоків
                        </p>
                        <div className="format">
                            <h2>Формат</h2>
                            <ul>
                                <li>Офлайн (Берлін / Житомир)</li>
                                <li>Онлайн з будь-якої точки світу.</li>
                            </ul>
                        </div>

                        <p>
                        <span className="highlight">Групові та індивідуальні сесії.</span>
                        </p>
                        <div className="social-links">
                            <p>Запис можна здійснити в Telegram та Instagram</p>
                            <div className="icons">
                                <a
                                    href="https://t.me/ira_kotelianets"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon icon-telegram"
                                >
                                    <FaTelegramPlane size={28} />
                                </a>
                                <a
                                    href="https://www.instagram.com/iryna_kotelianets?igsh=MW9vaHRtMW5xdDRyaQ=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon icon-instagram"
                                >
                                    <FaInstagram size={28} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}