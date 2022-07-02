import { Link } from "react-router-dom";
import styled from "styled-components";

export const CompetitionSection = styled.section`
	margin-bottom: 24px;
`;

export const CompetitionLink = styled(Link)`
	display: inline-block;
	font-size: 1.2rem;
	margin: 0 0 16px 0;
	color: ${(props) => props.theme.richBlackFogra29};
`;
