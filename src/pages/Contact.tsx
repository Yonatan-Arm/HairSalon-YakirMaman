import React, { Ref, useRef, useState } from "react";
import headPhonesImg from "../assets/imgs/headphones.svg";
import sendImg from "../assets/imgs/send.svg";
import emailjs from "@emailjs/browser";
import YakirSrc from '../assets/imgs/yakir2.jpg'
export default function Contact() {
    const [sendMessage, setSendMessage] = useState(false);
    const form = useRef();

    const sendEmail = (e: any) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_qzxap0r",
                "template_wt0f4ng",
                e.target,
                "nAg_NofuvJfYHzrFz"
            )
            .then(
                (result) => {
                    setSendMessage(true);
                    setTimeout(() => {
                        setSendMessage(false);
                    }, 10000);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <section className="contact-section">
            <h2 className="flex align-center justify-center">
                <img src={headPhonesImg} alt="headPhones-img" />
                יצירת קשר
            </h2>
            <div className="contact-contianer flex row ">

                <div className="image-contianer">
                    <img src={YakirSrc} alt="YAKIR-IMG" />
                </div>
                <div className="content-box flex">

                    {sendMessage ? (
                        <div className="flex column justify-center message" dir="rtl">
                            <h2>תודה על המייל!</h2>
                            <p>ניצור איתכם קשר בהקדם האפשרי</p>
                        </div>
                    ) : (
                        <form onSubmit={sendEmail} ref={form} dir="rtl">
                            <h2>צרו איתנו קשר</h2>
                                <h3 className="text-center" >מלאו את הפרטים הבאים וניצור איתכם קשר בהקדם:</h3>
                            <div className="flex column justify-center">

                                <div className="filed">
                                    <input type="text" name="user_name" placeholder="שם מלא" />
                                </div>
                                <div className="filed">
                                    <input
                                        type="email"
                                        name="user_email"
                                        placeholder="מייל"
                                    />
                                </div>
                                <div className="filed">
                                    <textarea name="message" placeholder="תוכן הפנייה" />
                                </div>
                            </div>
                            <div className="btn-box">
                                <button>
                                    {" "}
                                    שלח
                                    <img src={sendImg} alt="send-img" />
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>

    )
}
