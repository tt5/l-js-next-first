"use client";
import { GetTodos } from '../action'
import {useFormState} from 'react-dom'


export default async function Todos() {
  const [state, dispatch] = useFormState(GetTodos, {text: "mytext"})

  return <main>
    <form action={dispatch}>
    <input name="text"></input>
    <button>Create Todo</button>
    </form>
    {state.text}
  </main>;
}
