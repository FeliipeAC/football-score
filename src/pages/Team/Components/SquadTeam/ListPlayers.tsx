import { List } from "antd";
import moment from "moment";
import { PlayerSquad } from "../../../../models/team.model";

type ListPlayersProps = {
	list: PlayerSquad[];
};

export function ListPlayers({ list }: ListPlayersProps) {
	return (
		<List
			itemLayout="horizontal"
			dataSource={list}
			grid={{
				gutter: 16,
				column: 3,
				xs: 1,
				sm: 2,
				md: 2,
				lg: 3,
				xl: 4,
			}}
			renderItem={(item) => (
				<List.Item>
					<List.Item.Meta
						title={<a href="https://ant.design">{item.name}</a>}
						description={`${item.nationality} | ${moment(
							item.dateOfBirth
						).format("DD/MM/YYYY")}`}
					/>
				</List.Item>
			)}
		></List>
	);
}
