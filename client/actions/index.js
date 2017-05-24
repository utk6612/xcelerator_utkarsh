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

