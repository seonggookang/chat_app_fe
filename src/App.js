import { useEffect, useState } from "react";
import "./App.css";
import socket from './server'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    askUserName();
  })

  const askUserName = () => {
    const userName = prompt("당신의 이름을 입력하세요")
    console.log("uuu", userName)

    socket.emit("login", userName, (res) => {
      console.log("res", res)
      if (res?.ok) { // user 정보 저장
        setUser(res.data)
      }
    });// .emit(대화의제목, 보낼내용, 콜백함수) // 콜백함수는? 우리가 소통이 제대로 이뤄졌나 알려주는
    // 이거 다음 백엔드에서 뭐라고 했는지 들어야함.
    // 

  }

  return (
    <div>
      <div className="App"></div>
    </div>
  );
}

export default App;
