import React from 'react'
import whatsappLogoSrc from '../assets/imgs/whatsapp-logo.svg'
import instagramLogoSrc from '../assets/imgs/instagram-logo.svg'
import facebookLogoSrc from '../assets/imgs/facebook-logo.svg'

export default function Footer() {
  return (
    <section id='Contect' className='footer-section flex column align-center justify-center'>
        <div className='flex row links'>
        <a href="https://api.whatsapp.com/send?phone=972534234428" target='blank'>
            <img src={whatsappLogoSrc} alt="whatsapp_logo" />
            </a>
            <a href="https://www.instagram.com/yakir_maman_hair/" target='blank'>
            <img src={instagramLogoSrc} alt="instagram_logo" />
            </a>
            <a href="https://www.facebook.com/yakir.maman.3" target='blank'>
            <img src={facebookLogoSrc} alt="whatsapp_logo" />
            </a>
            </div>
            <span>Developed By Yonatan Arm</span>
    </section>
  )
}
