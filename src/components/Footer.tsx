import React from 'react'
import whatsappLogoSrc from '../assets/imgs/whatsapp-logo.svg'
import instagramLogoSrc from '../assets/imgs/instagram-logo.svg'
import facebookLogoSrc from '../assets/imgs/facebook-logo.svg'

export default function Footer() {
  return (
    <section className='footer-section flex align-center justify-center'>
        <div className='flex row links'>
            <img src={whatsappLogoSrc} alt="whatsapp_logo" />
            <img src={instagramLogoSrc} alt="instagram_logo" />
            <img src={facebookLogoSrc} alt="whatsapp_logo" />
            </div>
    </section>
  )
}
