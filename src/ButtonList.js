import React from 'react'
import Button from './Button'

const list = ["All", "Sitcom", "Music", "Thriller", "Movie"]

const ButtonList = () => {
  return (
    <div className='flex'>
        {
            list.map((item, index) =>(
                <Button key={index} name={item}></Button>
            ))
        }
    </div>
  )
}

export default ButtonList