import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useTypedSelector from './hooks/useTypedSelector';
import { getAllCountries } from './redux/actions/country';
import Routes from './Routes';

export default function App() {
	const dispatch = useDispatch();
	const { data, error } = useTypedSelector((state) => state.countries);

	useEffect(() => {
		if (error) return;

		// If countries is empty, dispatch an Action resulting in API Call and process.
		if (data.length === 0) {
			dispatch(getAllCountries());
		}
	}, [dispatch, data, error]);

	if (error) {
		return <p>Failed To load country data. Reason: {error.message}</p>;
	}

	if (data.length === 0) {
		return <p>Please wait, loading country data...</p>;
	}

	return (
		<>
			<Routes />
		</>
	);
}
