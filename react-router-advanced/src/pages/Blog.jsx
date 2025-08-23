import { useParams } from "react-router-dom";

function Blog() {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Post ID: {id}</h2>
      <p>This is blog content for post {id}.</p>
    </div>
  );
}

export default Blog;
