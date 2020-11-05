
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchAllItemsByCityName, { setItems } from "../../store/items/actions";
import { selectItems } from "../../store/items/selectors";

export default function Home() {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const [cityName, set_cityName] = useState("");
  const [searchStatus, set_searchStatus] = useState("Nothing found");

  return (
    <div>
      Search the items you need!
      <form>
        <input
          type="text"
          placeholder="Enter the city name"
          onChange={(e) => {
            set_cityName(e.target.value);
          }}
        />
        <input
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            dispatch(fetchAllItemsByCityName(cityName));
          }}
        />
      </form>
      {(items &&
        items.length &&
        items.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <img scr={item.imageSource} alt={item.title} />
              <p>{item.description}</p>
            </div>
          );
        })) ||
        searchStatus}
    </div>
  );
}
