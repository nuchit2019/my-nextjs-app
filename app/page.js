"use client";

import { useState } from 'react';
import { 
  logStartProcess, 
  logWarningProcess, 
  logSuccessProcess, 
  logExceptionProcess 
} from '../lib/AppInsightLogging';

export default function Home() {
  const [isProcessing, setIsProcessing] = useState(false); // For button state management

  const requestBody = {
    acd_id: "1242100069",
    cdd_type: "I",
    cdd_no: 0,
    user_code: "99999-1",
    document_type: 0,
    crw_id: 0,
  };

  const handleButtonClick = async () => {
    try {
      setIsProcessing(true); // Disable the button while processing

      //=====================================================//
      // 1. START_PROCESS
      //=====================================================//
      console.log('Home', 'Starting...', requestBody);
      logStartProcess('Home', 'Starting...', requestBody);

      
      // ..............................
      //*** Validation Logic
      // ..............................
      //=====================================================//
      // 2. WARNING_PROCESS
      //=====================================================//
      if (requestBody.cdd_type === 'I') {// Simulate validation logic
        console.log('Home', 'Warning: Sample validation issue.', requestBody);
        logWarningProcess('Home', 'Warning: Sample validation issue.', requestBody);
      }

      // ..............................
      //*** Business logic
      // ..............................
      //=====================================================//
      // 3. SUCCESS_PROCESS
      //=====================================================//
      // Simulate business logic
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Mock async operation
      console.log('Home', 'Succeeded...');
      logSuccessProcess('Home', 'Succeeded...');

    } catch (error) {
      //=====================================================//       
      // 4. EXCEPTION_PROCESS
      //=====================================================//
      console.log('Home', error.message);
      logExceptionProcess('Home', error.message);
      
    } finally {
      setIsProcessing(false); // Re-enable the button
    }
  };

  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <button  className="button-primary"   
        onClick={handleButtonClick} 
        disabled={isProcessing} // Disable the button while processing
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: isProcessing ? "not-allowed" : "pointer",
        }}
      >
        {isProcessing ? "Processing..." : "Start Logging"}
      </button>
    </div>
  );
}
