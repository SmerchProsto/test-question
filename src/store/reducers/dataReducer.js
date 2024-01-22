import {ADD_DATA, GET_DATA} from "../../utils/consts";

const dataDushina = {
    co2: 0,
    temp: 0
}

export const dataReducer = (state = dataDushina, action) => {
    switch (action.type) {
        case ADD_DATA:
            return {...state, co2: action.payload.co2, temp: action.payload.temp}
        default:
            return state
    }
}
//action creators
export const addDataAction = (payload) => ({type: ADD_DATA, payload})