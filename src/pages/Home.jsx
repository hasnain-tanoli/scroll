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
      <section className="min-h-[70vh] flex items-center justify-center px-6">
        <Container>
          <div className="text-center max-w-lg mx-auto">
            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-2xl flex items-center justify-center">
              <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-3">
              No posts yet
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Start sharing your thoughts and stories with the world. Create your first post and begin your journey.
            </p>
            <Link
              to="/add-posts"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-light text-white font-medium rounded-xl shadow-sm hover:shadow-md hover:from-primary-light hover:to-primary transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create your first post
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 text-center bg-gradient-to-b from-white to-gray-50/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Discover Inspiring
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                Stories & Ideas
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Read the latest posts from our community of writers and creators. Share your thoughts and connect with like-minded people.
            </p>
            {authStatus && (
              <Link
                to="/add-posts"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:from-primary-light hover:to-primary transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Write a Post
              </Link>
            )}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Posts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the most recent stories and insights from our community of writers.
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
