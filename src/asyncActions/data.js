import {addDataAction} from "../store/reducers/dataReducer";

export const fetchData = () => {
    return function (dispatch) {
        fetch('http://dushnila.gooddelo.com/data')
            .then(response => response.json())
            .then(json => dispatch(addDataAction(json)))
    }
}