async function getPosts() {
  const res = await fetch('http://localhost:4000/posts',
    {
      next: {
        revalidate: 60 //seconds
      }
    }
  )

  return res.json()
}
export default async function PostList() {
  const posts = await getPosts()

  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          {post.title}
          {post.body.slice(0, 200)}
        </div>
      ))}
    </>
  )
}
