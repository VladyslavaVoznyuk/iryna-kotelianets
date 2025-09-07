import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";

import "./index.css";
export default function NastavPage() {
    return (
        <main>
            <nav className="navbar">
                <ul>
                    <li><Link href="/">Головна</Link></li>
                    <li><Link href="/#about">Про мене</Link></li>
                    <li><Link href="/#services">Послуги</Link></li>
                    <li><Link href="/#testimonials">Відгуки</Link></li>
                </ul>
            </nav>

            <section className="service-detail section-bg">
                <div className="service-container">
                    <div className="service-image">
                        <Image
                            src="/images/nastav2.jpg"
                            alt="Індивідуальний супровід"
                            width={400}
                            height={600}
                            className="rounded-xl shadow-lg"
                        />
                    </div>

                    <div className="container">
                        <h1>Індивідуальний супровід</h1>

                        <p className="intro">
                            Для тих, хто хоче попрацювати над своїми переконаннями, обмеженнями, розкрити та прийняти в собі свої грані,
                            почати жити в згоді з собою і виконувати свої істинні бажання.
                        </p>

                        <div className="format">
                            <h2>Формат</h2>
                            <ul>
                                <li>6 тижнів знаходження в спільному полі</li>
                                <li>6 онлайн зустрічей (1.5-2 години)</li>
                                <li>Постійна підтримка в чаті</li>
                                <li>Індивідуальні практики та медитації</li>
                            </ul>
                        </div>

                        <div className="tools">
                            <h2>Інструменти для роботи</h2>
                            <p>(підбираються індивідуально)</p>
                            <ul>
                                <li>Тета Хілінг (робота з підсвідомими програмами, їхнє зцілення на різних рівнях)</li>
                                <li>Медитації</li>
                                <li>Тілесні практики</li>
                                <li>Активація енергії Кундаліні</li>
                                <li>Нумерологія</li>
                                <li>Гра Ліла</li>
                            </ul>
                        </div>

                        <div className="areas">
                            <h2>Сфери, з якими можна попрацювати</h2>
                            <ul>
                                <li>Реалізація</li>
                                <li>Фінанси</li>
                                <li>Контакт з собою</li>
                                <li>Відновлення внутрішньої сили й спокою</li>
                                <li>Стосунки (з собою, соціумом, батьками, партнером)</li>
                                <li>Відкриття творчого потенціалу</li>
                            </ul>
                            <p class="note">(будь-які сфери та запит обговорюються та формуються індивідуально)</p>
                        </div>
                        <em>
                            *для зацікавлених в сумісній роботі, проводиться 20-ти хвилинна безкоштовна консультація ,
                            на якій ми сформуємо запит, обговоримо інструменти для роботи, умови та потенційний результат
                            після сесій
                        </em>
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