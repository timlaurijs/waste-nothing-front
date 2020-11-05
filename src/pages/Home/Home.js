import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchAllItemsByCityName, { setItems } from "../../store/items/actions";
import { selectItems } from "../../store/items/selectors";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const [cityName, set_cityName] = useState("");
  const [searchStatus, set_searchStatus] = useState("Nothing found");

  return (
    <div className="home-container">
      <h1>Search the items you need!</h1>
      <Form>
        <Form.Group className="search-field">
          <Form.Control
            type="text"
            placeholder="Enter the city name"
            onChange={(e) => {
              set_cityName(e.target.value.toLowerCase().slice());
              console.log(cityName);
            }}
            required
          />
          <Form.Control
            className="mt-4"
            type="submit"
            value="🔎"
            onClick={(e) => {
              e.preventDefault();
              dispatch(fetchAllItemsByCityName(cityName));
            }}
          />
        </Form.Group>
      </Form>
      {(items &&
        items.length &&
        items.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <img src={item.imageSource} alt={item.title} />
              <p>{item.description}</p>
            </div>
          );
        })) ||
        searchStatus}
    </div>
  );
}
