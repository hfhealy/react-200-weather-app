import axios from 'axios';

export function updateSearch(city) {
	return {
		type: 'UPDATE_SEARCH',
		payload: { city }
	};
}

export function getWeather(city) {
    console.log("city", city)
    return {
        type:'GET_WEATHER',
        payload: axios.get(`/search/${city}`),
    };
}