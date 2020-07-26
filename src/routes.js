import Om from "./components/Om";
import Paintings from "@/components/Paintings";
import FileUploader from "./components/Admin/FileUploader";


export const routes =[
    {path: '/galleri/:id', component: Paintings},
    {path: '/om', component: Om},
    {path: '*', redirect: '/galleri/1'},
    {path: '/admin/upload', component: FileUploader}
]