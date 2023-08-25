import React, { Ref, useRef, useState } from "react";
import headPhonesImg from "../assets/imgs/headphones.svg";
import sendImg from "../assets/imgs/send.svg";
import emailjs from "@emailjs/browser";
import YakirSrc from '../assets/imgs/yakir.jpg'
export default function Contact() {
    const [sendMessage, setSendMessage] = useState(false);
    const form = useRef();
    

    const sendEmail = (e: EmailFormEvent) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_26745cu",
                "template_9uzagj1",
                e.target,
                "nAg_NofuvJfYHzrFz"
            )
            .then(
                () => {
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
                                    <input type="text" name="user_name" placeholder="שם מלא"    required={true} />
                                </div>
                                <div className="filed">
                                    <input
                                        type="email"
                                        name="user_email"
                                        placeholder="מייל"
                                        required={true}
                                    />
                                </div>
                                <div className="filed">
                                    <textarea name="message" placeholder="תוכן הפנייה"   required={true} />
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
