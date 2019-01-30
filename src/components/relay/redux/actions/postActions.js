import { GETALL_RELAY,GETONE_RELAY, UPDATE_RELAY } from "./types";

import {getRelay} from "../../../../fetchapi";


export const getRelays = () => dispatch =>{
    
    var params ="";
    dispatch({
        type:GETALL_RELAY,
        payload: data2
    });

   
}

export const updateRelays = (params) => dispatch =>{
    
    
    dispatch({
        type:UPDATE_RELAY,
        payload: params
    });

   
}

const data2 = [
    {
        clientname:"ABC Limited",
        invoiceid:"004561",
        invoiceduedate:"12/02/19",
        invoiceamount:1500,
        discountoffered:0
    },
    {
        clientname:"DHF Limited",
        invoiceid:"004562",
        invoiceduedate:"20/02/19",
        invoiceamount:1200,
        discountoffered:0
    },
    {
        clientname:"JKL Limited",
        invoiceid:"004563",
        invoiceduedate:"15/03/19",
        invoiceamount:900,
        discountoffered:0
    },
    {
        clientname:"XYZ Limited",
        invoiceid:"004564",
        invoiceduedate:"19/04/19",
        invoiceamount:570,
        discountoffered:0
    }

]
