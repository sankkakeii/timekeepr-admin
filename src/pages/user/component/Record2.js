import React from "react";
import Profilepix from "../component/skillup img.jfif";
import "../component/Record2.scss";

const Record2 = (props) => {
  return (
    <div>
      <dl>
        <img
          src={Profilepix}
          alt="Logo"
          style={{ height: "40px", width: "40px", borderRadius: "50%" }}
        />
        <dt id="one">{props.Name}</dt>
        <dt id="two">{props.ID}</dt>
        <dt id="three">{props.Department}</dt>
        <dt id="four">{props.Status}</dt>
        <dt>
          <button>See Clocking</button>
        </dt>
      </dl>
      <hr />
    </div>
  );
};

export default Record2;
