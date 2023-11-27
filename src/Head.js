import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from './Utils/AppSlice';
import { YOUTUBE_SEARCH_API } from './Utils/Constansts';

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {

        const timer = setTimeout(() => getSearchSuggestion(), 200);

        return () => {
            clearTimeout(timer);
        }

    }, [searchQuery]);

    const getSearchSuggestion = async () =>{
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
    }

    const dispatch = useDispatch();

    const handleToggleMenu = () => {
        dispatch(toggleMenu())
    }



  return (
    <div className='grid grid-flow-col p-3 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img 
            onClick={() => handleToggleMenu()}
            className='h-8 cursor-pointer' 
            alt='menu'
            src='https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png'></img>
            <a href='/'>
            <img 
            className='h-8 mx-2' 
            alt='logo' 
            src='https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg'></img>
            </a>
        </div>
        <div className='col-span-10 px-10'>
            <input 
            className='w-1/2 border border-gray-400 p-2 rounded-l-full'
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className='border border-gray-400 px-5 py-2 rounded-r-full'>
                🔍
            </button>
        </div>
        <div className='col-span-1'>
            <img className='h-8'
            alt='user' 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvRRdb4RulPsloRl5u8j8V9JrlrOoxZe1K0XOAGc&s'
            />
        </div>
    </div>
  )
}

export default Head