import React, { Component } from "react";
import "./Joke.css";

class Joke extends Component {
  static defaultProps = { vote, votes, text, id };

  constructor(props) {
    super(props);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  upVote() { this.props.vote(this.props.id, +1); }
  downVote() { this.props.vote(this.props.id, -1); }
  render() {
    return (
      <div className="Joke" >
        <div className="Joke-votearea">
          <button onClick={upVote}>
            <i className="fas fa-thumbs-up" />
          </button>

          <button onClick={downVote}>
            <i className="fas fa-thumbs-down" />
          </button>

          {votes}
        </div>

        <div className="Joke-text">{text}</div>
      </div>
    );
  }
}

export default Joke;
