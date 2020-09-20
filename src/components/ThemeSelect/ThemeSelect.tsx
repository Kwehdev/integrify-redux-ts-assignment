import React from 'react';
import { themeMap } from '../../themes';
import ThemeButton from '../ThemeButton';

import styles from './ThemeSelect.module.css';

export default function ThemeSelect() {
	// For Each theme, create a theme button and return.
	const ThemeButtons = Object.keys(themeMap).map((key) => (
		<ThemeButton
			key={key}
			themeKey={key}
			primaryColor={themeMap[key].primaryColor}
		/>
	));

	return <div className={styles.Container}>{ThemeButtons}</div>;
}
