import { Descriptions } from "antd";
import { Team } from "../../../../models/team.model";

type InfoTeamProps = {
	team: Team;
};

export function InfoTeam({ team }: InfoTeamProps) {
	return (
		<Descriptions
			layout="vertical"
			labelStyle={{
				fontWeight: "500",
			}}
		>
			<Descriptions.Item label="Name">
				{team?.name} ({team?.shortName})
			</Descriptions.Item>
			<Descriptions.Item label="Founded">
				{team?.founded}
			</Descriptions.Item>
			<Descriptions.Item label="Venue">{team?.venue}</Descriptions.Item>
			<Descriptions.Item label="Colors">
				{team?.clubColors}
			</Descriptions.Item>
			<Descriptions.Item label="Address">
				{team?.address}
			</Descriptions.Item>
		</Descriptions>
	);
}
