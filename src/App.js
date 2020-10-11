import React, { Component } from "react";
import "./App.scss";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import { FaSearch } from "react-icons/fa";
import nodeLogo from "./ImageAssets/logo.png";
import SmashLogo from "./ImageAssets/companyLogo.png";
import myIcon from "./ImageAssets/Group.png";
import usersIcon from "./ImageAssets/Group-2.png";
import canvasIcon from "./ImageAssets/Group-3.png";
import starIcon from "./ImageAssets/Group-4.png";
import reviewIcon from "./ImageAssets/Group-5.png";
import profileIcon from "./ImageAssets/Group-6.png";
import Button from "react-bootstrap/Button";
import GetRequest from "./Main";
import { Grid, Cell } from "react-mdl";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentHover: false,
    };
  }

  render() {
    return (
      <Grid className="projects-grid">
        <div className="vl" style={{ height: "100%" }}>
          <Cell col={6}>
            <ProSidebar breakPoint="md">
              <SidebarHeader>
                <div
                  style={{
                    padding: "10px",
                    paddingBottom: "5px",
                    paddingLeft: "15px",
                    letterSpacing: "1px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  <img width={100} src={nodeLogo} alt="node logo" />
                </div>
                <hr
                  style={{
                    borderBottom: "0.1em solid #d8d8d8",
                    borderTop: "0px",
                  }}
                ></hr>

                <div
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%",
                    whiteSpace: "nowrap",
                  }}
                >
                  <img
                    width={130}
                    height={100}
                    src={SmashLogo}
                    alt="Smash logo"
                  />
                </div>
              </SidebarHeader>

              <SidebarContent>
                <Menu iconShape="circle">
                  <MenuItem style={{ paddingBottom: "10px" }}>
                    <Button
                      variant="light"
                      style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "75%",
                        textAlign: "center",
                        borderWidth: "1px",
                        borderRadius: "20px",
                        backgroundColor: "white",
                        padding: "10px",
                        fontSize: "14px",
                      }}
                    >
                      Create Node
                    </Button>
                  </MenuItem>
                  <MenuItem className="menuI">
                    <img className="Icon" src={myIcon}></img>
                    <span>Dashboard</span>
                  </MenuItem>
                  <MenuItem className="menuI" icon={<FaSearch />}>
                    {" "}
                    <span>My Nodes</span>{" "}
                  </MenuItem>
                  <MenuItem className="menuI">
                    <img className="Icon" src={usersIcon}></img>
                    <span>Influencers </span>
                  </MenuItem>
                  <MenuItem className="menuI">
                    <img className="Icon" src={canvasIcon}></img>
                    <span>Content </span>
                  </MenuItem>
                  <MenuItem className="menuI">
                    <img className="Icon" src={starIcon}></img>
                    <span>Favourite </span>
                  </MenuItem>
                  <MenuItem className="menuI">
                    <img className="Icon" src={reviewIcon}></img>
                    <span>Reviews </span>
                  </MenuItem>
                  <MenuItem className="menuI">
                    <img className="Icon" src={profileIcon}></img>
                    <span>Profile </span>
                  </MenuItem>
                </Menu>
              </SidebarContent>
            </ProSidebar>
          </Cell>
        </div>

        <GetRequest></GetRequest>
      </Grid>
    );
  }
}

export default App;
