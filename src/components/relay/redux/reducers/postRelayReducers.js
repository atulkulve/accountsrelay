import { GETONE_RELAY,GETALL_RELAY, UPDATE_RELAY  } from "../actions/types";

const initialState ={
    allrelay:[],
    selectedrelay:{}
}

export default function (state=initialState,action){

    switch(action.type){
        case GETALL_RELAY:{
            return{
                ...state,
                allrelay: action.payload,
                selectedrelay:{}
            }
        }
        case UPDATE_RELAY:{
            var allrelay = [...state.allrelay];
            var modifiedentry =  allrelay.filter(function(row) {
                return row.invoiceid != action.payload.invoiceid;
            });
            modifiedentry.push(action.payload);
            // alert('UPDATE_RELAY' + JSON.stringify(modifiedentry) + ' : ' +action.payload);
            return{
                
                allrelay: modifiedentry,
                selectedrelay: {}                
            }
        }
        default :{
            return state
        }
    }
}