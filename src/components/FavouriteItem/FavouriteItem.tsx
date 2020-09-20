import React from 'react';
import { GoTrashcan } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import useCountry from '../../hooks/useCountry';
import useTypedSelector from '../../hooks/useTypedSelector';
import { removeFavourite } from '../../redux/actions/favourite';

import styles from './FavouriteItem.module.css';

type FavouriteItemProps = {
	name: string;
};

export default function FavouriteItem({ name }: FavouriteItemProps) {
	const { secondaryColor } = useTypedSelector((state) => state.theme);
	const [error, data] = useCountry(name);
	const dispatch = useDispatch();

	if (error) {
		return <p>Failed to load country</p>;
	}

	if (!data) {
		return <p>Loading data...</p>;
	}

	const handleClick = () => {
		dispatch(removeFavourite(data.name));
	};

	return (
		<li
			style={{
				borderBottom: `2px solid ${secondaryColor}`,
			}}
			className={styles.Container}
		>
			<img
				className={styles.Flag}
				src={data!.flag}
				alt={`${data!.name}_flag`}
			/>
			<p className={styles.Name}>{data!.name}</p>
			<GoTrashcan className={styles.TrashCan} onClick={handleClick} />
		</li>
	);
}
