import { useEffect, useState } from "react";
import { Match } from "../models/match.model";
import { TeamModel } from "../models/team.model";
import { FootballDataService } from "../services/FootballData";

type TeamProps = {
	id: string;
};

export function useTeam<T = unknown>({ id }: TeamProps) {
	const [team, setTeam] = useState<TeamModel | null>(null);
	const [isFetchingTeam, setFetchingTeam] = useState(true);
	const [errorTeam, setErrorTeam] = useState<Error | null>(null);

	useEffect(() => {
		FootballDataService(`teams/${id}`)
			.then((response) => {
				setTeam(response.data);
			})
			.catch((err) => {
				console.error(err);
				setErrorTeam(err);
			})
			.finally(() => {
				setFetchingTeam(false);
			});
	}, []);

	return { team, isFetchingTeam, errorTeam };
}
