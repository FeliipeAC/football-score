import { useEffect, useState } from "react";
import { FootballDataService } from "../services/FootballData";
import { Match } from "../models/match.model";
import { CompetitionMatch } from "../models/team.model";

export interface CompetitionMatchesResponse {
	competition: CompetitionMatch;
	count: number;
	filters: Object;
	matches: Match[];
}

export function userCompetitionMatches<T = unknown>({
	id,
	currentMatchday,
}: {
	id: number;
	currentMatchday: number;
}) {
	const [competitionsMatches, setCompetitionsMatches] =
		useState<CompetitionMatchesResponse | null>(null);
	const [isFetchingCompetitionsMatches, setFetchingCompetitionsMatches] =
		useState(true);
	const [errorCompetitionsMatches, setErrorCompetitionsMatches] =
		useState<Error | null>(null);

	useEffect(() => {
		FootballDataService(
			`competitions/${id}/matches?matchday=${currentMatchday}`
		)
			.then((response) => {
				setCompetitionsMatches(response.data);
			})
			.catch((err) => {
				console.error(err);
				setErrorCompetitionsMatches(err);
			})
			.finally(() => {
				setFetchingCompetitionsMatches(false);
			});
	}, []);

	return {
		competitionsMatches,
		isFetchingCompetitionsMatches,
		errorCompetitionsMatches,
	};
}
