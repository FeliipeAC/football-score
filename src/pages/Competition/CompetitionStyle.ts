import styled from "styled-components";

export const ContainerTable = styled.section`
	& + & {
		margin-top: 42px;
	}

	h3 {
		font-size: 1.1rem;
		margin: 0 0 12px 0;
		text-transform: capitalize;
	}
`;

export const TitleSection = styled.h2`
	font-size: 1.3rem;
	margin: 24px 0;
`;
