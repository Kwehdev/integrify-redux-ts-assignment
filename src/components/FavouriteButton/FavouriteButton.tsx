import React, { useMemo } from 'react';
import { FiHeart } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import useTypedSelector from '../../hooks/useTypedSelector';
import { addFavourite } from '../../redux/actions/favourite';

import styles from './FavouriteButton.module.css';

type FavouriteButtonProps = {
	name: string;
};

export default function FavouriteButton({ name }: FavouriteButtonProps) {
	const favourites = useTypedSelector((state) => state.favourites);
	const dispatch = useDispatch();
	const isActive = useMemo(
		() =>
			favourites.find(({ name: countryName }) => {
				return countryName === name;
			}),
		[favourites, name]
	);

	const handleClick = () => {
		dispatch(addFavourite({ name }));
	};

	return (
		<>
			{isActive ? (
				<FiHeart className={`${styles.Heart} ${styles.Heart_selected}`} />
			) : (
				<FiHeart className={styles.Heart} onClick={handleClick} />
			)}
		</>
	);
}
