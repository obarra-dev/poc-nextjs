import PostPages from "../page";
import { Suspense } from "react";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

async function PostPage(props) {
  console.log(props);

  const { id, title, body } = await loadPost(props.params.id);

  return (
    <div>
      <h1>
        {id} {title}
      </h1>
      <p>{body}</p>
      <hr />
      <h3>Other posts</h3>
      <Suspense fallback={<div>Loading other posts</div>}>
        <PostPages />
      </Suspense>
    </div>
  );
}

export default PostPage;
