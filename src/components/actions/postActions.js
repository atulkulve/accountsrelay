import { GET_ENTRIES,CREATE_ENTRY } from "./types";

export const createEntry = (postData) => dispatch => {
    console.log('createEntry',postData);

    var params = 'maintable=country&input0=' + JSON.stringify(postData);

    fetch('http://localhost:4040/api/generic/insertgeneric', 
            {method: 'POST', headers: {'content-type':'application/x-www-form-urlencoded'},
            body: params }).
            then(res =>res.json()).
            then(data => {

            dispatch(selectAllEntry());
            console.log(data);
                dispatch({
                    type:CREATE_ENTRY,
                    payload: data
                })
                
                
            }); 
}

export const selectAllEntry = () => dispatch => {
    console.log('selectAllEntry');

    var params = 'maintable=country&subtables=[]&subtablesflds=[]';

    fetch('http://localhost:4040/api/generic/selectgeneric', 
            {method: 'POST', headers: {'content-type':'application/x-www-form-urlencoded'},
            body: params }).
            then(res =>res.json()).
            then(data => {

            console.log(data);
                dispatch({
                    type:GET_ENTRIES,
                    payload: data
                })
            }); 
}