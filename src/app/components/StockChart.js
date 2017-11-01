import React from "react";
import PropTypes from 'prop-types';

import { SectionHeader } from "./SectionHeader";

export class StockChart extends React.Component {
  getChartData(data, key) {
    let chartData = data.map((record) => record[key]);
    return chartData;
  }
  updateStockChart() {
    let xAxis = this.props.xAxis;
    let yAxis = this.props.yAxis;
    let labels = this.getChartData(this.props.chart, xAxis);
    let points = this.getChartData(this.props.chart, yAxis);
    let ctx = document.getElementById("stockChart").getContext('2d');
    let myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [{
          label: "# of " + yAxis,
          data: points,
          backgroundColor: "rgba(255,205,210 ,1)",
          borderColor: "rgba(244,67,54 ,1)",
          borderWidth: 2,
          pointBackgroundColor: "#fff",
          pointBorderColor: "rgba(233,30,99 ,1)",
        }],
      },
    });
  }
  
  componentDidMount() {
    debugger;
    this.updateStockChart();
  }

  componentDidUpdate() {
    debugger;
    this.updateStockChart();
  }

  render() {
    return (
      <div>
        <SectionHeader title="Recent Stock Trend" collapsible={true} />
        <div className="sectionBody">
          <canvas id="stockChart" width="500" height="250"></canvas>
        </div>
      </div>
    )
  }
}

StockChart.propTypes = {
};