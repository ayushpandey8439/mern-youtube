import React, { Component } from "react";
import "./VideoCard.css";
import { convert_time, convert_upload_time } from "../../helpers/timeFormatter";
import { count_views } from "../../helpers/viewCountFormatter";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
export class VideoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (!this.props.video) {
      return <div className="video_card_body">Waiting for data</div>;
    } else {
      return (
        <div className="video_card_body">
          <div className="video_thumbnail_container">
            <img
              className="video_thumbnail"
              src={this.props.video.snippet.thumbnails.standard.url}
            ></img>
            <div className="video_duration">
              {convert_time(this.props.video.contentDetails.duration)}
            </div>
          </div>

          <div> {this.props.video.snippet.localized.title}</div>
          <div className="channel_title">
            {this.props.video.snippet.channelTitle}
          </div>
          <div>
            <div className="statistics">
              {count_views(this.props.video.statistics.viewCount)}&nbsp;
              &middot;
              &nbsp;
              {convert_upload_time(this.props.video.snippet.publishedAt)}
            </div>
          </div>
        </div>
      );
    }
  }
}
export default VideoCard;
