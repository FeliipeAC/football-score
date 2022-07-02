import { Skeleton } from "antd";
import {
	CardMatchContainer,
	TeamContainer,
	InfoMatchContainer,
} from "../CardMatch/CardMatchStyle";
export function CardMatchShimmer() {
	return (
		<CardMatchContainer>
			<InfoMatchContainer>
				<Skeleton.Input active size="small" />
			</InfoMatchContainer>
			<TeamContainer>
				<div>
					<Skeleton.Avatar
						size="large"
						active
						style={{ marginRight: "12px" }}
					/>
					<Skeleton.Input active />
				</div>
			</TeamContainer>
			<TeamContainer>
				<div>
					<Skeleton.Avatar
						size="large"
						active
						style={{ marginRight: "12px" }}
					/>
					<Skeleton.Input active />
				</div>
			</TeamContainer>
		</CardMatchContainer>
	);
}
