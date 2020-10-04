import React, { Component } from "react";
import VideoCard from "./../VideoCard/VideoCard";
import "./MainBody.css";
import { server_URI } from "../../../../urlconfig.js";

export class MainBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
  }

  componentDidMount() {
    fetch(server_URI + "/videos")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ videos: data.data.items });
      });
  }
  render() {
    const videoList = this.state.videos.map(function (item) {
      return <VideoCard key={item.id}  video={item}></VideoCard>;
    });
    return <div className="main_body_container">{videoList}</div>;
  }
}

export default MainBody;
