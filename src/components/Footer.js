import React from 'react'
import { Instagram, LinkedIn, GitHub, Email } from '@mui/icons-material'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia' >
            <Instagram />
            <LinkedIn />
            <GitHub />
            <Email />
        </div>
        <p> &copy; 2022 rifathasbi</p>
    </div>
  )
}

export default Footer