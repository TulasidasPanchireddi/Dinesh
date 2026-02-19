import { counterHook } from "./CounterHook"
const Home = () => {
  let [state,setState] = counterHook(10)
  return (
    <div>
      Home
      <h1>{state}</h1>
      <button onClick={()=>setState(state+1)} className="border">click me</button>
    </div>
  )
}

export default Home
