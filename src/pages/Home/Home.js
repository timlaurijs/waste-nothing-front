import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import fetchAllItemsByCityName, { setItems } from "../../store/items/actions";
import { selectItems } from "../../store/items/selectors";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const [queryType, set_queryType] = useState("city");
  const [query, set_query] = useState("");
  const [searchStatus, set_searchStatus] = useState("Nothing found");

  return (
    <div className="home-container">
      <h1>Search the items you need!</h1>
      <Form>
        <Form.Group className="search-field">
          <Form.Control
            type="text"
            placeholder={`Enter the ${queryType}`}
            onChange={(e) => {
              set_query(e.target.value.toLowerCase().slice());
            }}
            required
          />
          <Form.Control
            className="mt-4"
            type="submit"
            value="🔎"
            onClick={(e) => {
              e.preventDefault();
              console.log(query);
              dispatch(fetchAllItemsByCityName(queryType, query));
            }}
          />
        </Form.Group>
        <Form.Group className="select-search-by">
          <Form.Label>Search by</Form.Label>
          <Form.Control
            as="select"
            onChange={(e) => {
              set_queryType(e.target.value);
            }}
          >
            <option>city</option>
            <option>country</option>
            <option>title</option>
          </Form.Control>
        </Form.Group>
      </Form>

      {(items &&
        items.length &&
        items.map((item) => {
          return (
            <div key={item.id}>
              <Link
                className="item-details-link"
                to={`/item-details/${item.id}`}
              >
                <h3>{item.title}</h3>
                <img src={item.imageSource} alt={item.title} />
                <p>{item.description}</p>
              </Link>
            </div>
          );
        })) ||
        searchStatus}
    </div>
  );
}
