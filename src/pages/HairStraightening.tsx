import React from 'react'

export default function HairStraightening() {
    const images = [
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1688470005/yakirmaman/20.jpg",
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1688470005/yakirmaman/21.jpg",
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1688470005/yakirmaman/22.jpg",
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/6.jpg",
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/3.jpg",
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/8.jpg",
    ];
    const videos = [
"https://res.cloudinary.com/yonatan-cajan22/video/upload/v1688544967/yakirmaman/video2.mp4"    ];
    return (
        <section className='straightening-section text-center'>
                  <a href="tel:+972534234428" className="phone-icon"></a>
            <div className="content flex column align-center justify-center ">
                <div>
                    <h2>החלקת חימר</h2>
                    <div className='text-container'>
                        <p>
                            השיער של כולנו מכיל חלבונים מכול מיני סוגים העיקרי מבינהם הוא קראטין, על מנת שהשיער שלך ימשיך לגדול, לצמוח ולהשאר בריא וחזק הוא צריך לקבל חלבון(קראטין)
                            החלקת החימר מכילה קראטין שעבר תהליך חיזוק וריכוז הקראטין יותר מחלבון הטבעי שקיים בשערה.
                            בשגרת היום יום של כול אחת ששערה עובר תהליכים כימיים כמו הבהרות, צבע, החלקות וכדומה..
                            השיער נפגע ומאבד מהקראטין הטבעי שלו ופה נכנסת ההחלקת החימר, מה מיוחד בה?
                            הקראטין המרוכז שבה חודר לסיב השערה וממלא ״חורים״,״שברים״ שבשערה וכך לא רק שאת מחליקה את שערך את גם משקמת אותו ברמה הגבוה ביותר !
                            בהחלקת החימר את מקבלת בעצם מספר יתרונות בלעדיים :
                            אין שימוש בפלורמלין מסרטן – ההחלקה המשקמת שמאושרת ע”י משרד הבריאות משום היותה בעלת 0% פורמלין. קראטין כלול בטיפול – כך שאת לא רק מחליקה את השיער, את גם משקמת אותו.

                        </p>
                    </div>
                </div>
                <div className='gallery-section flex wrap align-center justify-center'>
                    {images.map((img) => (
                        <img src={img} alt="straightening-img" key={img} />
                    ))}


                </div>
                <div>
                    <h2>החלקה יפנית</h2>
                    <div className='text-container'>
                        <p>
                            החלקה יפנית בעלת פורמולה טכנולוגית המאפשרת להשיג תוצאות מושלמות על שיער טבעי דק, טבעי עבה, שיער צבוע ופגום. ההחלקה משלבת רכיבים היוצרים את שינוי מבנה השערה ואת תמצית שמן הארגן שחודר לסיב השערה ונותן  מעטפת הגנה לשערה.
                            לאחר ההחלקה שיערך יראה מלא ברק בריא וחלק במראה טבעי. ישנה את שגרת היום שלך וימנע ממך זמן מיותר בבוקר

                        </p>
                    </div>
                </div>
                <div className='video-gallery flex wrap align-center justify-center'>
                    {videos.map((url) => (
                            <video  key={url} autoPlay muted loop={true} playsInline>
                                <source src={url} type='video/mp4' />
                                Sorry, your browser doesn't support videos.
                            </video>
                    ))}


                </div>
            </div>

        </section>
    )
}
