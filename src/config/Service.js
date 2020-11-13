import axios from "axios";
import qs from "qs";

const showStatus = (status) => {
    const msg = {
        400: '请求错误(400)',
        401: '未授权,请重新登录(401)',
        403: '拒绝访问(403)',
        404: '请求出错(404)',
        408: '请求超时(408)',
        500: '服务器错误(500)',
        501: '服务未实现(501)',
        502: '网络错误(502)',
        503: '服务不可用(503)',
        504: '网络超时(504)',
        505: 'HTTP版本不受支持(505)'
    };
    if (status in msg) {
        return `${msg[status]},请检查网络或联系管理员`
    } else {
        return `连接出错(${status}),请检查网络或联系管理员`
    }
};

const Service = axios.create({
    //基本域名 生产环境 ？ “线上服务器域名” ： “本地开发测试域名”
    // baseURL: process.env.NODE_ENV === 'production' ? 'http://172.22.4.2:8080/':'http://172.22.4.2:8080/',
    baseURL: process.env.NODE_ENV === 'production' ? 'http://172.22.4.2:8080/':'http://49.235.20.228:8080/',
    //baseURL: 'http://localhost:8080/',
        headers: {
            get: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            post: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                // 'Content-Type': 'application/json'
            }
        },
    // timeout: 30000,
    transformRequest: [ data => {
        // data = JSON.stringify(data);
        if(Object.prototype.toString.call(data) !== '[object FormData]') data = qs.stringify(data);
        // data = JSON.stringify(data)
        // console.log(data.prototype);
        return data
    }],
    validateStatus () {
        // 使用async-await，处理reject情况较为繁琐，所以全部返回resolve，在业务代码中处理异常
        return true
    },
    transformResponse: [(data) => {
        if (typeof data === 'string' && data.startsWith('{')) {
            data = JSON.parse(data)
        }
        return data
    }]
});
//请求拦截器
Service.interceptors.request.use(config => {
    const isServer = typeof window === 'undefined';
    if (!isServer) {
        const token = window.sessionStorage.getItem('access');
        if (token) {
            config.headers.common['token'] = token;
        }
    }
    return config
},error => {
    error.data = {};
    error.data.msg = '服务器异常请联系管理员!';
    return Promise.resolve(error);
});
//响应拦截器
Service.interceptors.response.use(response => {
    const status = response.status;
    let message = '';
    if (status < 200 || status >= 300) {
        message = showStatus(status);
        if (typeof response.data === 'string') {
            response.data = { message };
        } else {
            response.data.message = message;
        }
    }
    return response;
},error => {
    error.data = {};
    error.data.msg = '请求超时或服务器异常,请检查网络或联系管理员!';
    return Promise.resolve(error)
});

export default Service;
