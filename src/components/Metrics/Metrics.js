import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./Metrics.module.css";

Chart.defaults.global.elements.line.tension = 0;

export default class Metrics extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.buildChart();
  }

  buildChart = () => {
    let data;
    const myChartRef = this.chartRef.current.getContext("2d");
    const { type, display } = this.props;
    const labels = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const formattedDisplay = (display === 'Distance') ? `${display} (mi)` : `${display} (ft)`;

    if (type === 'bar') {
      data = [31,0,12,8,24,0,0];
    } else {
      data = [1213, 0, 945, 800, 0, 1756, 344];
    }

    new Chart(myChartRef, {
      type: type,
      data: {
        //Bring in data
        labels: labels,
        datasets: [
          {
            label: formattedDisplay,
            data: data,
            fill: false,
            backgroundColor: 'rgba(66,183,214,.5)',
            borderColor: '#42B7D6',
            pointRadius: 5,
            borderWidth: 1,
            pointHoverRadius: 10,
            pointBackgroundColor: '#FDFFFB',
            pointBorderWidth: 2,
          }
        ]
      },
      options: {
        responsive: true,
        layout: {
          padding: {
            left: 50,
            right: 50,
            top: 0,
            bottom: 50
          },
        },
        legend: {
          display: true,
          labels: {
            fontColor: '#FDFFFB',
          },
        },
        scales: {
          yAxes: [{
              ticks: {
                  fontColor: "#FDFFFB",
                  fontSize: 14,
                  beginAtZero: true,
                  fontStyle: 'regular',
              }
          }],
          xAxes: [{
            ticks: {
              fontColor: "#FDFFFB",
              fontSize: 14,
              beginAtZero: true,
              fontStyle: 'regular',
            }
          }]
        }
      },
    });
  }

  render() {
    return (
      <div className={classes.graphContainer}>
        <canvas
          id="myChart"
          ref={this.chartRef}
        />
      </div>
    )
  }
}
