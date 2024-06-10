import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyBookShelfPage from "./pages/MyBookShelfPage";
import "./App.css";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" Component={HomePage} />
      <Route exact path="/my-bookshelf" Component={MyBookShelfPage} />
    </Routes>
    </BrowserRouter>
  )
    

}

export default App;
