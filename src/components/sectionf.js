import React from "react";

function Sectionf(props) {
  return (
<div className="images" style={{display:"flex" , flexWrap:"wrap"}}>
{props.f.map(el =>
<div class="boxshadow  Warsaw">
<img src={el.imgs} />
<div class="conbo">
  <a href="#">{el.ville}</a>
  <button class="boutto1">SEE OPENINGS</button>
</div>
</div>
)}
</div>

  )
}
export default Sectionf

