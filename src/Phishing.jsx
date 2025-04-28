import React, { useState } from 'react';

function PhishingAnalyzer() {
    const [message, setMessage] = useState('');
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false); // State to manage loading status

    // A simple phishing test based on common phishing words
    const phishingKeyWords = [
        'urgent', 'immediate action', 'verify your account', 'suspicious activity',
        'click here', 'update your information', 'password reset', 'account locked',
        'limited time offer', 'confirm your identity', 'prize winner', 'free gift',
        'risk-free', 'money-back guarantee', 'act now', 'exclusive deal'
    ]

    const handleInputChange = (e) => {
        setMessage(e.target.value);
      };

    
        let handleAnalyze = () => {
            setLoading(true); // Set loading to true when the button is clicked
            setResult(''); // Clear previous result
        
            setTimeout(() => {
              let isPhishing = false;
        
              // Check for phishing keywords
              phishingKeyWords.forEach(keyword => {
                if (message.toLowerCase().includes(keyword)) {
                  isPhishing = true;
                }
              });
        
              // Check for suspicious URLs
              if (message.toLowerCase().includes("http") || message.toLowerCase().includes("www")) {
                isPhishing = true;
              }
        
              if (isPhishing) {
                setResult('⚠️ This message is likely phishing.');
              } else {
                setResult('✅ This message seems safe.');
              }
        
              setLoading(false); // Set loading to false when analysis is done
            }, 2000); // Simulate a delay of 2 seconds for loading
          };
          
        
          return (
            <div className="container">
              <h1 className="title">Phishing Message Analyzer</h1>
              <div className="glass-container">
                <textarea
                  value={message}
                  onChange={handleInputChange}
                  rows="10"
                  cols="30"
                  placeholder="Paste the message here"
                  className="input-text"
                />
                <button onClick={handleAnalyze} className="analyze-button">
                  {loading ? 'Analyzing...' : 'Analyze'} {/* Change button text */}
                </button>
                {loading && <div className="loading-spinner"></div>} {/* Loading spinner */}
                <p className="result">
                  {result}
                </p>
              </div>
            </div>
    );
}

export default PhishingAnalyzer;