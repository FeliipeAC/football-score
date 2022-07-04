import { Avatar, Popover } from "antd";
import moment from "moment";
import { Match } from "../../../../models/match.model";
import {
	CardMatchDayContainer,
	InfoMatch,
	Score,
	ScoreContainer,
	TeamLink,
} from "./CardMatchdayStyle";

export function CardMatchDay({ matchday }: { matchday: Match }) {
	return (
		<>
			<CardMatchDayContainer>
				<InfoMatch>
					{moment(matchday.utcDate).format("DD/MM/YYYY HH:mm")}
				</InfoMatch>
				<ScoreContainer>
					<Popover content={matchday.homeTeam.name} trigger="hover">
						<TeamLink to={`/teams/${matchday.homeTeam.id}`}>
							<Avatar
								shape="square"
								size="default"
								src={`https://crests.football-data.org/${matchday.homeTeam.id}.png`}
							/>
						</TeamLink>
					</Popover>
					<Score>
						{matchday.score.fullTime.homeTeam}
						<span>x</span>
						{matchday.score.fullTime.awayTeam}
					</Score>
					<Popover content={matchday.awayTeam.name} trigger="hover">
						<TeamLink to={`/teams/${matchday.awayTeam.id}`}>
							<Avatar
								shape="square"
								size="default"
								src={`https://crests.football-data.org/${matchday.awayTeam.id}.png`}
							/>
						</TeamLink>
					</Popover>
				</ScoreContainer>
			</CardMatchDayContainer>
		</>
	);
}
