import React, { useState, useEffect } from 'react';

const ChatPage = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Replace with your actual backend API endpoint URL
  const API_URL = 'https://your-backend-api.com/chat'; // Or use a process.env variable

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://192.168.141.106:5000/chat?query=${query}`, { // Embed query in URL
        method: 'GET', // GET request for simplicity, adjust if needed
        headers: { 'Content-Type': 'application/json' }, // Optional, depending on your backend
      });

      if (!response.ok) {
        throw new Error('Failed to submit query');
      }

      const responseData = await response.json();
      setResponse(responseData.message || responseData); // Handle potential missing 'message' property
    } catch (error) {
      console.error('Error submitting query:', error);
      setError(error.message); // Display user-friendly error message
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-page" style={{paddingLeft:"20px",paddingRight:"20px"}}>
      <h2>Chat with AI</h2>
      <form onSubmit={handleSubmit} style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <label htmlFor="query">Enter your query:</label>
        <textarea
          id="query"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          style={{width:"700px",borderRadius:"20px",paddingLeft:"20px",paddingTop:"10px"}}
        />
        <button type="submit" disabled={isLoading} style={{width:"150px"}}>
          {isLoading ? 'Sending...' : 'Send Prompt'}
        </button>
      </form>
      {error && <div className="error">{error}</div>}
      {response && (
        <div className="response">
          <p style={{color:"grey",fontWeight:"bolder",fontSize:"20px"}}>AI Response:</p>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default ChatPage;
