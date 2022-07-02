import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { TableStandings } from "../../../models/standings.model";

type StandingsTabelProps = {
	table: TableStandings[];
};

const columns: ColumnsType<TableStandings> = [
	{
		title: "N°",
		dataIndex: "position",
		key: "position",
	},
	{
		title: "Team",
		dataIndex: "team",
		key: "team",
		render: (item) => item.name,
	},
	{
		title: "Points",
		dataIndex: "points",
		key: "points",
	},
	{
		title: "PL",
		dataIndex: "playedGames",
		key: "playedGames",
	},
	{
		title: "W",
		dataIndex: "won",
		key: "won",
	},
	{
		title: "D",
		dataIndex: "draw",
		key: "draw",
		responsive: ["sm"],
	},
	{
		title: "L",
		dataIndex: "lost",
		key: "lost",
		responsive: ["sm"],
	},
	{
		title: "GF",
		dataIndex: "goalsFor",
		key: "goalsFor",
		responsive: ["lg"],
	},
	{
		title: "GA",
		dataIndex: "goalsAgainst",
		key: "goalsAgainst",
		responsive: ["lg"],
	},
	{
		title: "GD",
		dataIndex: "goalDifference",
		key: "goalDifference",
		responsive: ["lg"],
	},
];
export function StandingsTable({ table }: StandingsTabelProps) {
	return (
		<>
			<Table
				columns={columns}
				dataSource={table}
				pagination={false}
				rowKey={(record) => record.team.id}
			/>
		</>
	);
}
