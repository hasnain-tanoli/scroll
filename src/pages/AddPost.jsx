import { Container, PostForm } from "../components";

const AddPost = () => {
  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <Container>
        <h1 className="text-3xl font-semibold text-center text-primary mb-10">
          Create a New Post
        </h1>
        <PostForm />
      </Container>
    </section>
  );
};

export default AddPost;
