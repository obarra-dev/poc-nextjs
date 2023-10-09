import PostCard from "@/components/PostCard";

async function loadPosts() {

 // throw new Error("some error")
  
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  await new Promise((resolve) => setInterval(resolve, 3000))
  return data;
}

// RSC
async function PostPages() {
  const posts = await loadPosts();

  return (
    <div>
      Posts
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostPages;
