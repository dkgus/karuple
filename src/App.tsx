import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import Main from "./components/body/Main";
import Test from "./components/body/Test";
import Result from "./components/body/Result";
import List from "./components/body/List";
import MyResult from "./components/body/MyResult";
import Header from "./components/header/Header";

declare global {
  interface Window {
    Kakao: any;
  }
}
function App() {
  const [indexChecker, setIndexChecker] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [accessType, setAccessType] = useState<string>("");

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
