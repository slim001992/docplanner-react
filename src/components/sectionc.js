import React from 'react'

 function Sectionc(props) {
    return (
        <div class="section3">
        <div class="tex">
          <h1 class="h1s3">
            We are a global company
            <br />with local culture
          </h1>
        </div>
        <div class="logo">
  
          <ul class="logos">
          {props.c.map(el => 
          <li><a href="#">{el.s}</a></li>
          )}
          </ul>
        </div>
        </div>
    )
}
export default Sectionc

