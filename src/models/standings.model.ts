export interface TableStandings {
	position: number;
	team: {
		id: number;
		name: string;
		shortName: string;
		tla: string;
		crest: string;
	};
	playedGames: number;
	form: string;
	won: number;
	draw: number;
	lost: number;
	points: number;
	goalsFor: number;
	goalsAgainst: number;
	goalDifference: number;
}

export interface Standings {
	stage: string;
	type: string;
	group: string;
	table: TableStandings[];
}
