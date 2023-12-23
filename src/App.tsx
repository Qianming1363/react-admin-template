import Comp from "./components/Comp/Comp"
import {Button} from "antd"
import { UsbOutlined, TableOutlined } from "@ant-design/icons"
function App() {

  return (
    <div>
      <Button>Ant Desgin Button</Button>
      <Comp></Comp>
      <UsbOutlined />
      <TableOutlined />
    </div>
  )
}

export default App
