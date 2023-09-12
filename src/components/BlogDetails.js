import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectBlogById, deleteBlog } from "../store/blogSlice";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { LikeContext } from "../context/likeContext";
import Alert from "alertifyjs";

export default function BlogDetails() {
  const { id } = useParams();
  const blogSelected = useSelector((state) => selectBlogById(state, id));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { likes, toggleLike } = useContext(LikeContext);

  // for deleting blog
  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
    navigate("/");
    Alert.success(`${blogSelected.title} blog deleted successfully!!`); 
  };

  // for updating blog
  const handleEdit = (id) => {
    navigate(`/edit-blog/${id}`);
  };

  // to like blog
  const handleLike = () => {
    toggleLike(id);
  };

  return (
    <div style={{ marginTop: "60px" }}>
      <Button
        type="button"
        className="btn btn-dark my-2"
        onClick={() => navigate("/")}
        style={{
          justifyContent: "center",
          position: "relative",
          top: "50%",
          left: "2%",
          marginBottom: "25px",
        }}
      >
        <i className="fa-solid fa-backward"></i> BACK
      </Button>

      <Card
        className="mb-2"
        key={blogSelected.id}
        text={"dark"}
        style={{
          width: "50rem",
          justifyContent: "center",
          position: "relative",
          top: "50%",
          left: "10%",
          marginBottom: "25px",
        }}
      >
        <Card.Body>
          <Card.Title>
            <div>
              <div
                style={{
                  marginRight: "25px",
                  color: "lightgray",
                  textAlign: "center",
                }}
              >
                {blogSelected.category}
              </div>
              <div style={{ fontWeight: "bold" }}>{blogSelected.title}</div>
            </div>
          </Card.Title>

          <Card.Text>{blogSelected.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button
            type="button"
            className="btn btn-warning text-light mx-2"
            onClick={() => handleDelete(blogSelected.id)}
          >
            Delete <i className="fa-regular fa-trash-can"></i>
          </Button>
          <Button
            type="button"
            className="btn btn-info text-light mx-2"
            onClick={() => handleEdit(blogSelected.id)}
          >
            Edit <i className="fa-solid fa-pencil"></i>
          </Button>
          <Button
            type="button"
            className="btn btn-danger text-light mx-2"
            onClick={handleLike}
          >
            {likes[id] ? (
              <>
                {" "}
                Liked <i className="fa-solid fa-heart"></i>
              </>
            ) : (
              <>
                {" "}
                Like <i className="fa-regular fa-heart"></i>
              </>
            )}
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}
