import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Chart } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
) // Import Line chart component

const LineChart_body = () => {
  const [loggedInEmail, setLoggedInEmail] = useState(null);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const retrievedEmail = localStorage.getItem('loggedInEmail');
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

        // if (!responseData || !Array.isArray(responseData)) {
        //   throw new Error('Unexpected data format: Expected an array of objects');
        // }

        // Assuming data is an array of JSON objects

        // Extract relevant data from each object (replace with your property names)
        const labels = [1,2,3,4,5,6,7,8,9,10]// Replace with label property
        const dataValues = [117.5, 73.4, 95.7, 138.5, 82.5, 77.5, 67.1, 148]// Replace with value property

        const chartDataset = {
          label: 'My Data',
          data: dataValues,
          backgroundColor: 'rgba(255, 99, 132, 0.2)', // Customize background color
          borderColor: 'rgba(255, 99, 132, 1)', // Customize border color
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
    <div className="chart-container" style={{ width: '400px', height: '300px' }}>
      <h2>Body Temprature</h2>
      <Line data={chartData} options={{ maintainAspectRatio: false }} />
    </div>
  );
};

export default LineChart_body;
