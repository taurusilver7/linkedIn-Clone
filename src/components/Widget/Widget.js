import React from "react";
import "./Widget.css";

import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widget = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widget__article">
      <div className="widget__articleLeft">
          <FiberManualRecordIcon />
      </div>
      <div className="widget__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widget">
      <div className="widget__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle('Twitch is back', 'Top news - 900 readers')}
      {newsArticle('Bitcoin raks $20k', 'Crypto - 8k readers')}
      {newsArticle('Covid Update', 'Trending - 752 readers')}
    </div>
  );
};

export default Widget;
