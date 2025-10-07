import { useState, useEffect } from "react";
import appwriteService from "../backend/config";
import { Container, PostCard } from "../components";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService
      .getPosts([])
      .then((res) => {
        if (res) setPosts(res.documents);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="py-20 text-center bg-gradient-to-b from-white to-gray-50/50">
        <Container>
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
              All Posts
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Browse through all published stories and ideas from our community of writers and creators.
            </p>
          </div>
        </Container>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-white">
        <Container>
          {posts.length === 0 ? (
            <div className="text-center py-20 max-w-lg mx-auto">
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-2xl flex items-center justify-center">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                No posts available
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Be the first to create and share something amazing with the community.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {posts.map((post) => (
                <PostCard
                  key={post.$id}
                  $id={post.$id}
                  title={post.title}
                  featuredImage={post.featuredImage}
                />
              ))}
            </div>
          )}
        </Container>
      </section>
    </main>
  );
};

export default AllPosts;
