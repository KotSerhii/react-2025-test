export {createBrowserRouter} from "react-router-dom"

export const routes=createBrowserRouter([
        {path: '/', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'login', element: <LoginationPage/>},
            {path: 'auth/resourses', element: <AuthResoursesPage/>},
        ]}
])