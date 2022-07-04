import { Match } from "./match.model";
import { Scorers } from "./scorers.model";
import { Standings } from "./standings.model";
import { CompetitionMatch } from "./team.model";

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

interface Season {
	currentMatchday: number;
	endDate: string;
	id: number;
	startDate: string;
	winner: string;
}

export type TopScorersResponse = {
	competition: CompetitionMatch;
	count: number;
	filters: Object;
	scorers: Scorers[];
	season: Season;
};
