import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
} from "reactstrap";

const PostCard = ({ post, getDetails }) => {
  const { id, title, body } = post;
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>{body}</CardText>
        </CardBody>
        {getDetails && (
          <Button
            onClick={() => {
              getDetails(id);
            }}
          >
            Details
          </Button>
        )}
      </Card>
    </div>
  );
};

export default PostCard;
