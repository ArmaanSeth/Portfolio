import React, { useState } from 'react';
import MenuItems from "./MenuItems";
import Item from './Item';
import './Navbar.css';

function createItem(item){
    return <Item 
            key={item.id}
            title={item.title} 
            cName={item.cName}
            url={item.url}/>
}

function Navbar(){
    const [click,setClick]=useState(false)

    function handleClick(){
        setClick(!click)
        console.log(click)
    }

    return(
        
        <nav className="Navbar">

            <h1 className='logo'><i className="fa-solid fa-bars-staggered"></i></h1>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click?'fa fa-times':'fa fa-bars'}></i>
            </div>
            <ul className={click?'nav-menu active':'nav-menu'}>
                {MenuItems.map(createItem)}
                
            </ul>
        </nav>
    )
}

export default Navbar;