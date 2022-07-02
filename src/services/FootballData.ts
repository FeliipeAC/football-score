import axios from "axios";

const baseUrl = "https://api.football-data.org/v2/";

export function FootballDataService(url: string) {
	return axios.get(`${baseUrl}${url}`, {
		headers: {
			"X-Auth-Token": "161c3b97116a44ca921c8f6aeb7f125f",
		},
	});
}
