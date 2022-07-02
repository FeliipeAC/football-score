export interface Season {
	currentMatchday: number;
	endDate: string;
	id: number;
	startDate: string;
	winner: string;
}

export interface CompetitionModel {
	area: {
		id: number;
		nome: string;
	};
	code: string;
	currentSeason: Season;
	emblemUrl: string;
	id: number;
	lastUpdated: string;
	name: string;
	plan: string;
	seasons: Season[];
}
