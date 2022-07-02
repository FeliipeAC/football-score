import { useEffect, useState } from "react";
import { Match } from "../models/match.model";
import { FootballDataService } from "../services/FootballData";
import moment from "moment";
import { Competition } from "../models/competition.model";

export function useCompetitions<T = unknown>({ id }: { id: string }) {
	const [competitions, setCompetitions] = useState<Competition | null>(null);
	const [isFetchingCompetitions, setFetchingCompetitions] = useState(true);
	const [errorCompetitions, setErrorCompetitions] = useState<Error | null>(
		null
	);

	useEffect(() => {
		FootballDataService(`competitions/${id}`)
			.then((response) => {
				setCompetitions(response.data);
			})
			.catch((err) => {
				console.error(err);
				setErrorCompetitions(err);
			})
			.finally(() => {
				setFetchingCompetitions(false);
			});
	}, []);

	return { competitions, isFetchingCompetitions, errorCompetitions };
}
