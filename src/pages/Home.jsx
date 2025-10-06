import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import appwriteService from "../backend/config";
import { Container, PostCard } from "../components";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    appwriteService.getPosts().then((res) => {
      if (res) setPosts(res.documents);
    });
  }, []);

  if (posts.length === 0) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-6">
        <Container>
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-800">
              No posts yet
            </h1>
            <p className="mt-3 text-gray-600">
              Start sharing your thoughts and stories with the world.
            </p>
            <Link
              to="/add-posts"
              className="inline-block mt-6 px-6 py-3 bg-[#1e5e65] text-white font-medium rounded-lg shadow-md hover:bg-[#184e53] transition"
            >
              Create your first post
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center bg-white border-b border-gray-200">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Discover Inspiring Stories & Ideas
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Read the latest posts from our community of writers and creators.
          </p>
          {authStatus && (
            <Link
              to="/add-posts"
              className="inline-block mt-8 px-6 py-3 bg-[#1e5e65] text-white font-medium rounded-lg shadow-md hover:bg-[#184e53] transition"
            >
              Write a Post
            </Link>
          )}
        </div>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
            Latest Posts
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard
                key={post.$id}
                $id={post.$id}
                title={post.title}
                featuredImage={post.featuredImage}
              />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Home;
