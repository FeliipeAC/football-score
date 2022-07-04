import { Match, StatusMatch } from "../../models/match.model";
import {
	CardMatchContainer,
	Score,
	TeamName,
	TeamContainer,
	Date,
	Competition,
	TeamShield,
	Live,
	InfoMatchContainer,
} from "./CardMatchStyle";

import moment from "moment";

import ShiledIconPlaceholder from "../../assets/images/shield_icon.png";
import { Divider } from "antd";

type Props = {
	match: Match;
	displayCompetitionName?: boolean;
};

export function CardMatch({ match, displayCompetitionName }: Props) {
	return (
		<CardMatchContainer>
			<InfoMatchContainer>
				<div>
					{displayCompetitionName && (
						<>
							<Competition
								to={`/competitions/${match.competition.id}`}
							>
								{match.competition.name}
							</Competition>
							<br />
						</>
					)}
					<Date>
						{match.stage.replaceAll("_", " ")}{" "}
						{(match.stage === "REGULAR_SEASON" ||
							match.stage === "GROUP_STAGE") &&
							`(round ${match.season.currentMatchday})`}
						<Divider type="vertical" />
						{moment(match.utcDate).format("DD/MM/YYYY HH:mm")}
					</Date>
				</div>
				{match.status === StatusMatch.LIVE ||
					(match.status === StatusMatch["IN PLAY"] && (
						<Live>Live</Live>
					))}
			</InfoMatchContainer>

			<TeamContainer>
				<div>
					<TeamShield
						src={
							`https://crests.football-data.org/${match.homeTeam.id}.png` ||
							`https://crests.football-data.org/${match.homeTeam.id}.svg`
						}
						onError={({ currentTarget }) => {
							currentTarget.onerror = null;
							currentTarget.src = ShiledIconPlaceholder;
						}}
						alt={match.homeTeam.name}
					></TeamShield>
					<TeamName to={"/teams/" + match.homeTeam.id}>
						{match.homeTeam.name}
					</TeamName>
				</div>
				{(match.status === StatusMatch.FINISHED ||
					match.status === StatusMatch["IN PLAY"] ||
					match.status === StatusMatch.LIVE) && (
					<Score>{match.score.fullTime.homeTeam}</Score>
				)}
			</TeamContainer>
			<TeamContainer>
				<div>
					<TeamShield
						src={`https://crests.football-data.org/${match.awayTeam.id}.png`}
						onError={({ currentTarget }) => {
							currentTarget.onerror = null;
							currentTarget.src = ShiledIconPlaceholder;
						}}
						alt={match.awayTeam.name}
					></TeamShield>
					<TeamName to={"/teams/" + match.awayTeam.id}>
						{match.awayTeam.name}
					</TeamName>
				</div>
				{(match.status === StatusMatch.FINISHED ||
					match.status === StatusMatch["IN PLAY"] ||
					match.status === StatusMatch.LIVE) && (
					<Score>{match.score.fullTime.awayTeam}</Score>
				)}
			</TeamContainer>
		</CardMatchContainer>
	);
}
