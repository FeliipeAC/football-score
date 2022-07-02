import { Avatar, Popover } from "antd";
import moment from "moment";
import { Match } from "../../../../models/match.model";
import {
	CardMatchDayContainer,
	InfoMatch,
	Score,
	ScoreContainer,
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
						<Avatar
							shape="square"
							size="default"
							src={`https://crests.football-data.org/${matchday.homeTeam.id}.png`}
						/>
					</Popover>
					<Score>
						{matchday.score.fullTime.homeTeam}
						<span>x</span>
						{matchday.score.fullTime.awayTeam}
					</Score>
					<Popover content={matchday.awayTeam.name} trigger="hover">
						<Avatar
							shape="square"
							size="default"
							src={`https://crests.football-data.org/${matchday.awayTeam.id}.png`}
						/>
					</Popover>
				</ScoreContainer>
			</CardMatchDayContainer>
		</>
	);
}
