import { useRoutes } from "react-router-dom";
import routes from "./router";


export default function App() {

  const outLet = useRoutes(routes)


  return <>{outLet}</>
}