// Layouts
import { HeaderOnly } from '~/components/Layouts';

// Pages
import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search';
import routesConfig from '~/config/routes';

// Public routes
export const publicRoutes = [
    { path: routesConfig.home, component: Home }, 
    { path: routesConfig.following, component: Following },
    { path: routesConfig.nickname, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly }, 
    { path: routesConfig.search, component: Search, layout: null }, 
]

// Private routes
export const privateRoutes = [

]
