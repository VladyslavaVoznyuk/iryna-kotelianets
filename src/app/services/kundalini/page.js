import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";

import "./index.css";

export default function KundaliniPage() {
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
                <h1 className="page-title">Активація енергії Кундаліні</h1>

                <div className="service-container">
                    <div className="service-image">
                        <Image
                            src="/images/kundalini2.jpg"
                            alt="Активація кундаліні"
                            width={500}
                            height={700}
                            className="rounded-xl shadow-lg"
                        />
                    </div>

                    <div className="service-info">
                        <p>
                            Активація енергії Кундаліні — це пробудження життєвої енергії.
                            Чим вона активніша, тим з більшою чутливістю і яскравістю ми проживаємо життя 🪐
                            Можна звернути увагу, як проявляють себе діти…
                        </p>
                        <p>
                            Впродовж життя, наша енергія блокується – нам стає страшно про себе заявити, ми не знаємо чого хочемо від життя.
                            Практика допомагає розблокувати власну енергію та посилити контакт з собою.
                        </p>
                        <p>
                            Активація енергії Кундаліні — це потужний процес, що пробуджує вашу внутрішню силу та трансформує життя.
                            Вона сприяє глибокому самопізнанню, емоційному зціленню та розкриттю творчого потенціалу.
                        </p>
                        <p>
                            Після практики ви можете відчути підвищення енергії, ясність думок та гармонію з собою. 🪐
                        </p>
                        <p>
                            Під час практики можливі сльози, сміх, мурашки, поколювання, активні рухи енергії в тілі,
                            відповіді на хвилюючі питання, звільнення від емоційних блоків.
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
                                <Link
                                    href="https://t.me/ira_kotelianets"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon icon-telegram"
                                >
                                    <FaTelegramPlane size={28} />
                                </Link>
                                <Link
                                    href="https://www.instagram.com/iryna_kotelianets?igsh=MW9vaHRtMW5xdDRyaQ=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon icon-instagram"
                                >
                                    <FaInstagram size={28} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
