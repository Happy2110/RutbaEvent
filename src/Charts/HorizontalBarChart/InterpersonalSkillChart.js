import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  indexAxis: 'y', // Horizontal bar chart
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
   
  },
};

const labels = ['Communication', 'Customer service', 'Creativity & Innovation', 'Presentation Skills', 'Problem solving'];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Reviews',
      data: [450, 440, 470, 400, 500], // Sample data for Dataset 1
      borderColor: 'rgb(255, 0, 0,0.8)',
      backgroundColor: 'rgba(255, 0, 0, 0.5)',
    },
   
  ],
};

const InterpersonalSkillChart = () => {
  return <Bar data={data} options={options} />;
};

export default InterpersonalSkillChart;
