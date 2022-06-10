import axios from 'axios';

const initialState = {
    contactCollection:[],
    hasMore:true,
    loading:true
}

export default function ContactListReducer(state = initialState, action){
    switch (action.type){
        case 'GetContactList': {
            var setHasMore;
            if(action.payload !== undefined){
                setHasMore = action.payload.length !== 0 ? true : false
            } else {
                setHasMore = false
            }
            return {
                ...state,
                hasMore:setHasMore,
                contactCollection : state.hasMore !== true ? state.contactCollection : state.contactCollection.concat(action.payload)
            }
        }
        default :
            return state
    }
}

//Thunk function

export function GetContactsList(page){
    return async function getContactsForCardsThunk(dispatch){
        const params = { page:page, results:30}
        const response = await axios.get('https://randomuser.me/api/', {params:params})
        if(response){
            dispatch({type:'GetContactList',payload:response.data.results})
        }
    }
}