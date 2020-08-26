import Home from "@/components/Home";
import Contacts from "@/components/Contacts";
import MyProjects from "@/components/MyProjects";


export const routes = [
    {
        path: '', component: Home, name:'home'
    },
    {
        path: '/Contacts', component: Contacts, name: 'contacts'
    },
    {
        path: '/MyProjects', component: MyProjects, name: 'myProjects'
    }
    ]
