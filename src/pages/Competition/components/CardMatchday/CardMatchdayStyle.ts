import styled from "styled-components";

export const CardMatchDayContainer = styled.div`
	padding: 8px 16px 16px;
	border: 1px solid #ececec;
	border-radius: 8px;
	box-shadow: 0px 1px 0px rgba(17, 17, 26, 0.05),
		0px 0px 8px rgba(17, 17, 26, 0.1);

	P {
		margin: 0;
	}
`;

export const ScoreContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

export const Score = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.2rem;
	font-weight: 600;

	span {
		margin: 0 8px;
		font-size: 0.9rem;
		color: rgba(0, 0, 0, 0.5);
		font-weight: normal;
	}
`;

export const InfoMatch = styled.div`
	/* color: rgba(0, 0, 0, 0.7); */
	color: ${(props) => props.theme.shadowBlue};
	font-size: 0.8rem;
	text-align: center;
	margin-bottom: 4px;
	font-weight: 500;
`;
