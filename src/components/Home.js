import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Home() {
  const blogs = useSelector((state) => state.blogs.blogs);
  const colors = [
    "info",
    "warning",
    "danger",
    "primary",
    "secondary",
    "success",
  ];
  return (
    <>
      <h2
        style={{
          justifyContent: "center",
          textAlign: "center",
          marginBottom: "25px",
          marginTop: "70px",
        }}
      >
        Blogs
      </h2>

      <div style={{ justifyContent: "center" }}>
        {blogs.map((blog, index) => (
          <Card
            className={`mb-2 bg-${colors[index % colors.length]} text-${
              colors[index % colors.length] === "light" ? "dark" : "white"
            }`}
            key={blog.id}
            style={{
              width: "50rem",
              justifyContent: "center",
              position: "relative",
              top: "50%",
              left: "17%",
              marginBottom: "25px",
            }}
          >
            <Card.Header>#{index + 1} </Card.Header>
            <Link
              to={`/blog-details/${blog.id}`}
              style={{
                textDecoration: "none",
                color: "black",
                textAlign: "center",
              }}
            >
              <Card.Body>
                <Card.Title> {blog.title} </Card.Title>
              </Card.Body>
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
}
