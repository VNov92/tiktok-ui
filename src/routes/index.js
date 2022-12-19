import { HeaderOnly } from '~/components/Layout';

// Pages
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import NoMatch from '~/pages/NoMatch';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

const publicRoutes = [
    { path: '/', component: Home },
    { path: 'following', component: Following },
    { path: 'profile', component: Profile },
    { path: 'upload', component: Upload, layout: HeaderOnly },
    { path: '*', component: NoMatch },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
