import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CountryData } from '../types';
import useTypedSelector from './useTypedSelector';

export default function useCountry(
	countryName: string
): [Error | undefined, CountryData | undefined] {
	const dispatch = useDispatch();
	const { data, error } = useTypedSelector((state) => state.countries);
	const [err, setErr] = useState<Error | undefined>();
	const [countryData, setCountryData] = useState<undefined | CountryData>();

	useEffect(() => {
		if (countryData) return;
		if (error) setErr(error);
		const country = data.find(
			({ name }) => name.toLowerCase() === countryName.toLowerCase()
		);
		if (!country) setErr(new Error('Country not found'));
		setCountryData(country);
	}, [dispatch, countryData, countryName, error, data]);

	return [err, countryData];
}
