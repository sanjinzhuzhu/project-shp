//对外暴露一个函数
//存储token
export const setToken = (token) =>{
    localStorage.setItem('TOKEN',token);
};
//清除本地存储的token
export const removeToken=()=>{
    localStorage.removeItem("TOKEN")
}

//获取token   但是只在home组件不会消失  因为其他组件没有写gettoken
// export const getToken=()=>{
//     return localStorage.getItem("TOKEN")
// }