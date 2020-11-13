import App from '../App'

export default [{
    path: '/',
    component: App,
    children: [{
        path: '/',
        component: r => require.ensure([], () => r(require('../pages/classes/classDetail.vue')), 'classDetail')
    }, {
        path: '/startStudy',
        component: r => require.ensure([], () => r(require('../pages/study/startStudy.vue')), 'startStudy')
    }, {
        path: '/classCenter',
        component: r => require.ensure([], () => r(require('../pages/classes/classCenter.vue')), 'classCenter')
    }, {
        path: '/examRoom',
        component: r => require.ensure([], () => r(require('../pages/rooms/examRoom.vue')), 'examRoom')
    }, {
        path: '/myClasses',
        component: r => require.ensure([], () => r(require('../pages/classes/myClasses.vue')), 'myClasses')
    }, {
        path: '/addClasses',
        component: r => require.ensure([], () => r(require('../pages/classes/addClass.vue')), 'addClasses')
    }, {
        path: '/questionBank',
        component: r => require.ensure([], () => r(require('../pages/tests/questionBank.vue')), 'questionBank')
    }, {
        path: '/testManage',
        component: r => require.ensure([], () => r(require('../pages/tests/testManage.vue')), 'testManage')
    }, {
        path: '/route',
        component: r => require.ensure([], () => r(require('../pages/route.vue')), 'route')
    }]
}]