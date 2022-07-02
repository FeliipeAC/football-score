import { HeaderContainer, Title, List, NavbarLink } from "./HeaderStyle";
import { Menu } from "antd";
import {
	MailOutlined,
	AppstoreOutlined,
	SettingOutlined,
} from "@ant-design/icons";

export function Header() {
	return (
		<HeaderContainer>
			<Title to="/">Football Score</Title>
		</HeaderContainer>
	);
}
