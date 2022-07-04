interface PlayerScore {
	countryOfBirth: string;
	dateOfBirth: string;
	firstName: string;
	id: number;
	lastName: string;
	lastUpdated: string;
	name: string;
	nationality: string;
	position: string;
	shirtNumber: number;
}

export interface Scorers {
	numberOfGoals: number;
	player: PlayerScore;
	team: {
		id: string;
		name: string;
	};
}
