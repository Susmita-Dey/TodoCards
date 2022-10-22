import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comments from "./components/Comments";
import Login from "./components/Login";
import Task from "./components/Task";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/task" element={<Task />} />
        <Route path="/comments/:category/:id" element={<Comments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
