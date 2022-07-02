import { PageHeader, Spin, Row, Col } from "antd";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { CompetitionModel } from "../../models/competition.model";
import { CompetitionStanndingsResponse } from "../../models/responses.model";
import { FootballDataService } from "../../services/FootballData";
import { SpinContainer } from "../Team/TeamStyle";
import { ContainerTable, TitleSection } from "./CompetitionStyle";
import { CompetitionMatchesDay } from "./components/CompetitionMatchesDay";
import { StandingsTable } from "./components/StandingsTable";

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

			return { competition, competitionStanndings };
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
					<Row gutter={32}>
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
							<TitleSection>Matches</TitleSection>
							<CompetitionMatchesDay
								competitionId={data.competition.id}
								currentMatchday={
									data.competition.currentSeason
										.currentMatchday
								}
							/>
						</Col>
					</Row>
				</div>
			)}
		</section>
	);
}
