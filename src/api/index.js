//当前这个模块:API进行统一管理
import requests from "./request";
import mockRequests from "./mockRequest";
//三级联动接口
//api/product/getBaseCategoryList get 无参数
//发请求:axios发请求返回结果Promise对象
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });

//获取banner(Home首页轮播图接口)
export const reqGetBannerList = () => mockRequests.get('/banner');
// export const reqGetBannerList = () => mockRequests({url:'/banner',method:'get'});

//获取floor数据
export const reqFloorList = () => mockRequests.get('/floor');

//获取Search数据 地址:/api/list 请求方式 post, 参数:需要带参数

// {
//     "category3Id": "61",
//     "categoryName": "手机",
//     "keyword": "小米",
//     "order": "1:desc",
//     "pageNo": 1,
//     "pageSize": 10,
//     "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
//     "trademark": "4:小米 "
// }

//当前这个函数需要结构外部的传递参数 
//当前这个接口(获取搜索模块的数据)，服务器传递一个默认参数【至少是一个空对象】
export const reqGetSearchInfo = (params) => requests({url:"/list",method:"post",data:params})
