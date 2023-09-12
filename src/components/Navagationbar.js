import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar className="navbar fixed-top navbar-expand-lg text-light bg-dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <i className="fa-solid fa-house-fire"></i>BlogHouse
            </Link>
          </Navbar.Brand>
          <Button className="btn btn-light" type="button">
            <Link
              to="/add-new-blog"
              style={{ textDecoration: "none", color: "black" }}
            >
              <i className="fa-solid fa-plus"></i>Post
            </Link>
          </Button>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
