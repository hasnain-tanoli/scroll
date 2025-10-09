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
      <section className="min-h-[60vh] flex items-center justify-center text-center bg-gradient-to-b from-white to-gray-50/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Discover Inspiring
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                Stories & Ideas
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Read the latest posts from our community of writers and creators.
              Share your thoughts and connect with like-minded people.
            </p>
            {authStatus && (
              <Link
                to="/add-posts"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:from-primary-light hover:to-primary transition-all duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                Write a Post
              </Link>
            )}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <main className="min-h-screen">
      <section className="py-10 text-center bg-gradient-to-b from-white to-gray-50/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Discover Inspiring
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                Stories & Ideas
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Read the latest posts from our community of writers and creators.
              Share your thoughts and connect with like-minded people.
            </p>
            {authStatus && (
              <Link
                to="/add-posts"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:from-primary-light hover:to-primary transition-all duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                Write a Post
              </Link>
            )}
          </div>
        </Container>
      </section>

      <section className="py-10 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Posts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the most recent stories and insights from our community of
              writers.
            </p>
          </div>

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
