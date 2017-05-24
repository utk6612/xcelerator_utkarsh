


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

export function likeCount(state=new Map(),action){
    switch(action.type){
        case 'LIKE':
            console.log("like");
            state.set(action.id,action.count);
            return state;
        default:
            return state;    
    }
}

export function dislikeCount(state=new Map(),action){
    switch(action.type){
        case 'DISLIKE':
            state.set(action.id,action.count);
            return state;
        default:
            return state;    
    }    
}

export function bookmarkStatus(state=new Map(),action){
        switch(action.type){
        case 'BOOKMARK':
            console.log("book_red");
            state.set(action.id,action.status);
            return state;
        default:
            return state;    
    }    
}