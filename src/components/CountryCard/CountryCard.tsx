import React from 'react';
import { BsArrowReturnLeft, BsPeople } from 'react-icons/bs';
import { FaCity, FaLanguage } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { useHistory } from 'react-router-dom';
import useTypedSelector from '../../hooks/useTypedSelector';
import { CountryData } from '../../types';

import styles from './CountryCard.module.css';

export default function CountryCard({
	name,
	altSpellings,
	borders,
	capital,
	flag,
	languages,
	nativeName,
	population,
	region,
	subregion,
}: CountryData) {
	const history = useHistory();
	const {
		primaryColor,
		lightenedPrimary,
		darkenedPrimary,
		secondaryColor,
	} = useTypedSelector((state) => state.theme);

	const handleClick = () => {
		history.push('/');
	};

	return (
		<div
			style={{ backgroundColor: lightenedPrimary, color: secondaryColor }}
			className={styles.Container}
		>
			<div style={{ backgroundColor: primaryColor }} className={styles.Card}>
				<BsArrowReturnLeft
					style={{ color: secondaryColor }}
					className={styles.ReturnIcon}
					onClick={handleClick}
				/>
				<div className={styles.FlagContainer}>
					<img src={flag} alt={`${name}_flag`} className={styles.Flag} />
				</div>
				<h1 className={styles.Name}>{name}</h1>
				<h2 className={styles.NativeName}>{nativeName}</h2>
				<p className={styles.AltSpellings}>{altSpellings.join(', ')}</p>
				<div
					style={{ border: `2px solid ${darkenedPrimary}` }}
					className={styles.Info}
				>
					<span className={styles.Statistic}>
						<GoLocation className={styles.Icon} /> {subregion}, {region}
					</span>
					<span className={styles.Statistic}>
						<FaCity className={styles.Icon} /> Capital: {capital}
					</span>
					<span className={styles.Statistic}>
						<FaLanguage className={styles.Icon} />{' '}
						{languages.map(({ name }) => name).join(', ')}
					</span>
					<span className={styles.Statistic}>
						<BsPeople className={styles.Icon} /> {population.toLocaleString()}
					</span>
				</div>
			</div>
		</div>
	);
}
