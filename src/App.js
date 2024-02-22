import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/body/Main.tsx";
import Test from "./components/body/Test.tsx";
import Result from "./components/body/Result.tsx";
import List from "./components/body/List.tsx";
import Header from "./components/header/Header.tsx";

function App() {
  return (
    <div className="App">
      <div className="h-screen">
        <BrowserRouter>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/test" element={<Test />}></Route>
              <Route path="/result/:id" element={<Result />}></Route>
              <Route path="/list" element={<List />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
