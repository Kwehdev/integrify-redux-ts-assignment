import React, { useEffect, useMemo } from 'react';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import useTypedSelector from '../../hooks/useTypedSelector';
import FavouriteItem from '../FavouriteItem';

import styles from './FavouritesMenu.module.css';

export default function FavouritesMenu() {
	const history = useHistory();
	const { lightenedPrimary, secondaryColor } = useTypedSelector(
		(state) => state.theme
	);

	const handleClick = () => {
		history.push('/');
	};

	const favourites = useTypedSelector((state) => state.favourites);

	const FavouriteItems = useMemo(() => {
		return favourites.map((country) => (
			<FavouriteItem key={country.name} {...country} />
		));
	}, [favourites]);

	useEffect(() => {
		if (favourites.length === 0) {
			setTimeout(() => {
				history.push('/');
			}, 5000);
		}
	}, [favourites, history]);
	return (
		<div
			style={{ backgroundColor: lightenedPrimary, color: secondaryColor }}
			className={styles.Container}
		>
			<BsArrowReturnLeft
				style={{ color: secondaryColor }}
				className={styles.ReturnIcon}
				onClick={handleClick}
			/>
			<h1 className={styles.Title}>Your Favourite Countries</h1>
			{favourites.length === 0 ? (
				<>
					<h2 className={styles.SubTitle}>You have no favourite countries!</h2>
					<h2 className={styles.SubTitle}>Redirecting in 5 seconds...</h2>
				</>
			) : (
				<ul className={styles.Menu}>{FavouriteItems}</ul>
			)}
		</div>
	);
}
