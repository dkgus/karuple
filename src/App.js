import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/body/Main.tsx";
import Test from "./components/body/Test.tsx";
import Result from "./components/body/Result.tsx";
import List from "./components/body/List.tsx";
import Header from "./components/header/Header.tsx";
import { useState } from "react";
function App() {
  const [indexChecker, setIndexChecker] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <div className="h-screen">
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
                  />
                }
              ></Route>
              <Route
                path="/result/:id"
                element={<Result setIndexChecker={setIndexChecker} />}
              ></Route>
              <Route path="/list" element={<List />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
