import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { addBlog } from "../store/blogSlice";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import Alert from "alertifyjs";

export default function AddNewBlog() {
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate("/");

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);

    if (form.checkValidity() === true) {
      const id = uuid();
      const title = event.target.title.value;
      const category = event.target.category.value;
      const description = event.target.description.value;

      dispatch(addBlog({ id, title, category, description }));
      navigate("/"); //redirect to home page
      Alert.success(`${event.target.title.value} blog added successfully!!`);
    }
  };
  return (
    <>
      <div style={{ marginTop: "60px" }}>
        <Button
          type="button"
          className="btn btn-dark my-2"
          onClick={() => {
            navigate("/");
          }}
          style={{
            justifyContent: "center",
            position: "relative",
            top: "50%",
            left: "2%",
            marginBottom: "25px",
          }}
        >
          <i className="fa-solid fa-backward"></i> Back
        </Button>
        <Card
          text={"dark"}
          className="mb-2"
          style={{
            width: "60rem",
            justifyContent: "center",
            position: "relative",
            top: "50%",
            left: "10%",
            marginBottom: "25px",
          }}
        >
          <Card.Header>
            <h2 style={{ justifyContent: "center", textAlign: "center" }}>
              Add New Blog
            </h2>
          </Card.Header>
          <Card.Body>
            <div
              className="mx-auto col-12 col-lg-12 mb-2"
              style={{
                width: "60rem",
                justifyContent: "center",
                position: "relative",
                top: "50%",
                left: "4%",
                marginBottom: "25px",
              }}
            >
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="10" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter the title of the blog"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please provide the title
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} md="10" controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter the category of the blog"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please provide the category
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} md="10" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      required
                      type="text"
                      placeholder="Describe about the blog"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please provide the description
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Button className="btn btn-success mx-2" type="submit">
                  Submit
                </Button>
                <Button className="btn btn-danger" type="reset">
                  Clear
                </Button>
              </Form>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
