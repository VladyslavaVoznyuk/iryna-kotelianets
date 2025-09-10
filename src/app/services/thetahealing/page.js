import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";

import "./index.css";

export default function ThetaPage() {
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
                <h1 className="page-title">Тета-Хілінг</h1>

                <div className="service-container">
                    <div className="service-image">
                        <Image
                            src="/images/theta2.jpg"
                            alt="Тета-Хілінг"
                            width={500}
                            height={700}
                            className="rounded-xl shadow-lg"
                        />
                    </div>

                    <div className="service-info">
                        <p className="intro">
                            Тета-Хілінг – це одна з ефективних технік в роботі з переконаннями, що обмежують, з негативними емоціями, страхами та іншими блоками в підсвідомості людини. </p>
                        <p>
                            За допомогою Тета-сесій можна досягти створення гармонійних відносин, поліпшення фінансового становища, відновлення стосунків з сімʼєю і т.д.
                        </p>
                        <p>
                            Тета-Хілінг – це особливий метод, що дозволяє шляхом перебування в певному медитативному стані, на тета хвилях мозку, очищатися на емоційному, духовному і фізичному рівнях.
                            Метод, що дозволяє на клітинному рівні переписувати програми й переконання людини.
                        </p>
                        <p>
                            Практика Тета-Хілінгу допомагає людині усвідомити приховані установки, що формувалися роками, і які заважають втілювати бажання та жити в гармонії з собою.
                            За допомогою цієї техніки можна знайти глибинні причини проблем, зняти внутрішні обмеження та навчитися формувати позитивні переконання.
                            Це потужний інструмент для самопізнання, зцілення та духовного розвитку
                        </p>

                        <div className="format">
                            <h2>Формат</h2>
                            <ul>
                                <li>Офлайн (Берлін / Житомир)</li>
                                <li>Онлайн з будь-якої точки світу.</li>
                            </ul>
                        </div>

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
