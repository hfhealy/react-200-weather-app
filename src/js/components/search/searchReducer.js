const defaultState = {
    city: ""
};

export default function SearchReducer (state = defaultState, action) {

    const { type, payload } = action;

    switch(type) {

        case 'UPDATE_SEARCH': {

            return {
                ...state,

                city: payload.city
            };
        }

        // case 'GET_WEATHER': {

        //     return {
        //         ...state,

        //         city: payload.city
        //     };
        // }
        default: {
            return state;
        }
    }

    
}