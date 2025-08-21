import './App.css'
import Comments from "./components/comments-component/Comments"
import Posts from "./components/posts-component/Posts"
import Todos from "./components/todos-component/Todos"

function App() {

    return (
        <>
            <Todos/>
            <Posts/>
            <Comments/>
        </>
    )
}

export default App
