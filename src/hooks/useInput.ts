import { useState } from "react"

export default function useInput(value: string) {
  const [val, setVal] = useState(value)

  const onChange = (e: InputEvent) => {
    // setVal(e.targe)
  }
  return [val,]

}