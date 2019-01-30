import { fetchurlrelay, fetchurlCreate, fetchurlGetOne, fetchurlUpdate, fetchurlGetAll, fetchurldrp, fetchurlsubdrp } from "./fetchurl";
import getHeader from "./fetchurl";
import getHeaderJSON from "./fetchurl";

export const createFetch = (params) => fetch(fetchurlCreate, getHeader(params)).then(res => res.json());
export const updateFetch = (params) => fetch(fetchurlUpdate, getHeader(params)).then(res => res.json());
export const getAllFetch = (params) => fetch(fetchurlGetAll, getHeader(params)).then(res => res.json());
export const getOneFetch = (params) => fetch(fetchurlGetOne, getHeader(params)).then(res => res.json());
export const getDropDownPop = (params) => fetch(fetchurldrp, getHeader(params)).then(res => res.json());
export const getSubDropDownPop = (params) => fetch(fetchurlsubdrp, getHeader(params)).then(res => res.json());

export const getRelay = (params) => fetch(fetchurlrelay, getHeaderJSON(params)).then(res => res.json());