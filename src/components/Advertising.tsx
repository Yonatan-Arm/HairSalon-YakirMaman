import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';


export default function Advertising() {
  return (
    <section className='Ad-section'>
      <div className='flex row skiils space-around'>
      <Link to='/#Contect'><span>ביקורות </span></Link>
        <NavLink to="gallery">
          <span>גלריה</span>
        </NavLink>
        <NavLink to="lightening">
          <span>הבהרות שיער</span>
        </NavLink>
        <NavLink to="straightening ">
          <span>החלקות שיער</span>
        </NavLink>
      </div>
    </section>
  )
}
