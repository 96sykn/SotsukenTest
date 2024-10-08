<template>
    <div class="dashboard">
      <h2>Test Results Dashboard</h2>
      <div class="result-summary">
        <p><strong>Test Date:</strong> 2024-10-07</p>
        <p><strong>Overall Score:</strong> 85/100</p>
      </div>
      <div class="result-details">
        <h3>Details</h3>
        <ul>
          <li><strong>Starting:</strong> Good</li>
          <li><strong>Stopping:</strong> Needs Improvement</li>
          <li><strong>Turning:</strong> Excellent</li>
          <li><strong>Hill Start:</strong> Satisfactory</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // ダッシュボードの試験データを仮で表示
        testResults: {
          date: '2024-10-07',
          score: 85,
          details: {
            starting: 'Good',
            stopping: 'Needs Improvement',
            turning: 'Excellent',
            hillStart: 'Satisfactory'
          }
        }
      };
    }
  };
  </script>
  
  <style scoped>
  .dashboard {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
  .result-summary, .result-details {
    margin-bottom: 20px;
  }
  .result-details ul {
    list-style-type: none;
    padding: 0;
  }
  .result-details li {
    margin-bottom: 10px;
  }
  </style>
  