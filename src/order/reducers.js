import {
    ACTION_SET_FROM
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
    }
}