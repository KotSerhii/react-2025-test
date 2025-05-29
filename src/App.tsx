import './App.css'
import MyComponent from "./components/my-components/MyComponent.tsx";
import MyOwnComponent from "./components/my-components/MyOwnComponent.tsx";
import {products} from "./data/productsList.ts";
import Product from "./components/my-product/Product.tsx";

function App() {

    return (
        <>
            <MyComponent title={'Hello Guys!'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </MyComponent>
            <MyComponent title={'Hello pups!'}/>
            <MyComponent title={'Hello candy!'}/>
            <MyComponent title={'Hello boys!'}/>
            <MyOwnComponent text={"That's true"}/>
            {
                products.map((product,index) =><Product key={index} product={product}/>
                )

            }
        </>
    )
}

export default App
