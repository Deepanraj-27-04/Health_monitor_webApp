// import { getIndexAxis } from 'chart.js/dist/core/core.config';
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const BarChart = () => {
  const [loggedInEmail, setLoggedInEmail] = useState(null);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const retrievedEmail = localStorage.getItem('loggedInEmail');
    console.log(retrievedEmail);
    setLoggedInEmail(retrievedEmail);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const fetchedEmail = loggedInEmail;
        const response = await fetch(
          `http://192.168.141.106:5000/getHealth?email=${fetchedEmail}`
        );
        const responseData = await response.json();

        const data = responseData; // Assuming data is an array of JSON objects
        console.log(data);
        // Extract relevant data from each object (replace with your property names)
        const labels = [1,2,3,4,5,6,7,8,9,10]
        const dataValues = [99,120,120,139,150,148,156,135,110,130] // Replace with desired property

        const chartDataset = {
          label: 'My Data',
          data: dataValues,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        };

        setChartData({ labels, datasets: [chartDataset] });
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [loggedInEmail]);

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="chart-container" style={{width:"20rem",height:"20rem"}}>
      <h2>Respitory Rate</h2>
      <Bar data={chartData} options={{ maintainAspectRatio: false }} />
    </div>
  );
};

export default BarChart;
