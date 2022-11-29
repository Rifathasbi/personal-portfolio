import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';


function Experience() {
  return (
    <div className='experience'>
       <VerticalTimeline lineColor='#3e497a'> 
       <VerticalTimelineElement 
      className='vertical-timeline-element--education' 
      date='2011 -2017'
      iconStyle={{ background: '#3e497a', colo:'#fff'}}
      icon={<SchoolIcon />}
      >
        <h3 className='vertical-timeline-element-title'>
          Mawaridussalam Islamic Boarding School, Deli Serdang, North Sumatera 
        </h3>
        <p>High School Diploma</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement 
      className='vertical-timeline-element--education' 
      date='2017 -2020'
      iconStyle={{ background: '#3e497a', colo:'#fff'}}
      icon={<SchoolIcon />}
      >
        <h3 className='vertical-timeline-element-title'>
          Medan State Polytechnic, North Sumatera
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
            Associate's Degree
          </h4>
        <p>Informatics Management</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
      className='vertical-timeline-element--education' 
      date='January - September 2022'
      iconStyle={{ background: '#3e497a', colo:'#fff'}}
      icon={<WorkIcon />}
      >
         <h3 className='vertical-timeline-element-title'>
          PT. Restia Kreasi Teknologi, Medan
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
            FullStack Developer
          </h4>
        <p>internship</p>
      </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience