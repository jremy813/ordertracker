import React, { Component } from "react";
import "./tracker.scss";
import Admin from "../admin";

class Tracker extends Component {
  constructor() {
    super();
    this.state = {
      active: "",
      completed: "",
    };
  }

  componentDidMount() {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          active: data[0].active,
          completed: data[0].completed,
        });

        console.log(data);
        console.log(this.state.active);
      });
  }

  render() {
    console.log(this.state.completed);
    return (
      <div className="tracker">
        <button onClick={}>Refresh</button>
        <ul className="progress-tracker progress-tracker--text progress-tracker--text-top">
          <li className={this.state.active}>
            <div className="progress-text">
              <h4 className="progress-title">Step 1</h4>
              Brainstorming
            </div>
            <div className="progress-marker"></div>
          </li>

          <li className={this.state.active}>
            <div className="progress-text">
              <h4 className="progress-title">Step 2</h4>
              Design Review
            </div>
            <div className="progress-marker"></div>
          </li>

          <li className={this.state.active} aria-current="step">
            <div className="progress-text">
              <h4 className="progress-title">Step 3</h4>
              Design Revisions
            </div>
            <div className="progress-marker"></div>
          </li>

          <li className={this.state.active}>
            <div className="progress-text">
              <h4 className="progress-title">Step 4</h4>
              Development
            </div>
            <div className="progress-marker"></div>
          </li>

          <li className={this.state.active}>
            <div className="progress-text">
              <h4 className="progress-title">Step 5</h4>
              Review & Handoff
            </div>
            <div className="progress-marker"></div>
          </li>
        </ul>
        <Admin />
      </div>
    );
  }
}

export default Tracker;
