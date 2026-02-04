import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./router/router.tsx";
import {Provider} from "react-redux";
import {store} from "./redux/store/store.ts";


createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)
// Provider - сховище через яке всі компоненти взаємодіють, визначаємо на якому рівні це буде відбуватися, в данному
// випадку ми працюємо на вищому рівні та огортаємо <RouterProvider router={router}/>
// store={} - пропса за замовчуванням пуста, це посилання на сховище