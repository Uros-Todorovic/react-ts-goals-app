import { type PropsWithChildren, type FC /* type ReactNode  */ } from 'react';

type HeaderProps = {
	image: {
		src: string;
		alt: string;
	};
};

type ImagePropsWithChildren = PropsWithChildren<HeaderProps>;

const Header: FC<ImagePropsWithChildren> = ({ image, children }) => {
	return (
		<header>
			<img {...image} />
			{children}
		</header>
	);
};

export default Header;
