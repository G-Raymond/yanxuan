import HttpRequest from "./request";
const request = new HttpRequest();

export const getHomeData = (data, loading) => request.get('index/index', data, loading);