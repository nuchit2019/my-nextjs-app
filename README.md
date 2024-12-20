---

# Application Insights Integration with Next.js

This project demonstrates how to integrate **Azure Application Insights** with a Next.js application for logging telemetry data such as start, warning, success, and exception processes.

## Features
- Logs telemetry data using `@microsoft/applicationinsights-web`.
- Captures start, warning, success, and exception events.
- Provides a user-friendly button interface to simulate the logging workflow.
- Tracks telemetry with a sample `requestBody` object.

## Prerequisites
Ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn

## Installation Steps

### Step 1: Clone the Repository
```bash
git clone https://github.com/nuchit2019/my-nextjs-app.git
cd my-nextjs-app
```

### Step 2: Install Dependencies

- @azure/monitor-opentelemetry-exporter
- @microsoft/applicationinsights-react-js
- @microsoft/applicationinsights-web

Run the following command to install the required packages:
```bash
npm install @azure/monitor-opentelemetry-exporter @microsoft/applicationinsights-react-js @microsoft/applicationinsights-web
```

### Step 3: Update Instrumentation Key
Replace the `instrumentationKey` in `AppInsightConfig.js` with your own Azure Application Insights key:
```javascript
const appInsights = new ApplicationInsights({
  config: { instrumentationKey: 'YOUR_INSTRUMENTATION_KEY' }
});
```

### Step 4: Start the Application
Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## File Structure
```
.
├── lib/
│   ├── AppInsightConfig.js       # Application Insights configuration
│   ├── AppInsightLogging.js      # Logging utility functions
├── app/
│   ├── page.js                   # Main page with logging workflow
├── README.md                     # Project documentation
├── package.json                  # Project dependencies and scripts
```

## Logging Details
### Logging Methods

lib/AppInsightConfig.js
- **`logStartProcess(process, message, context)`**
  Logs the start of a process with `SeverityLevel.Information`.

- **`logWarningProcess(process, message, context)`**
  Logs a warning with `SeverityLevel.Warning`.

- **`logSuccessProcess(process, message, context)`**
  Logs a success message with `SeverityLevel.Information`.

- **`logExceptionProcess(error, context)`**
  Logs an exception with `SeverityLevel.Error`.

  "use client";

```javascript
import { appInsights } from './AppInsightConfig';
import { SeverityLevel } from '@microsoft/applicationinsights-web';

const ApplicationName = "NextJsApp";//----------------------------------------- App Name

export function logStartProcess(process, message, context = null) {
  appInsights.trackTrace({ message: `${ApplicationName} Start Process: ${process} : ${message}`, properties: context, severityLevel: SeverityLevel.Information });
}

export function logWarningProcess(process, message, context = null) {
  appInsights.trackTrace({ message: `${ApplicationName} Warning Process: ${process} : ${message}`, properties: context, severityLevel: SeverityLevel.Warning });
}

export function logSuccessProcess(process, message, context = null) {
  appInsights.trackTrace({ message: `${ApplicationName} Success Process: ${process} : ${message}`, properties: context, severityLevel: SeverityLevel.Information });
} 

export function logExceptionProcess(error, context = null) {
  appInsights.trackException({ exception: new exception(error), severityLevel: 3,  properties: context });
} 
```

### Usage
The `handleButtonClick` function in the `Home` component demonstrates:

**Flow Code Logging Example...***
```
//=====================================================//
// 1. START_PROCESS
//=====================================================//

// ..............................
//*** Validation Logic
// ..............................
//=====================================================//
// 2. WARNING_PROCESS
//=====================================================//

// ..............................
//*** Business logic
// ..............................
//=====================================================//
// 3. SUCCESS_PROCESS
//=====================================================//

//=====================================================//
// 4. EXCEPTION_PROCESS
//=====================================================//
```
app/page.js

```javascript
...
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
...
  ```

---
## Viewing Data in Azure Application Insights
![image](https://github.com/user-attachments/assets/8545a84a-90d0-4595-9aea-891f6303afe0)


## Contributing

Feel free to fork the repository and create a pull request for any improvements or new features.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---
 
