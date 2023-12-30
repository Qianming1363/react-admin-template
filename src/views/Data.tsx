import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, CounterState } from "@/store/features/counterSlice"

export default function() {

  const {value} = useSelector((store: any) => store.counter)
  const dispatch = useDispatch()

  return (
    <div>
    <button onClick={() => {dispatch(increment())}}>添加</button>
    <span>{value}</span>
    <button onClick={() => {dispatch(decrement())}}>减少</button>

    <button onClick={() => {dispatch(increment({value: 5}))}}>添加具体值5</button>
  </div>
  )
}