import { GET_ENTRIES,CREATE_ENTRY } from "../actions/types";

const initialState = {
    items: [],
    item:{}
}

export default function(state=initialState,action){

    switch(action.type){
        case GET_ENTRIES: 
        
            return {
                ...state,
                items: action.payload
            }
        case CREATE_ENTRY: 
        console.log('reducer');
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }

}