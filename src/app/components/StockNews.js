import React from "react";
import PropTypes from 'prop-types';

import { SectionHeader } from "./SectionHeader";
import { NewsSimpleView } from "./NewsSimpleView";
import { NewsComplexView } from "./NewsComplexView";

export class StockNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpleView: false,
    }
  }

  render() {
    const settingBtn = <button key="settings" className="btnSettings" />;
    const title = "News";
    const news = this.state.simpleView ? <NewsSimpleView data={this.props.data} /> : <NewsComplexView data={this.props.data} />;
    return (
      <div>
        <SectionHeader title={title} buttons={[settingBtn]} />
        <div className="sectionBody">
          {news}
        </div>
      </div>
    );
  }
}

StockNews.propTypes = {
};