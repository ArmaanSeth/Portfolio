import React from "react";

function Item(props){
  return (<li>
            <a className="nav-items" href={props.url}>
                {props.title}
            </a>
        </li>);
}

export default Item;