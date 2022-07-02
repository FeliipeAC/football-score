import { useParams } from "react-router-dom";
import { PageHeader, Spin, Divider, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { SpinContainer, TitleSection } from "./TeamStyle";
import { SquadTeam } from "./Components/SquadTeam/SquadTeam";
import { InfoTeam } from "./Components/InfoTeam/InfoTeam";
import { useQuery } from "react-query";
import moment from "moment";
import { FootballDataService } from "../../services/FootballData";
import { TeamModel } from "../../models/team.model";
import _ from "lodash";
import { Match } from "../../models/match.model";
import { CardMatch } from "../../components/CardMatch/CardMatch";
import { useEffect, useMemo, useState } from "react";
import { queryClient } from "../../services/queryClient";

export function Team() {
	let navigate = useNavigate();
	let { id } = useParams();

	const [competitionId, setCompetitionId] = useState(id);

	const { data, isFetching, error } = useQuery(
		"team",
		async () => {
			const dateFrom = moment().format("YYYY-MM-DD");
			const dateTo = moment().add(1, "week").format("YYYY-MM-DD");
			const queryParams = `?dateFrom=${dateFrom}&dateTo=${dateTo}`;

			const matchesTeam = (
				await FootballDataService(
					`teams/${competitionId}/matches${queryParams}`
				)
			).data.matches as Match[];

			const team = (await FootballDataService(`teams/${competitionId}`))
				.data as TeamModel;
			return { matchesTeam, team };
		},
		{
			// refetchInterval: 1000 * 15,
			refetchOnWindowFocus: false,
		}
	);

	function handleClickBack() {
		navigate("/", { replace: true });
	}

	if (isFetching) {
		return (
			<SpinContainer>
				<Spin size="large" />
			</SpinContainer>
		);
	}
	return (
		<>
			<section>
				{!isFetching && data?.team && (
					<div>
						<PageHeader
							className="site-page-header"
							onBack={handleClickBack}
							title={data.team?.tla}
							avatar={{
								src: data.team?.crestUrl,
								shape: "square",
							}}
						/>
						<TitleSection>About</TitleSection>
						<InfoTeam team={data.team}></InfoTeam>
						<Divider />
						<TitleSection>Matches</TitleSection>
						<Row gutter={[16, 16]}>
							{data.matchesTeam.map((match: any) => {
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
											displayCompetitionName
										></CardMatch>
									</Col>
								);
							})}
						</Row>
						<Divider />
						<InfoTeam team={data.team} />
						{data.team.squad && (
							<div>
								<TitleSection>Squad</TitleSection>
								<Divider />
								<SquadTeam squad={data.team.squad} />
							</div>
						)}
					</div>
				)}
			</section>
		</>
	);
}
