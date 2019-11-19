import {locationConstants} from '../_constants'

const initialState = {
	loading: false,
	isError: false,
	currentLocation: null,
	favoritesList: []
}

export function locations(state = initialState, action) {
	switch (action.type) {
		case locationConstants.GET_LOCATIONS_REQUEST:
			return {}
		default:
			return state
	}
}
