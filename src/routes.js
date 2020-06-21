import Om from "./components/Om";
import Paintings from "@/components/Paintings";


export const routes =[
    {path: '/hjem/:id', component: Paintings},
    {path: '/om', component: Om},
    {path: '*', redirect: 'hjem/1'}
]