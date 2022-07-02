import { Match } from "./match.model";

export type MatchesResponse = {
	count: number;
	matches: Match[];
	filter: Object;
};

export type CompetitionStanndingsResponse = {
	filters: Object;
	area: {
		id: number;
		name: string;
		code: string;
		flag: string;
	};
	competition: {
		id: number;
		name: string;
		code: string;
		type: string;
		emblem: string;
	};
	season: {
		id: number;
		startDate: string;
		endDate: string;
		currentMatchday: number;
		winner: string;
		stages: string[];
	};
	standings: Standings[];
};
