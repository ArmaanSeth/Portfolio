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
    const [click_,setClick_]=useState(false)
    function handleClick(){
        setClick(!click)
        console.log(click)
    }

    function changeTheme(){
        setClick_(!click_)
        var t=document.body
        var root = document.documentElement;
        if(click_){
            t.style.backgroundColor='rgb(23, 23, 23)';
            t.style.color='white';
            root.style.setProperty("--alternate-dark",'rgb(11, 11, 11)')
            root.style.setProperty("--alternate-light",'rgb(40, 40, 40)')
            root.style.setProperty("--dark",'rbg(0,0,0)')
            root.style.setProperty("--alternate-bg", 'white')
            root.style.setProperty("--alternate-txt", 'black')
            root.style.setProperty("--light-txt", '#e9e9e9')
        }
        else{
            t.style.backgroundColor='white';
            t.style.color='black'
            root.style.setProperty("--alternate-dark",'rgb(255, 255, 255)')
            root.style.setProperty("--alternate-light",'rgb(251, 233, 218)')
            root.style.setProperty("--dark", 'rgb(218, 209, 200)')
            root.style.setProperty("--alternate-bg", 'rgb(23, 23, 23)')
            root.style.setProperty("--alternate-txt", 'white')
            root.style.setProperty("--light-txt", '#303030')
        }
    }

    return(
        
        <nav className="Navbar">

            <div className='logo'><img src='./logo.jpg'/>{/*<i className="fa-solid fa-bars-staggered"></i>*/}</div>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click?'fa fa-times':'fa fa-bars'}></i>
            </div>
            <ul className={click?'nav-menu active':'nav-menu'}>
                {MenuItems.map(createItem)}
            </ul>
            <div className='theme' onClick={changeTheme}>{!click_?<i class="fa-solid fa-sun"></i>:<i class="fa-solid fa-moon"></i>}</div>
        </nav>
    )
}

export default Navbar;