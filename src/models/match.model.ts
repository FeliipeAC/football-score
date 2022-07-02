export interface Match {
	awayTeam: {
		id: number;
		name: string;
	};
	competition: Competition;
	group: any;
	homeTeam: {
		id: number;
		name: string;
	};
	id: number;
	lastUpdated: string;
	matchday: any;
	odds: any;
	referees: any[];
	score: Score;
	season: Season;
	stage: string;
	status: string;
	utcDate: string;
}

interface Competition {
	area: {
		name: string;
		code: string;
		ensingUrl?: string;
	};
	id: number;
	name: string;
}

interface Score {
	duration: string;
	extraTime: {
		awayTeam: number;
		homeTeam: number;
	};
	fullTime: {
		awayTeam: number;
		homeTeam: number;
	};
	halfTime: {
		awayTeam: number;
		homeTeam: number;
	};
	penalties: {
		awayTeam: number;
		homeTeam: number;
	};
	winner: string;
}

interface Season {
	currentMatchday: number;
	endDate: string;
	id: number;
	startDate: string;
	winner: any;
}

export enum StatusMatch {
	"SCHEDULED" = "SCHEDULED",
	"LIVE" = "LIVE",
	"IN PLAY" = "IN_PLAY",
	"PAUSED" = "PAUSED",
	"FINISHED" = "FINISHED",
	"POSTPONED" = "POSTPONED",
	"SUSPENDED" = "SUSPENDED",
	"CANCELLED" = "CANCELLED",
}
