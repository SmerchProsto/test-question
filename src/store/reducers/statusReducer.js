import {SET_STATUS} from "../../utils/consts";

const status = {
    isNormCO2: false,
    isNormTemp: false,
    caption: '',
    description: ''
}

export const statusReducer = (state = status, action) => {
    switch (action.type) {
        case SET_STATUS:
            if (action.payload.co2 > 800 || action.payload.temp > 27) {
                state.caption = 'Душнила не доволен вами'
                if (action.payload.co2 > 800) {
                    state.isNormCO2 = false
                    state.description = 'CO2 превышает норму'
                }
                if (action.payload.temp > 27) {
                    state.isNormTemp = false
                    state.description = 'Температура превышает норму'
                }
                if (action.payload.co2 > 800 && action.payload.temp > 27) {
                    state.description = 'Оба параметра выше нормы'
                }
            }  else {
                state.caption = 'Душнила доволен вами'
                state.description = 'Все показатели в норме'
                state.isNormCO2 = true
                state.isNormTemp = true
            }

            return {...state}
        default:
            return state
    }
}

export const addStatus = (payload) => ({type: SET_STATUS, payload})