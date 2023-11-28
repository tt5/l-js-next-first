async function getPost(id) {
  const res = await fetch(`http://localhost:4000/posts/${id}`, {
    next: {
      revalidate: 60
    },
  });

  return res.json()
}
export default async function Post({ params }) {
  const post = await getPost(params.id)

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </main>
  )
  }
