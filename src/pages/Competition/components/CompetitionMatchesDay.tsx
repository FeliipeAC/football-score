import { useEffect } from "react";
import { userCompetitionMatches } from "../../../hooks/useCompetitionMatches";
import { Season } from "../../../models/competition.model";
import { List } from "antd";
import { CardMatchDay } from "./CardMatchday/CardMatchday";

type CompetitionMatchesDayProps = {
	competitionId: number;
	currentMatchday: number;
};

export function CompetitionMatchesDay({
	competitionId,
	currentMatchday,
}: CompetitionMatchesDayProps) {
	const {
		competitionsMatches,
		errorCompetitionsMatches,
		isFetchingCompetitionsMatches,
	} = userCompetitionMatches({ id: competitionId, currentMatchday });
	// useEffect(() => {}, [competitionId]);
	return (
		<>
			{competitionsMatches && (
				<List
					grid={{
						gutter: 8,
						column: 1,
					}}
					dataSource={competitionsMatches.matches}
					renderItem={(item) => (
						<List.Item>
							<CardMatchDay matchday={item}></CardMatchDay>
						</List.Item>
					)}
				/>
			)}
		</>
	);
}
