import Home from '~/pages/Home';
import Shorts from '~/pages/Shorts';
import Subscription from '~/pages/Subscription';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/shorts', component: Shorts },
    { path: '/subscription', component: Subscription },
];

const privateRputes = [];

export { publicRoutes, privateRputes };
