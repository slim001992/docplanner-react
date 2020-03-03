import React from "react";

function Sectiond(props) {
  return (
<div class="section4">
<div class="droit">
  <h1 class="droittitre">
    The world's <br />
      biggest healthcare platform
  </h1>
  <h2 className="doroitpa">
   
      We work from 6 offices all over the world, bringing Docplanner
      Group to life in almost 20 countries.
    
  </h2>
</div>

<div style={{display:"flex" , flexWrap:"wrap"}}>
{props.d.map(el =>
<div className={el.classdiv}>
<img className="imgc" src={el.img}/>
    <h3 className="tigauche">{el.pa}</h3>
  <p className="pg">{el.pp}</p>
</div>
 )}
</div>


</div>
  )
}
export default Sectiond

