import App from '../App'

export default [{
    path: '/',
    component: App,
    children: [{
        path: '/classDetail',
        component: r => require.ensure([], () => r(require('../pages/onlineTrain/classDetail.vue')), 'classDetail')
    }, {
        path: '/startStudy',
        component: r => require.ensure([], () => r(require('../pages/onlineTrain/startStudy.vue')), 'startStudy')
    }, {
        path: '/',
        component: r => require.ensure([], () => r(require('../pages/onlineTrain/classCenter.vue')), 'classCenter')
    }, {
        path: '/examRoom',
        component: r => require.ensure([], () => r(require('../pages/onlineTrain/examRoom.vue')), 'examRoom')
    }, {
        path: '/myClasses',
        component: r => require.ensure([], () => r(require('../pages/onlineTrain/myClasses.vue')), 'myClasses')
    }, {
        path: '/addClasses',
        component: r => require.ensure([], () => r(require('../pages/onlineTrain/addClass.vue')), 'addClasses')
    }, {
        path: '/questionBank',
        component: r => require.ensure([], () => r(require('../pages/onlineTrain/questionBank.vue')), 'questionBank')
    }, {
        path: '/testManage',
        component: r => require.ensure([], () => r(require('../pages/onlineTrain/testManage.vue')), 'testManage')
    }, {
        path: '/route',
        component: r => require.ensure([], () => r(require('../pages/route.vue')), 'route')
    }, {
        path: '/missionInit',
        component: r => require.ensure([], () => r(require('../pages/workReport/missionInit.vue')), 'missionInit')
    },{
        path: '/launchDetail',
        component: r => require.ensure([], () => r(require('../pages/workReport/launchDetail.vue')), 'launchDetail')
    }, {
        path: '/infoFill',
        component: r => require.ensure([], () => r(require('../pages/workReport/infoFill.vue')), 'infoFill')
    },{
        path: '/reportDetail',
        component: r => require.ensure([], () => r(require('../pages/workReport/reportDetail.vue')), 'reportDetail')
    }]
}]