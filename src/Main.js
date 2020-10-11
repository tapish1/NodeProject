import React, { useState, useEffect } from "react";
import Switch from "react-switch";
import "./Main.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import profile from "./ImageAssets/person.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pic from "./ImageAssets/Group-7.png";

class GetRequest extends React.Component {
  state = {
    buisness: [],
  };

  dateConverter(date) {
    const year = date.substring(0, 4);
    const month_num = date.substring(5, 7);
    let month = "";
    if (month_num == 1) {
      month = "January ";
    } else if (month_num == 2) {
      month = "Febuary ";
    } else if (month_num == 3) {
      month = "March ";
    } else if (month_num == 4) {
      month = "April ";
    } else if (month_num == 5) {
      month = "May ";
    } else if (month_num == 6) {
      month = "June ";
    } else if (month_num == 7) {
      month = "July ";
    } else if (month_num == 8) {
      month = "August ";
    } else if (month_num == 9) {
      month = "September ";
    } else if (month_num == 10) {
      month = "October ";
    } else if (month_num == 11) {
      month = "November ";
    } else {
      month = "December ";
    }
    let day = date.substring(8, 10);
    if (day[0] == 0) {
      day = day[1];
    }
    const date_1 = month.concat(day.toString());
    const fdate = date_1.concat(",".concat(year.toString()));
    return <span>{fdate}</span>;
  }

  capitalize(s) {
    let word = s.charAt(0).toUpperCase() + s.slice(1);
    let res = "";
    if (word == "Claimed") {
      return <span style={{ color: "#51ad50" }}>{word}</span>;
    } else if (word == "Shipped") {
      return <span style={{ color: "#c956e3" }}>{word}</span>;
    } else if (word == "Submitted") {
      return <span style={{ color: "#f7c64a" }}>{word}</span>;
    } else if (word == "Activate") {
      return <span style={{ color: "blue" }}>{word}</span>;
    } else {
      return <span style={{ color: "#a35a3c" }}>{word}</span>;
    }
    return <span>{res}</span>;
  }

  componentDidMount() {
    // Simple GET request using fetch
    fetch("/prod?businessId=us-east-1:a7584b1c-f10f-4747-9573-dee791a48297")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ buisness: data });
      });
  }

  createTable = () => {
    let table = [];
  };

  render() {
    return (
      <div style={{ paddingTop: "2%" }}>
        <div style={{ textAlign: "right", paddingBottom: "1%" }}>
          <img src={pic}></img>
        </div>
        <hr
          style={{
            width: "100%",
            height: "6px",
            border: "0",
            margin: "0",
            boxShadow: "inset 0 12px 12px -12px rgba(0, 0, 0, 0.5)",
          }}
        ></hr>

        <div className="container">
          <h1>Influencers</h1>
          <br></br>

          <Row>
            {this.state.buisness.map((elem, index) => {
              return (
                <Col md={6}>
                  <div style={{ marginBottom: "10px" }}>
                    <Card
                      style={{
                        width: "100%",
                        margin: "auto",
                        borderWidth: "1px",
                        marginBottom: "0px",
                        paddingBottom: "0px",
                        boxShadow: "  0 6px 6px -6px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      <Container>
                        <Row style={{ height: "100px" }}>
                          <Col md={2}>
                            <CardImg left height="70%" src={profile} />
                          </Col>
                          <Col md={10}>
                            <CardTitle>
                              @{elem.instagramId}{" "}
                              <span style={{ marginLeft: "65%" }}></span>
                              {this.capitalize(elem.status)}
                            </CardTitle>
                            <Row>
                              <Col style={{ fontSize: "14px" }}>
                                {" "}
                                {this.dateConverter(elem.date)} - Lorem ipsum
                                dolor sit amet, consecteur adispling etit.
                                Susspendie velit massa.
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Container>
                    </Card>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  }
}

export default GetRequest;
