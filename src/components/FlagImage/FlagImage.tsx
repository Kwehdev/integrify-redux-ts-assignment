import React from 'react';

import styles from './FlagImage.module.css';

type FlagImageProps = {
	src: string;
	alt: string;
};

export default function FlagImage({ src, alt }: FlagImageProps) {
	return <img className={styles.Image} src={src} alt={alt} />;
}
