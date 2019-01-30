export const fetchurlCreate = "http://localhost:4040/api/generic/insertgeneric";
export const fetchurlGetAll = "http://localhost:4040/api/generic/selectgeneric";
export const fetchurlGetOne = "http://localhost:4040/api/generic/selecteditgeneric";
export const fetchurlUpdate = "http://localhost:4040/api/generic/updategeneric";
export const fetchurldrp = "http://localhost:4040/api/generic/selectdrpgeneric";
export const fetchurlsubdrp = "http://localhost:4040/api/generic/selectsubdrpgeneric";

export const fetchurlrelay = "./public/relay.json";

export default function getHeader(params){
    var returnmethod = {
        method: 'POST', headers: {'content-type':'application/x-www-form-urlencoded'}, body: params
    }
    return returnmethod;
}

export function getHeaderJSON(params){
    var returnmethod = {
        method: 'get', headers: {'content-type':'application/json'}, body: params
    }
    return returnmethod;
}