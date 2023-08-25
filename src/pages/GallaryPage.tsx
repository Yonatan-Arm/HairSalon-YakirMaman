import React, { useState } from 'react';
export default function GallaryPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [src, setSrc] = useState('');
    const imgsSrc: string[] = [
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/6.jpg",
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/3.jpg",
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/8.jpg",
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1687953025/yakirmaman/lightening1.jpg",
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1687953025/yakirmaman/lightening2.jpg",
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1687945667/yakirmaman/7.jpg",
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1687953025/yakirmaman/lightening3.jpg",
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1687953025/yakirmaman/lightening4.jpg",
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1687953025/yakirmaman/lightening5.jpg",
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1687953025/yakirmaman/lightening6.jpg",
    ];

    const handleClick = (e: ChooseImg) => {
        setSrc(e.target.src);
        setIsOpen(!isOpen);
    }

    return (

        <section className="gallery">
            {isOpen &&
                <div className="gallery-open" onClick={() => setIsOpen(!isOpen)}>
                    <button onClick={() => setIsOpen(!isOpen)}>X</button>
                    <img className='gallery-imgOpen' src={src} alt="grid-img" />
                </div>}
            <h2 className="text-center" >- גלריה -</h2>
            <div className="gallery-grid">
                {imgsSrc.map((img, i) => {
                    return (
                        <div key={i} className='gallery-item' id={'item-' + i} onClick={handleClick}>
                            <img className='gallery-bg' src={img} alt="grid-img" loading='lazy' />
                        </div>

                    );
                })}

            </div>
        </section>
    );
}





