import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";

import { Image } from "react-bootstrap";
import { selectUser } from "../../store/user/selectors";
import { getUserWithStoredToken } from "../../store/user/actions";
import "./MyProfile.css";

export default function MyProfile() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div>
      <h3>My Profile</h3>
      <Image
        src={
          "https://cdn4.iconfinder.com/data/icons/instagram-ui-twotone/48/Paul-18-512.png"
        }
        alt="user-photo"
        width="300px"
        height="300px"
      />

      <table className="myInfo__table">
        <tr>
          <th>Name:</th>
          <td>
            {" "}
            {user.firstName} {user.lastName}
          </td>
        </tr>
        <tr>
          <th>Email:</th>
          <td>{user.email}</td>
        </tr>

        <tr>
          <th>Phone number:</th>
          <td>{user.phoneNumber}</td>
        </tr>
        <tr>
          <th>Location: </th>
          <td>
            {" "}
            {user.city}, {user.country}
          </td>
        </tr>
      </table>
      <Button>Edit profile</Button>
    </div>
  );
}
