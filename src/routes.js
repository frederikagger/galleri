import Om from "./components/Om";
import Paintings from "@/components/Paintings";


export const routes =[
    {path: '/galleri/:id', component: Paintings},
    {path: '/om', component: Om},
    {path: '*', redirect: '/galleri/1'}
]