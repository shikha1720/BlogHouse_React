import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectBlogById, updateBlog } from "../store/blogSlice";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Alert from "alertifyjs";

export default function EditBlog() {
  const { id } = useParams();
  const blog = useSelector((state) => selectBlogById(state, id));

  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState(String(blog.title));
  const [category, setCategory] = useState(blog.category);
  const [description, setDescription] = useState(blog.description);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);

    if (form.checkValidity() === true) {
      dispatch(updateBlog({ id, title, category, description }));
      navigate(`/blog-details/${id}`);
      Alert.success(`${title} blog updated successfully!!`);
    }
  };

  return (
    <>
      <div style={{ marginTop: "60px" }}>
        <Button
          type="button"
          className="btn btn-dark my-2"
          onClick={() => {
            navigate(-1);
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
              Edit Blog
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
                      onChange={(event) => {
                        setTitle(event.target.value);
                      }}
                      defaultValue={title}
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
                      onChange={(event) => {
                        setCategory(event.target.value);
                      }}
                      defaultValue={category}
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
                      onChange={(event) => {
                        setDescription(event.target.value);
                      }}
                      defaultValue={description}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please provide the description
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Button className="btn btn-success mx-2" type="submit">
                  Update
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
