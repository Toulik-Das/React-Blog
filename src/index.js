//Import Libraries
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

//Create React Component
const App = function () {
  return (
    <div className="ui container comments">
      <ApprovalCard>
         <CommentDetail
            author="Rose"
            timeAgo="Today at 6:00 PM"
            comment="It's a fantastic blog"
            dp={faker.image.avatar()}
          />
      </ApprovalCard>

     <ApprovalCard>
        <CommentDetail
          author="Saij"
          timeAgo="Today at 10:00 PM"
          comment="Oh! wow"
          dp={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
           author="Toulik"
           timeAgo="Today at 7:00 PM"
           comment="loved it!"
           dp={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
         <CommentDetail
           author="Jeny"
           timeAgo="Today at 6:30 PM"
           comment="Upload some cool stuffs!"
           dp={faker.image.avatar()}
        />
      </ApprovalCard>

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
