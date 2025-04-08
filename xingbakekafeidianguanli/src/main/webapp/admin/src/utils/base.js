const base = {
    get() {
        return {
            url : "http://localhost:8080/xingbakekafeidianguanli/",
            name: "xingbakekafeidianguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xingbakekafeidianguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "星巴克咖啡店管理系统"
        } 
    }
}
export default base
