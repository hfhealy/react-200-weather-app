import { connect } from 'react-redux';
import Search from './search';

// This function takes the store and returns an object
// that's passed to the props of the component.
function mapStoreToProps(store) {
	console.log("line 7", store);
	return {
		city: store.search.city
	};
}

// This might look odd but, connect returns a function,
// that is then called with the component itself.
export default connect(mapStoreToProps)(Search);