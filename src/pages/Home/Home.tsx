import { CardMatch } from "../../components/CardMatch/CardMatch";
import { Col, Result, Row } from "antd";
import { CardMatchShimmer } from "../../components/CardMatchShimmer/CardMatchShimmer";
import { useMemo, useState } from "react";
import { groupBy, mapValues } from "lodash";
import { Match } from "../../models/match.model";
import { CompetitionSection, CompetitionLink } from "./HomeStyle";
import { useQuery } from "react-query";
import moment from "moment";
import { FootballDataService } from "../../services/FootballData";
import { MatchesResponse } from "../../models/responses.model";

type DataMatches = {
	[key: number]: {
		name: string;
		matches: Match[];
	};
};

export function Home() {
	const { data, isFetching, error } = useQuery(
		"matchesHome",
		async () => {
			const dateFrom = moment().format("YYYY-MM-DD");
			const dateTo = moment().add(1, "days").format("YYYY-MM-DD");
			const queryParams = `?dateFrom=${dateFrom}&dateTo=${dateTo}`;
			const response = await FootballDataService(`matches${queryParams}`);

			return response.data as MatchesResponse;
		},
		{
			// refetchInterval: 1000 * 15,
			refetchOnWindowFocus: false,
		}
	);
	const [dataByCompetition, setDataByCompetition] = useState<DataMatches>({});

	useMemo(() => {
		const dataGroup = groupBy(data?.matches, (el) => el.competition.id);

		const dataGroupAux = mapValues(dataGroup, (values) => ({
			name: values[0].competition.name,
			matches: values,
		}));

		setDataByCompetition(dataGroupAux);
	}, [data]);

	if (isFetching) {
		return (
			<Row gutter={[16, 16]}>
				{[1, 2, 3, 4].map((index) => {
					return (
						<Col
							className="gutter-row"
							xs={24}
							sm={12}
							lg={8}
							key={index}
						>
							<CardMatchShimmer />
						</Col>
					);
				})}
			</Row>
		);
	}

	if (error) {
		<Result
			status="500"
			title="OPS"
			subTitle="Sorry, something went wrong."
		/>;
	}

	return (
		<div>
			{!isFetching && data?.matches && (
				<>
					{Object.entries(dataByCompetition).map((value, index) => {
						return (
							<CompetitionSection key={`competition-${index}`}>
								<CompetitionLink
									to={`/competitions/${value[0]}`}
								>
									{value[1].name}
								</CompetitionLink>
								<Row gutter={[16, 16]}>
									{value[1].matches.map((match: any) => {
										return (
											<Col
												className="gutter-row"
												xs={24}
												sm={12}
												lg={8}
												key={match.id}
											>
												<CardMatch
													match={match}
												></CardMatch>
											</Col>
										);
									})}
								</Row>
							</CompetitionSection>
						);
					})}
				</>
			)}

			{/* {!isFetching && data?.matches && (
				<Row gutter={[16, 16]}>
					{data?.matches?.map((match: any) => {
						return (
							<Col
								className="gutter-row"
								xs={24}
								sm={12}
								lg={8}
								key={match.id}
							>
								<CardMatch match={match}></CardMatch>
							</Col>
						);
					})}
				</Row>
			)} */}
		</div>
	);
}
