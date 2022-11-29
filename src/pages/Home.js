import React from 'react'
import { GitHub, Email, LinkedIn } from '@mui/icons-material'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, My Name is Rifat </h2>
        <div className='prompt'>
          <p> A software developer with a passion for learning and creating </p>
          <GitHub />
          <Email />
          <LinkedIn />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='List'>
          <li className='item'>
          <h2> Front End </h2>
          <span>
            React JS, HTML, CSS, NPM, Material UI, Bootstrap, Flutter, Yarn
          </span>
          </li>
          <li className='item'>
          <h2> Back End </h2>
          <span>
            Node JS, MySQL, MS SQL, Express JS, 
          </span>
          </li>
          <li className='item'>
          <h2> Languages </h2>
          <span>
            JavaScript, TypeScript, PHP, Go
          </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home