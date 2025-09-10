"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./globals.css";

const testimonials = [
    { id: 1, src: "/clients/client1.jpg", alt: "Відгук 1" },
    { id: 2, src: "/clients/client2.jpg", alt: "Відгук 2" },
    { id: 3, src: "/clients/client3.jpg", alt: "Відгук 3" },
    { id: 4, src: "/clients/client4.jpg", alt: "Відгук 4" },
    { id: 5, src: "/clients/client5.jpg", alt: "Відгук 5" },
    { id: 6, src: "/clients/client6.jpg", alt: "Відгук 6" },
    { id: 7, src: "/clients/client7.jpg", alt: "Відгук 7" },
    { id: 8, src: "/clients/client8.jpg", alt: "Відгук 8" },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const visibleSlides = isMobile ? 1 : 2;

    const prevSlide = () => {
        setIndex((prev) =>
            prev === 0 ? testimonials.length - visibleSlides : prev - 1
        );
    };

    const nextSlide = () => {
        setIndex((prev) =>
            prev >= testimonials.length - visibleSlides ? 0 : prev + 1
        );
    };

    return (
        <section id="testimonials" className="testimonials">
            <h2>Відгуки</h2>
            <div className="testimonial-slider">
                <div
                    className="testimonial-row"
                    style={{ transform: `translateX(-${index * (100 / visibleSlides)}%)` }}
                >
                    {testimonials.map((t) => (
                        <div key={t.id} className="testimonial-card">
                            <Image
                                src={t.src}
                                alt={t.alt}
                                width={300}
                                height={300}
                                className="rounded-xl shadow"
                            />
                        </div>
                    ))}
                </div>
                <button className="arrow prev" onClick={prevSlide}>
                    ◀
                </button>
                <button className="arrow next" onClick={nextSlide}>
                    ▶
                </button>
            </div>
        </section>
    );
}
