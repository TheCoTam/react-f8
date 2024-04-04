// Layouts
import { HeaderOnly } from '~/components/Layouts'

// Pages
import Home from '~/Pages/Home'
import Following from '~/Pages/Following'
import Upload from '~/Pages/Upload'
import Search from '~/Pages/Search'

// Public routes
export const publicRoutes = [
    { path: '/', component: Home }, 
    { path: '/following', component: Following }, 
    { path: '/upload', component: Upload, layout: HeaderOnly }, 
    { path: '/search', component: Search, layout: null }, 
]

// Private routes
export const privateRoutes = [

]
