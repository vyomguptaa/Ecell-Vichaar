import TimeAgo from "timeago-react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import {Card, Row, Col} from 'react-bootstrap';
import "./style.css";
// import Votingpost from "./Votingpost";


function PostContent(props) {


  //  const posts = props.comments.filter(
  //    (post) => props.parentId === post.parentId
  //  );
  //  const rootPostInfo = useContext(RootPostContext);
  return (
    <div className="">
      {/* <h1 className="text-xl font-bold">{props.title}</h1>
      <h5 className="text-reddit_text-darker text-sm mb-2">
        {" "}
        Posted by {props.author} | <TimeAgo datetime={props.postedAt} />
      </h5>
      <div className="text-sm leading-6">
        <ReactMarkdown plugins={[gfm]} children={props.body} />
      </div> */}
      <Row>
        <Col className="sm-2">
      <Card style={{ width: '18rem' }} >
  <Card.Body> 
    <Card.Title>{props.title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{" "}
        Posted by {props.author} | <TimeAgo datetime={props.postedAt} /></Card.Subtitle>
    <Card.Text>
     <ReactMarkdown plugins={[gfm]} children={props.body} />
    </Card.Text>
    
  </Card.Body>
</Card>
</Col>
</Row>
      
{/*         
      <div>
        <Votingpost commentId={post._id} />
      </div> */}

    </div>
    
  );
}

export default PostContent;
