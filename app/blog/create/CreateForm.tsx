"use client"

import {useRouter} from "next/navigation"
import {useState} from "react"

export default function CreateForm() {
  const router = useRouter()

  const [title,setTitle] = useState('')
  const [body,setBody] = useState('')
  const [isLoading,setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const post = {
      title, body, user_email: 'me@me.me'
    }

    const res = await fetch('http://localhost:4000/posts', {
        method: "Post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(post)
    })

    if (res.status === 201) {
      location.reload()
      router.push('/blog')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
      <span>Title:</span>
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        value={title}
      />
      </label>
      <label>
      <span>Body:</span>
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBody(e.target.value)}
        value={body}
      />
      </label>
      <button
        disabled={isLoading}
      >
        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Add Post</span>}
      </button>
    </form>
  )
}
