import React, {useState} from "react";
import { Layout, Menu, Dropdown, Avatar } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined, ArrowLeftOutlined, CloseOutlined, MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { Input } from "../dataEntry/Input/Input";

const AntHeader = Layout.Header;

export interface HeaderProps {
  hasBackButton?: boolean;
};

const menuDropdown = (
  <Menu>
    <Menu.Item>
    <Link to={"/login"} key={"/login"}>My profile</Link>
    </Menu.Item>
    <Menu.Item>
    <Link to={"/login"} key={"/login"}>Settings</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
    <Link to={"/login"} key={"/login"}>Logout</Link>
    </Menu.Item>
  </Menu>
);

export const Header: React.FC<HeaderProps> = ({ hasBackButton = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  return (
    <div className="headerContainer">
      <AntHeader className="header">
        {!!hasBackButton && (
          <Link className="nav" to={"/login"}>
            <ArrowLeftOutlined className="arrow" />
          </Link>
        )}
        <div className="logo">
        </div>
        <div className="menu menu--desktop">
          <Input type="text" className="search" placeholder="search" name="search" onChange={(e) => console.log(e)} prefix={<SearchOutlined />} />
          <Dropdown
            overlay={menuDropdown}
            placement="bottomCenter"
            trigger={["click"]}
            overlayStyle={{ width: "120px" }}>
            <div className="item avatar">
              <Avatar size="large" icon={<UserOutlined />} />
            </div>
          </Dropdown>
        </div>
        <div className="menu menu--mobile">
          <div className="item" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </div>
        </div>
      </AntHeader>
    </div>
  );
};

