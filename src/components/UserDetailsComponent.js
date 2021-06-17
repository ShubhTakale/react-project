import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, CardText, CardTitle } from "reactstrap";

function UserDetailsComponent() {
  const { full_name, email, id, username } = JSON.parse(
    sessionStorage.getItem("user_data")
  );
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Name: {full_name}</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>Id: {id}</CardText>
          <CardText>Email: {email}</CardText>
          <CardText>Username: {username}</CardText>
        </CardBody>
      </Card>
      <Link to = '/dashboard'>Back</Link>
    </div>
  );
}

export default UserDetailsComponent;
