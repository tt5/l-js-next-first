"use server";

import { ManyLevelGuest } from 'many-level'
import { pipeline } from 'readable-stream'
import { connect } from 'net'

const db = new ManyLevelGuest()
const socket = connect(9000)

pipeline(socket, db.createRpcStream(), socket, () => {
  // Disconnected
})

export async function GetTodos(
  prevState: {text: string},
  formData: FormData) {
  const text = formData.get("text") as string;
  await db.put("text", text)
  console.log(text)
  return {text}
}
