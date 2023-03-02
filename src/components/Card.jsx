import React from "react";
import Avatar from "./Avatar.jsx";
import Detailcard from "./Detailcard.jsx";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <Detailcard tel={props.tel} email={props.email} />
    </div>
  );
}

export default Card;
