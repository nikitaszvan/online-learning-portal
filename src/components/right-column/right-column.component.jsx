import { useState } from 'react';
import {
    RightColumnContainer
} from './right-column.styles';
import Chart from 'react-apexcharts';

const RightColumn = () => {

    const series = [70];
    const options = {
    colors: ['var(--color-on-primary)'],
      chart: {
        type: 'radialBar',
        strokeWidth: '9%',
        offsetY: -20,
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#e7e7e7",
            strokeWidth: '90%',
            margin: 5, // margin is in pixels
            dropShadow: {
              enabled: false
            },
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: -2,
              fontSize: '22px'
            }
          }
        }
      },
      stroke: {
        lineCap: 'round',
      },
      fill: {
        type: 'solid',
      }
    };

    return (
        <RightColumnContainer>
            <Chart options={options} series={series} type="radialBar" />
        </RightColumnContainer>
    )
}

export default RightColumn;