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
    <main className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="py-20 text-center bg-white border-b border-gray-200">
        <div className="max-w-2xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            All Posts
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Browse through all published stories and ideas from our community.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16">
        <Container>
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-semibold text-gray-800">
                No posts available
              </h2>
              <p className="mt-3 text-gray-600 text-lg">
                Be the first to create and share something amazing.
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
