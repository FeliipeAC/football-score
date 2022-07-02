import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 16px 24px;
	background-color: ${(props) => props.theme.richBlackFogra29};
	color: #fff;
	gap: 12px;

	@media screen and (max-width: 599px) {
		flex-direction: column;
	}
`;

export const Title = styled(Link)`
	text-decoration: none;
	font-size: 1.5em;
	text-transform: uppercase;
	color: #fff;
`;

export const List = styled.ul`
	list-style: none;
	margin: 0;
`;

export const NavbarLink = styled(Link)`
	text-decoration: none;
	font-size: 1rem;
	color: #002126;
	margin: 0 8px;
	color: #fff;
`;
