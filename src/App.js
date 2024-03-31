import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/body/Main.tsx";
import Test from "./components/body/Test.tsx";
import Result from "./components/body/Result.tsx";
import List from "./components/body/List.tsx";
import MyResult from "./components/body/MyResult.tsx";
import Header from "./components/header/Header.tsx";
import { useState } from "react";
function App() {
  const [indexChecker, setIndexChecker] = useState(0);
  const [loading, setLoading] = useState(false);
  const [accessType, setAccessType] = useState("");

  return (
    <div className="App">
      <div className="h-dvh text-black">
        <BrowserRouter>
          <div>
            <Header index={indexChecker} loading={loading} />
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route
                path="/test"
                element={
                  <Test
                    loading={loading}
                    setLoading={setLoading}
                    setIndexChecker={setIndexChecker}
                    setAccessType={setAccessType}
                  />
                }
              ></Route>
              <Route
                path="/result/:id"
                element={
                  <Result
                    accessType={accessType}
                    setIndexChecker={setIndexChecker}
                  />
                }
              ></Route>
              <Route
                path="/list"
                element={<List setAccessType={setAccessType} />}
              ></Route>
              <Route path="/my_result/:id" element={<MyResult />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
