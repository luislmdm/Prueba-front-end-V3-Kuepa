import Main from "./components/layouts/Main";
import LeftSideBar from "./components/layouts/LeftSideBar";
import RightSideBar from "./components/layouts/RightSideBar";
import { useState } from "react";

function App() {

  const [isModalList, setIsModalList] = useState<boolean>(false)

  return (
    <div className="App">
      <LeftSideBar/>
      <Main isModalList={isModalList} setIsModalList={setIsModalList}/>
      <RightSideBar isModalList={isModalList} setIsModalList={setIsModalList}/>
    </div>
  );
}

export default App;
