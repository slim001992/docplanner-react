import React from 'react'

 function Navmenu(props) {
    return (
        <ul className="list">
        <li>   <img
              class="logo-docplanner"
              src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
              alt="Docplanner Group"
          /></li>
             {props.x.map(el=>
             <li className={el.class}><a className={el.class}>{el.title}</a>
             <ul className="drop-list"> {!el.drop ?  null : el.drop.map(el=> <li><a>{el}</a></li>)} 
             </ul>
             </li>
                )}
        </ul>
    )
}
export default Navmenu