import React from "react";
import { Image, Button } from "react-bootstrap";
import "./ItemCard.css";
import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";

export default function ItemCard(props) {
  const user = useSelector(selectUser);
  return (
    <div className="itemCard">
      <Image
        className="itemCard__img"
        src={props.imageSource}
        atl="item-photo"
        width="110px"
      />
      <div className="itemCard__info">
        <p>
          <strong>{props.title}</strong>
        </p>
        <p>Description: {props.description}</p>
        <p>
          {props.city}, {props.country}
        </p>
      </div>
      {props.userId !== user.id ? <Button>Contact owner</Button> : null}
    </div>
  );
}
