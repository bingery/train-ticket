import {
    ACTION_SET_FROM,
    ACTION_SET_TO,
    ACTION_SET_CITY_DATA,
    ACTION_SET_IS_CITY_SELECTOR_SHOW,
    ACTION_SET_IS_CITY_DATA_LOADING,
    ACTION_SET_CURRENT_SELECTORING_LEFT_CITY
} from './actions'
export default {
    from(state = '北京', action) {
        const { type, payload } = action;
        switch (type) {
            case ACTION_SET_FROM:
                return payload;
            default:
        }
        return state;
    },
    to(state = '上海', action) {
        const { type, payload } = action;
        switch (type) {
            case ACTION_SET_TO:
                return payload;
            default:
        }
        return state;
    },
    cityData(state = null, action) {
        const { type, payload } = action;
        switch (type) {
            case ACTION_SET_CITY_DATA:
                return payload;
            default:
        }
        return state;
    },
    isCityDataLoading(state = false, action) {
        const { type, payload } = action;
        switch (type) {
            case ACTION_SET_IS_CITY_DATA_LOADING:
                return payload;
            default:
        }
        return state;
    },
    isCitySelectorShow(state = '上海', action) {
        const { type, payload } = action;
        switch (type) {
            case ACTION_SET_IS_CITY_SELECTOR_SHOW:
                return payload;
            default:
        }
        return state;
    },
    currentSelectingLeftCity(state = '上海', action) {
        const { type, payload } = action;
        switch (type) {
            case ACTION_SET_CURRENT_SELECTORING_LEFT_CITY:
                return payload;
            default:
        }
        return state;
    },
}