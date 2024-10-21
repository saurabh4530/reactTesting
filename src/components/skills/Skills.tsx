import { useState } from 'react'

import { SkillsProps } from './Skills.type'

function Skills(props:SkillsProps) {
    const {skills}=props
    const [isLoggedIn,setIsLoggedIn]=useState(false)
  return (
    <>
    <ul>
        {
            skills.map((skill)=>{
                return <li key={skill}>{skill}</li>
            })
        }
    </ul>
    {isLoggedIn?(<button>start learning</button>
    ):(<button onClick={()=>{setIsLoggedIn(true)}}>login</button>)
    

    
    }

    </>)
}

export default Skills