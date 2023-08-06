import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Advertising() {
  return (
    <section className='Ad-section'>
      <div className='flex row skiils space-around'>
        <span>HairStyle</span>
        <NavLink to="gallery">
          <span>גלריה</span>
        </NavLink>
        <NavLink to="lightening">
          <span>הבהרות לשיער</span>
        </NavLink>
        <NavLink to="straightening ">
          <span>החלקות שיער</span>
        </NavLink>
      </div>
    </section>
  )
}
