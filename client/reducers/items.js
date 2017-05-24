


export function cardData(state=[],action){
    
    switch(action.type){
        case 'RESULT_DATA':
        {
            return action.data;
        }
        case 'DELETE_DATA':
            return [];
        default:
            return state;    
    }
}

export function loading(state=true,action){
    switch(action.type){
        case 'LOADING_STATUS':
            return action.bool;
        default:
            return state;    
    }
}
