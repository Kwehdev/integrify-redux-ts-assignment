import React, { useMemo } from 'react';
import TableRow from '../TableRow';

type TableBodyProps = {
	data: {
		flag: string;
		name: string;
		population: number;
		languages: string[];
		region: string;
	}[];
};
export default function TableBody({ data }: TableBodyProps) {
	const TableRows = useMemo(() => {
		return data.map((country) => (
			<TableRow key={`Row for ${country.name}`} {...country} />
		));
	}, [data]);

	return <tbody>{TableRows}</tbody>;
}
