import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";
import { selectUser } from "../../store/user/selectors";
import { getUserWithStoredToken } from "../../store/user/actions";
import "./MyProfile.css";
import EditProfileForm from "../../components/EditProfileForm";
import ItemCard from "../../components/ItemCard";

export default function MyProfile() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="myProfile">
      <div className="myProfile__left">
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

        <EditProfileForm />
      </div>

      <div className="myProfile__right">
        <h3>My Items</h3>
        {user.items &&
          user.items.map((item) => {
            return (
              <div>
                <ItemCard
                  key={item.id}
                  userId={item.userId}
                  title={item.title}
                  imageSource={item.imageSource}
                  description={item.description}
                  city={item.city}
                  country={item.country}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
