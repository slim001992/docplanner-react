import React from "react";

function Sectionb(props) {
  return (
    <div className="section2">
      {props.b.map(el => (
        <div>
          <div className={el.back}>
            <h2 className="h2pa">{el.name}</h2>
            <h1 className="h1pa">{el.pags}</h1>
            <div className="choose">
            {!el.drop ? null : (
                <select className="drop sele" data-id="domain-switcher">
                  {el.drop.map(el => (
                    <option value="#">{el.value}</option>
                  ))}
                </select>
            )}
             <img className="imgpa" src={el.imgs} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Sectionb;
