//Import Libraries
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

//Create React Component
const App = function () {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Rose"
        timeAgo="Today at 6:00 PM"
        comment="It's a fantastic blog"
        dp={faker.image.avatar()}
      />
      <CommentDetail
        author="Saij"
        timeAgo="Today at 10:00 PM"
        comment="Oh! wow"
        dp={faker.image.avatar()}
      />
      <CommentDetail
        author="Toulik"
        timeAgo="Today at 7:00 PM"
        comment="loved it!"
        dp={faker.image.avatar()}
      />
      <CommentDetail
        author="Tulip"
        timeAgo="Today at 6:30 PM"
        comment="Upload some cool stuffs!"
        dp={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
