import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const pulse = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
`;

export const CardMatchContainer = styled.div`
	padding: 16px;
	border-radius: 6px;
	border: 1px solid #ececec;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	box-shadow: 0px 1px 0px rgba(17, 17, 26, 0.05),
		0px 0px 8px rgba(17, 17, 26, 0.1);
`;

export const TeamContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 6px 0;
	width: 100%;

	> div {
		display: flex;
		align-items: center;
	}
`;

export const TeamShield = styled.img`
	width: 32px;
	height: 32px;
	object-fit: cover;
	margin-right: 12px;
`;

export const TeamName = styled(Link)`
	font-size: 1rem;
	margin: 0;
	color: ${(props) => props.theme.richBlackFogra29};
`;

export const InfoMatchContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	margin-bottom: 12px;
`;

export const Competition = styled(Link)`
	font-size: 0.8rem;
	text-align: left;
	font-weight: 600;
	color: ${(props) => props.theme.shadowBlue};
	text-transform: uppercase;
	margin: 0;
	/* max-width: 136px; */
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	text-decoration: none;
    align-self: flex-start;

	&:hover {
		color: ${(props) => props.theme.shadowBlue};
	}
`;

export const Score = styled.span`
	font-size: 1.4rem;
	color: rgba(0, 0, 0, 0.7);
	font-weight: 500;
	margin: 0 16px;
	text-align: center;
`;

export const Date = styled.span`
	color: ${(props) => props.theme.shadowBlue};
	font-size: 0.7rem;
	text-transform: uppercase;
	font-weight: 400;
	text-align: center;
`;

export const LinkDetails = styled(Link)`
	text-decoration: none;
	font-size: 0.7rem;
	text-transform: uppercase;
	margin-top: 24px;
	text-align: center;
	color: #fff;
	font-weight: 500;
	background-color: ${(props) => props.theme.richBlackFogra29};
	padding: 6px 16px;
	border-radius: 4px;

	&:hover {
		color: #fff;
	}
`;

export const Live = styled.span`
	background-color: #ef233c;
	padding: 2px 8px;
	color: #fff;
	font-size: 0.5rem;
	border-radius: 4px;
	font-weight: 600;
	text-transform: uppercase;
	animation: ${pulse} 2s infinite;
	margin-left: auto;
`;
