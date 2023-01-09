import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";

function Home({ title = "", body = "" }) {
  const [post, setPost] = useState([]);
  const [isLoad, setLoad] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3002/api/home")
      .then((res) => res.json())
      .then((res) => {
        setPost(res);
      })
      .catch((err) => console.log(err))
      .then(setLoad(true));
  }, []);
  if (isLoad) {
    const postArr = [];
    for (let i = 0; i < post.length; i++) {
      // console.log(post[i]);
      postArr.push(
        <PostCard
          title={post[i].title}
          body={post[i].postBody.substring(0, 200)}
        />
      );
    }
    return postArr;
  }
  return <PostCard title={"null"} body={"null"} />;
}

const PostCard = ({ title, body }) => {
  return (
    <Card style={{ margin: "20px" }}>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text>{body}</Card.Text>
        <Button variant="warning">Read More</Button>
      </Card.Body>
    </Card>
  );
};

export default Home;
