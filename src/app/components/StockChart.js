import React from "react";
import PropTypes from 'prop-types';

import { SectionHeader } from "./SectionHeader";

export class StockChart extends React.Component {
  getChartData(data, key) {
    return data.map((record) => record[key]);
  }
  
  updateStockChart() {
    const xAxis = this.props.xAxis;
    const yAxis = this.props.yAxis;
    const data = this.props.data;
    const labels = this.getChartData(data, xAxis);
    const points = this.getChartData(data, yAxis);
    const ctx = document.getElementById("stockChart").getContext('2d');
    const myChart = new Chart(ctx, {
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
    this.updateStockChart();
  }

  componentDidUpdate() {
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
  data: PropTypes.array.isRequired,
};