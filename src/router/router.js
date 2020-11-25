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
        path: '/learnSettings',
        component: r => require.ensure([], () => r(require('../pages/onlineTrain/learnSettings.vue')), 'learnSettings')
    }, {
        path: '/questionBank',
        component: r => require.ensure([], () => r(require('../pages/onlineTrain/questionBank.vue')), 'questionBank')
    }, {
        path: '/testManage',
        component: r => require.ensure([], () => r(require('../pages/onlineTrain/testManage.vue')), 'testManage')
    }, {
        path: '/preview',
        component: r => require.ensure([], () => r(require('../pages/onlineTrain/preview.vue')), 'preview')
    },{
        path: '/testDetail',
        component: r => require.ensure([], () => r(require('../pages/onlineTrain/testDetail.vue')), 'testDetail')
    },{
        path: '/myTest',
        component: r => require.ensure([], () => r(require('../pages/onlineTrain/myTest.vue')), 'myTest')
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
    },{
        path: '/nineTopics/manage',
        component: r => require.ensure([], () => r(require('../pages/nineTopics/manage.vue')), 'manage')
    }, {
        path: '/nineTopics/responsibility',
        component: r => require.ensure([], () => r(require('../pages/nineTopics/responsibility.vue')), 'responsibility')
    }, {
        path: '/nineTopics/monitor',
        component: r => require.ensure([], () => r(require('../pages/nineTopics/monitor.vue')), 'monitor')
    }, {
        path: '/nineTopics/protect',
        component: r => require.ensure([], () => r(require('../pages/nineTopics/protect.vue')), 'protect')
    }, {
        path: '/nineTopics/goverment',
        component: r => require.ensure([], () => r(require('../pages/nineTopics/goverment.vue')), 'goverment')
    }, {
        path: '/nineTopics/repair',
        component: r => require.ensure([], () => r(require('../pages/nineTopics/repair.vue')), 'repair')
    }, {
        path: '/nineTopics/cure',
        component: r => require.ensure([], () => r(require('../pages/nineTopics/cure.vue')), 'cure')
    }, {
        path: '/nineTopics/waterShore',
        component: r => require.ensure([], () => r(require('../pages/nineTopics/waterShore.vue')), 'waterShore')
    }, {
        path: '/nineTopics/waterProtect',
        component: r => require.ensure([], () => r(require('../pages/nineTopics/waterProtect.vue')), 'waterProtect')
    }, {
        path: '/meeting/book',
        component: r => require.ensure([], () => r(require('../pages/meeting/book.vue')), 'book')
    }, {
        path: '/meeting/draft',
        component: r => require.ensure([], () => r(require('../pages/meeting/draft.vue')), 'draft')
    }, {
        path: '/meeting/add',
        component: r => require.ensure([], () => r(require('../pages/meeting/add.vue')), 'add')
    }, {
        path: '/meeting/detail',
        component: r => require.ensure([], () => r(require('../pages/meeting/detail.vue')), 'detail')
    }, {
        path: '/meeting/public',
        component: r => require.ensure([], () => r(require('../pages/meeting/public.vue')), 'public')
    }, {
        path: '/meeting/publicBook',
        component: r => require.ensure([], () => r(require('../pages/meeting/publicBook.vue')), 'publicBook')
    }, {
        path: '/meeting/publicDraft',
        component: r => require.ensure([], () => r(require('../pages/meeting/publicDraft.vue')), 'publicDraft')
    }, {
        path: '/waterQuality/water1',
        component: r => require.ensure([], () => r(require('../pages/waterQuality/water1.vue')), 'water1')
    }, {
        path: '/waterQuality/water2',
        component: r => require.ensure([], () => r(require('../pages/waterQuality/water2.vue')), 'water2')
    }, {
        path: '/waterQuality/water3',
        component: r => require.ensure([], () => r(require('../pages/waterQuality/water3.vue')), 'water3')
    }, {
        path: '/waterQuality/water4',
        component: r => require.ensure([], () => r(require('../pages/waterQuality/water4.vue')), 'water4')
    }, {
        path: '/waterQuality/water5',
        component: r => require.ensure([], () => r(require('../pages/waterQuality/water5.vue')), 'water5')
    }, {
        path: '/waterQuality/water6',
        component: r => require.ensure([], () => r(require('../pages/waterQuality/water6.vue')), 'water6')
    }, {
        path: '/waterQuality/water7',
        component: r => require.ensure([], () => r(require('../pages/waterQuality/water7.vue')), 'water7')
    }, {
        path: '/waterQuality/water8',
        component: r => require.ensure([], () => r(require('../pages/waterQuality/water8.vue')), 'water8')
    }, {
        path: '/waterQuality/water9',
        component: r => require.ensure([], () => r(require('../pages/waterQuality/water9.vue')), 'water9')
    }, {
        path: '/waterQuality/water10',
        component: r => require.ensure([], () => r(require('../pages/waterQuality/water10.vue')), 'water10')
    }, {
        path: '/waterQuality/water11',
        component: r => require.ensure([], () => r(require('../pages/waterQuality/water11.vue')), 'water11')
    }, {
        path: '/waterQuality/water12',
        component: r => require.ensure([], () => r(require('../pages/waterQuality/water12.vue')), 'water12')
    },{
        path: '/waterQuality/water13',
        component: r => require.ensure([], () => r(require('../pages/waterQuality/water13.vue')), 'water13')
    },{
        path: '/waterQuality/water14',
        component: r => require.ensure([], () => r(require('../pages/waterQuality/water14.vue')), 'water14')
    }, {
        path: '/waterQuality/siteInfo1',
        component: r => require.ensure([], () => r(require('../pages/waterQuality/siteInfo1.vue')), 'siteInfo1')
    }, {
        path: '/waterQuality/siteInfo2',
        component: r => require.ensure([], () => r(require('../pages/waterQuality/siteInfo2.vue')), 'siteInfo2')
    }, {
        path: '/waterQuality/siteInfo3',
        component: r => require.ensure([], () => r(require('../pages/waterQuality/siteInfo3.vue')), 'siteInfo3')
    }, {
        path: '/waterQuality/siteInfo4',
        component: r => require.ensure([], () => r(require('../pages/waterQuality/siteInfo4.vue')), 'siteInfo4')
    }, {
        path: '/waterQuality/siteInfo5',
        component: r => require.ensure([], () => r(require('../pages/waterQuality/siteInfo5.vue')), 'siteInfo5')
    }, {
        path: '/waterQuality/siteInfo6',
        component: r => require.ensure([], () => r(require('../pages/waterQuality/siteInfo6.vue')), 'siteInfo6')
    }, {
        path: '/information/home',
        component: r => require.ensure([], () => r(require('../pages/information/home.vue')), 'home')
    }, {
        path: '/screen',
        component: r => require.ensure([], () => r(require('../pages/screen/screen.vue')), 'screen')
    }, {
        path: '/check/check1',
        component: r => require.ensure([], () => r(require('../pages/check/check1.vue')), 'check1')
    }, {
        path: '/check/check2',
        component: r => require.ensure([], () => r(require('../pages/check/check2.vue')), 'check2')
    }, {
        path: '/check/check3',
        component: r => require.ensure([], () => r(require('../pages/check/check3.vue')), 'check3')
    }, {
        path: '/check/check4',
        component: r => require.ensure([], () => r(require('../pages/check/check4.vue')), 'check4')
    }, {
        path: '/check/check5',
        component: r => require.ensure([], () => r(require('../pages/check/check5.vue')), 'check5')
    }, {
        path: '/check/check6',
        component: r => require.ensure([], () => r(require('../pages/check/check6.vue')), 'check6')
    }, {
        path: '/check/check7',
        component: r => require.ensure([], () => r(require('../pages/check/check7.vue')), 'check7')
    }, {
        path: '/check/check8',
        component: r => require.ensure([], () => r(require('../pages/check/check8.vue')), 'check8')
    }, {
        path: '/check/check9',
        component: r => require.ensure([], () => r(require('../pages/check/check9.vue')), 'check9')
    }, {
        path: '/check/check10',
        component: r => require.ensure([], () => r(require('../pages/check/check10.vue')), 'check10')
    }, {
        path: '/check/check11',
        component: r => require.ensure([], () => r(require('../pages/check/check11.vue')), 'check11')
    }, {
        path: '/check/check12',
        component: r => require.ensure([], () => r(require('../pages/check/check12.vue')), 'check12')
    }, {
        path: '/check/check13',
        component: r => require.ensure([], () => r(require('../pages/check/check13.vue')), 'check13')
    }, {
        path: '/check/check14',
        component: r => require.ensure([], () => r(require('../pages/check/check14.vue')), 'check14')
    },{
        path: '/check/check15',
        component: r => require.ensure([], () => r(require('../pages/check/check15.vue')), 'check15')
    },{
        path: '/check/check16',
        component: r => require.ensure([], () => r(require('../pages/check/check16.vue')), 'check16')
    },{
        path: '/check/check17',
        component: r => require.ensure([], () => r(require('../pages/check/check17.vue')), 'check17')
    },{
        path: '/check/check18',
        component: r => require.ensure([], () => r(require('../pages/check/check18.vue')), 'check18')
    },{
        path: '/check/check19',
        component: r => require.ensure([], () => r(require('../pages/check/check19.vue')), 'check19')
    }]
}]