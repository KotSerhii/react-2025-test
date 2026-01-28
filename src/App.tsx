import './App.css'
import { useFetch } from "./hooks/UseFetch"

function App() {
    const users = useFetch<{id:number, name:string}[]>("https://jsonplaceholder.typicode.com/users",[])
    // <{id:number, name:string}[]> - задали тип вручну
    return (
        <>
            {users.map(user => (
                <div key={user.id}>
                    {user.id}:{user.name}
                </div>
            ))}
        </>
    )
}

export default App
