import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { selectUser } from "../store/user/selectors";
import { editProfile } from "../store/user/actions";

export default function EditProfileForm() {
  const { firstName, lastName, phoneNumber, city, country } = useSelector(
    selectUser
  );

  const [showModal, setShowModal] = useState(false);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newCountry, setNewCountry] = useState("");

  const dispatch = useDispatch();

  function onClickEdit() {
    setShowModal(true);
    setNewFirstName(firstName);
    setNewPhoneNumber(phoneNumber);
    setNewLastName(lastName);
    setNewCity(city);
    setNewCountry(country);
  }

  function updateProfile(event) {
    event.preventDefault();
    dispatch(
      editProfile(
        newFirstName,
        newLastName,
        newPhoneNumber,
        newCity,
        newCountry
      )
    );
    setShowModal(false);
  }
  return (
    <div>
      <Button variant="info" onClick={onClickEdit}>
        Edit Profile
      </Button>
      <Modal size="lg" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <h4>Edit Your Profile</h4>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>
                <strong>First name</strong>
              </Form.Label>
              <Form.Control
                value={newFirstName}
                onChange={(event) => setNewFirstName(event.target.value)}
                type="input"
              />
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label>
                <strong>Last name</strong>
              </Form.Label>
              <Form.Control
                value={newLastName}
                onChange={(event) => setNewLastName(event.target.value)}
                type="input"
              />
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label>
                <strong>Phone Number</strong>
              </Form.Label>
              <Form.Control
                value={newPhoneNumber}
                onChange={(event) => setNewPhoneNumber(event.target.value)}
                type="input"
              />
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label>
                <strong>City</strong>
              </Form.Label>
              <Form.Control
                value={newCity}
                onChange={(event) => setNewCity(event.target.value)}
                type="input"
              />
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label>
                <strong>Country</strong>
              </Form.Label>
              <Form.Control
                value={newCountry}
                onChange={(event) => setNewCountry(event.target.value)}
                type="input"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="info" onClick={updateProfile}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
