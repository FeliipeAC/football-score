import { Divider } from "antd";
import { useEffect, useState } from "react";
import { PlayerSquad } from "../../../../models/team.model";
import {
	Container,
	PositionContainer,
	RoleTitle,
	PositionTitle,
} from "./SquadTeamStyle";
import { groupBy } from "lodash";
import { ListPlayers } from "./ListPlayers";

type SquadTeamProps = {
	squad: PlayerSquad[];
};

export function SquadTeam({ squad }: SquadTeamProps) {
	const [coach, setCoach] = useState<PlayerSquad[]>([]);
	const [players, setPlayers] = useState<{
		[id: string]: PlayerSquad[];
	}>({});

	useEffect(() => {
		const squadByGroup = groupBy(squad, "role");
		const playersByPosition = groupBy(squadByGroup["PLAYER"], "position");
		setPlayers(playersByPosition);
		setCoach(squadByGroup["COACH"]);
	}, [squad]);

	return (
		<Container>
			<>
				<RoleTitle>Players</RoleTitle>
				{Object.entries(players).map((value) => {
					return (
						<PositionContainer key={value[0]}>
							<PositionTitle>{value[0]}</PositionTitle>
							<ListPlayers list={value[1]} />
							<Divider />
						</PositionContainer>
					);
				})}
				<RoleTitle>Coach</RoleTitle>
				<ListPlayers list={coach} />
			</>
		</Container>
	);
}
