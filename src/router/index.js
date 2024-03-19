import Home from '../views/home'
import Cart from '../views/cart'
import Mine from '../views/mine'
import Search from '../views/search'
import Detail from '../views/detail'

export const routes = [
    {
        title: '首页',
        path: '/home',
        component: Home,
        meta: {icon: 'icon-shouye'}
    },
    {
        title: '搜索',
        path: '/search',
        component: Search,
        meta: {icon: 'icon-sousuo'}
    },
    {
        title: '购物车',
        path: '/cart',
        component: Cart,
        meta: {icon: 'icon-gouwuche'}
    },
    {
        title: '我的',
        path: '/mine',
        component: Mine,
        meta: {icon: 'icon-wode1'}
    },
    {
        title: '详情',
        path: '/detail/:id',
        component: Detail,
        meta: {icon: 'icon-wode1',hidden: true}
    }
]