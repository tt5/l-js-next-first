import { Suspense } from "react";
import PostList from "./PostList";
import Loading from "./loading";

export default function Blog() {
  return (
    <main>
      <h1>Blog</h1>
      <h2>Posts</h2>
      <Suspense fallback={<Loading />}>
        <PostList/>
      </Suspense>
    </main>
  )
}
