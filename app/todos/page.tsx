"use client";
import { useRef} from 'react';
import { GetTodos } from '../action'
import {useFormState, useFormStatus} from 'react-dom'



export default function Todos() {
  //const ref = useRef<HTMLFormElement>(null);
  const [state, dispatch] = useFormState(GetTodos, {text: "mytext"})
  const {pending} = useFormStatus()
  const form = useRef<HTMLFormElement>(null);

  return <main>
    <form action={dispatch} ref={form}>
    <input name="text"/>
    <button disabled={pending} onClick={form.current?.reset() as any}>Create Todo</button>
    </form>
    {state.text}
  </main>;
}
