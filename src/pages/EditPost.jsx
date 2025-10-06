import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import appwriteService from "../backend/config";
import { Container, PostForm } from "../components";

const EditPost = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((fetchedPost) => {
        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          navigate("/");
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-10">
      <Container>
        <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
          Edit Post
        </h2>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
};

export default EditPost;
