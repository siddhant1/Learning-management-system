import React, { Component } from "react";
import { Circle, PlusCircle } from "react-feather";
import "./sidebar.css";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="topic-name">
          Fundamentals of Financial Computing
        </div>
        <ul>
          <li>
            <div>
              <Circle />
              Lesson 1
            </div>
          </li>
          <li>
            <div>
              <Circle />
              Lesson 2
            </div>
          </li>
          <li>
            <div>
              <Circle />
              Lesson 3
            </div>
          </li>
        </ul>
        <div className="add-course">
          <PlusCircle />
        </div>
      </div>
    );
  }
}
