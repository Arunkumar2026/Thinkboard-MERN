import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import NoteDetailPage from "./pages/NoteDetailPage"
import toast from "react-hot-toast"


const App = () => {
  return (
    <div data-theme="forest">
      {/* <button onClick={(() => toast.success("successfully"))} className="text-red-500 p-4 bg-pink-300 mt-3 ml-3 rounded-br-full" >Success Message</button><br/><br/>
      <button onClick={(() => toast.error("404 error"))}>Error Message</button><b/>
      <button className="btn btn-outline">Click Me</button>
      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button> */}
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create" element={<CreatePage/>} />
        <Route path="/note/:id" element={<NoteDetailPage/>} />
      </Routes>
    </div>
  )
}

export default App