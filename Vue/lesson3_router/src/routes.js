import First from "./components/First";
import Second from "./components/Second";
import App from "./App";

export const routes = [
    {
      path: '',component:App, name: "home"
    },
    {
     path:'/first',component:First, name:"first"
    },
    {
        path:'/second',component: Second, name: "second"
    }
]