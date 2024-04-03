# Full-Stack ML Health Monitoring App

This is a full-stack web application built for health monitoring, leveraging machine learning for analysis, React.js for the frontend, Flask for the backend, and MongoDB for data storage. The application includes features such as user analytics and a querying chatbot.

## Technologies Used

- React.js
- Flask
- MongoDB
- Langchain

## Installation

1. Clone the repository:

git clone <repository-url>

2. Navigate to the project directory:

cd <project-directory>

3. Install dependencies:

# Install backend dependencies
pip install -r requirements.txt

# Install frontend dependencies
cd client
npm install

4. Set up MongoDB:
   - Install MongoDB on your system if not already installed.
   - Start the MongoDB service.

5. Configuration:
   - Rename .env.example to .env and fill in the required configurations such as MongoDB URI, secret key, etc.

6. Run the Application:
   - Start the backend server:
     python app.py
   - Start the frontend:
     cd client
     npm start

## Usage

1. User Registration/Login: Users can register and log in to the application to access personalized health monitoring features.

2. Health Monitoring: Users can input their health data which is stored in the MongoDB database. Machine learning algorithms analyze this data to provide insights and trends in health.

3. User Analytics: The application provides user analytics based on the data collected, allowing users to visualize their health trends over time.

4. Querying Chatbot: Users can interact with a chatbot to query about their health data, receive recommendations, and ask general health-related questions.

## Folder Structure

- client: Contains the React.js frontend code.
- server: Contains the Flask backend code.
- models: Contains machine learning models for health analysis.


## Contributing

Contributions are welcome. Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
