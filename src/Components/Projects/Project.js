import React, {Component} from "react";
import "./Project.css"
class Project extends Component {

  render() {
    return (
        <div className="project-container">
          <h2>
            <a href={this.props.url}>{this.props.title}</a>
          </h2>
          <p className="description">{this.props.description}</p>
          <a href={this.props.url} className="button explore">
            <div>
              <i className="fa fa-external-link"></i> Explore
            </div>
          </a>
          <a href={this.props.github_url} className="button github">
            <div>
              <i className="fa fa-github"></i> Github
            </div>
          </a>
        </div>
    )
  }
}
export default Project;