import axios from 'axios'

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function resultsFetchDataSuccess(data) {
    return {
        type: 'RESULT_DATA',
        data
    };
}


export function deleteData(){
    return{
        type:'DELETE_DATA'
    }
}

export function isLoading(bool){
    return{
        type:'LOADING_STATUS',
        bool
    }
}

export function getCards(url){
    return (dispatch) => {
             return axios({
			url: url,
			timeout: 20000,
			method: 'get',
			responseType: 'json'
		})
			.then(function(response) {
                dispatch(isLoading(false));
				dispatch(resultsFetchDataSuccess(response.data));
			})
			.catch(function(response){
				dispatch(itemsHasErrored(response.data));
        })
      }
}

export function like(id,count){
    return{
        type:'LIKE',
        id,
        count
    }
}

export function dislike(id,count){
    return{
        type:'DISLIKE',
        id,
        count
    }
}

export function bookmark(id,status){
    console.log("bookmark");
    return{
        type:'BOOKMARK',
        id,
        status
    }
}

export function activeCard(card){
    return{
        type:'ACTIVE_CARD',
        card
    }
}
export function addCard(obj){
    return{
        type:'ADD_CARD',
        obj
    }
}

export function addCardBackend(url,data){
    console.log(data);
    return (dispatch) => {
             return axios({
			url: url,
			timeout: 20000,
			method: 'post',
            data,
			responseType: 'json'
		})
			.then(function(response) {
                console.log("posted");
			})
			.catch(function(response){
				dispatch(itemsHasErrored(response.data));
        })
      }
}


