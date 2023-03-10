import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import LineChart from './LineChart';
import { GroupedBar } from './Bar';
import ResponsiveDrawer from './ResponsiveDrawer';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const barChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const barChartData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [50, 30],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [20, 10],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};




export default function Dashboard() {
  return  <>
  <div className='chartlist'>
    <div className='chart'>
      <Bar options={barChartOptions} data={barChartData} />
      <LineChart />
    </div>
    <div className='chart'>
      <GroupedBar />
    </div>
  </div>
  </>
}


