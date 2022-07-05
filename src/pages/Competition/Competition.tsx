import { PageHeader, Spin, Row, Col, Result, Tabs, List } from "antd";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { CompetitionModel } from "../../models/competition.model";
import {
	CompetitionStanndingsResponse,
	TopScorersResponse,
} from "../../models/responses.model";
import { FootballDataService } from "../../services/FootballData";
import { SpinContainer } from "../Team/TeamStyle";
import {
	ContainerGols,
	ContainerTable,
	TitleSection,
} from "./CompetitionStyle";
import { CompetitionMatchesDay } from "./components/CompetitionMatchesDay";
import { StandingsTable } from "./components/StandingsTable";

const { TabPane } = Tabs;

export function Competition() {
	let navigate = useNavigate();
	let { id } = useParams();

	const { data, isFetching, error } = useQuery(
		"competition",
		async () => {
			const competition = (
				await FootballDataService(`competitions/${id}`)
			).data as CompetitionModel;

			const competitionStanndings = (
				(await FootballDataService(`competitions/${id}/standings`))
					.data as CompetitionStanndingsResponse
			).standings;

			const topScorers = (
				(await FootballDataService(`competitions/${id}/scorers`))
					.data as TopScorersResponse
			).scorers;

			return { competition, competitionStanndings, topScorers };
		},
		{
			// refetchInterval: 1000 * 15,
			refetchOnWindowFocus: false,
		}
	);

	function handleClickBack() {
		navigate(-1);
		// navigate("/", { replace: true });
	}

	if (isFetching) {
		return (
			<SpinContainer>
				<Spin size="large" />
			</SpinContainer>
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
		<section>
			{!isFetching && data?.competition && (
				<div>
					<PageHeader
						className="site-page-header"
						onBack={handleClickBack}
						title={data.competition?.name}
						avatar={{
							src: data.competition?.emblemUrl,
							shape: "square",
						}}
					/>
					<Row gutter={[32, 32]}>
						<Col className="gutter-row" lg={16} sm={16} span={16}>
							<TitleSection>Standings</TitleSection>
							{data.competitionStanndings &&
								data.competitionStanndings.map(
									(item, index) => {
										return (
											<ContainerTable key={index}>
												<h3>
													{item.group
														? item.group
																.replaceAll(
																	"_",
																	" "
																)
																.toLowerCase()
														: item.stage
																.replaceAll(
																	"_",
																	" "
																)
																.toLowerCase()}
												</h3>
												<StandingsTable
													table={item.table}
												></StandingsTable>
											</ContainerTable>
										);
									}
								)}
						</Col>
						<Col
							className="gutter-row"
							xs={24}
							sm={8}
							lg={8}
							span={8}
						>
							<Tabs type="card">
								<TabPane tab="Matches" key="1">
									{/* <TitleSection>Matches</TitleSection> */}
									<CompetitionMatchesDay
										competitionId={data.competition.id}
										currentMatchday={
											data.competition.currentSeason
												.currentMatchday
										}
									/>
								</TabPane>
								<TabPane tab="Top Scorers" key="2">
									<List
										dataSource={data?.topScorers}
										renderItem={(item) => (
											<List.Item key={item.player.id}>
												<List.Item.Meta
													title={
														<a href="https://ant.design">
															{item.player.name}
														</a>
													}
													description={`${item.team.name} (${item.player.position})`}
												/>
												<ContainerGols>
													{item.numberOfGoals}
												</ContainerGols>
											</List.Item>
										)}
									/>
								</TabPane>
							</Tabs>
						</Col>
					</Row>
				</div>
			)}
		</section>
	);
}
