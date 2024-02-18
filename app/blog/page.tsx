import { Suspense } from "react";
import PostList from "./PostList";
import Loading from "./loading";

export default function Blog() {
  return (
    <main>
      <h1>Blog</h1>
      <a href="/blog/create">Create Post</a>
      <h2>Posts</h2>
      <Suspense fallback={<Loading />}>
        <PostList/>
      </Suspense>
    </main>
  )
}
