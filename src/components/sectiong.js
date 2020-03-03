import React from "react";

function Sectiong(props) {
  return (


   <div className="foot">
   <p>
We are leaders in 10 countries: {props.g.map(el =><a class="afoot" href="#">{el.ville}</a>)}
   </p>
   <p class="pfoot">
     This site uses cookies to deliver services in accordance with this
     Privacy Policy. You can specify the conditions for storing or
     accessing cookies on your browser.
     <br />
     www.docplanner.com © 2020
   </p>
 </div>


  )
}
export default Sectiong
