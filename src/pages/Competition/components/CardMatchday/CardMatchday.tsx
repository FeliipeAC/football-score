import { Avatar, Popover } from "antd";
import moment from "moment";
import { TeamShield } from "../../../../components/CardMatch/CardMatchStyle";
import { Match } from "../../../../models/match.model";
import {
	CardMatchDayContainer,
	InfoMatch,
	Score,
	ScoreContainer,
	TeamLink,
} from "./CardMatchdayStyle";

import ShiledIconPlaceholder from "../../../../assets/images/shield_icon.png";

export function CardMatchDay({ matchday }: { matchday: Match }) {
	const handleOnErrorAvatar = () => {
		console.log("error");
		const img = new Image();

		return true;
	};
	return (
		<>
			<CardMatchDayContainer>
				<InfoMatch>
					{moment(matchday.utcDate).format("DD/MM/YYYY HH:mm")}
				</InfoMatch>
				<ScoreContainer>
					<Popover content={matchday.homeTeam.name} trigger="hover">
						<TeamLink to={`/teams/${matchday.homeTeam.id}`}>
							<TeamShield
								src={`https://crests.football-data.org/${matchday.homeTeam.id}.png`}
								onError={({ currentTarget }) => {
									currentTarget.onerror = null;
									if (currentTarget.src.includes(".png")) {
										currentTarget.src = `https://crests.football-data.org/${matchday.homeTeam.id}.svg`;
									} else {
										currentTarget.src =
											ShiledIconPlaceholder;
									}
								}}
								alt={matchday.homeTeam.name}
							></TeamShield>
						</TeamLink>
					</Popover>
					<Score>
						{matchday.score.fullTime.homeTeam}
						<span>x</span>
						{matchday.score.fullTime.awayTeam}
					</Score>
					<Popover content={matchday.awayTeam.name} trigger="hover">
						<TeamLink to={`/teams/${matchday.awayTeam.id}`}>
							<TeamShield
								src={`https://crests.football-data.org/${matchday.awayTeam.id}.png`}
								onError={({ currentTarget }) => {
									currentTarget.onerror = null;
									if (currentTarget.src.includes(".png")) {
										currentTarget.src = `https://crests.football-data.org/${matchday.awayTeam.id}.svg`;
									} else {
										currentTarget.src =
											ShiledIconPlaceholder;
									}
								}}
								alt={matchday.awayTeam.name}
							></TeamShield>
						</TeamLink>
					</Popover>
				</ScoreContainer>
			</CardMatchDayContainer>
		</>
	);
}
