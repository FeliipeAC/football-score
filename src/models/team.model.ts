export interface CompetitionMatch {
	area: {
		id: number;
		name: string;
	};
	code: string;
	id: number;
	lastUpdated: string;
	name: string;
	plan: string;
}

export interface PlayerSquad {
	countryOfBirth: string;
	dateOfBirth: string;
	id: number;
	name: string;
	nationality: string;
	position: string;
	role: string;
	shirtNumber: number;
}

export interface TeamModel {
	activeCompetitions: CompetitionMatch[];
	address: string;
	area: {
		id: number;
		name: string;
	};
	clubColors: string;
	crestUrl: string;
	email: string;
	founded: number;
	id: number;
	lastUpdated: string;
	name: string;
	phone: string;
	shortName: string;
	squad: PlayerSquad[];
	tla: string;
	venue: string;
	website: string;
}
