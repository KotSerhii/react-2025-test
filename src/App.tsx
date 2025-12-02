import { useEffect } from "react";
import './App.css'
import { getAllUsers, saveUser } from "./services/user.service";


function App() {


    useEffect(() => {
     getAllUsers().then(users=>{console.log(users)});

     saveUser({id:1, name: "bolodya", email: "ghghgh@com"}).then(user=>{console.log(user)});
    }, []);
    return (
        <>

        </>
    )
}

export default App
