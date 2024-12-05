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
├── pages/
│   ├── index.js                  # Main page with logging workflow
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

### Usage
The `handleButtonClick` function in the `Home` component demonstrates:
Flow Code Logging Example...
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

### Styling
The button is styled to indicate when processing is ongoing by disabling the click and changing the cursor.

---

## Contributing

Feel free to fork the repository and create a pull request for any improvements or new features.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

This `README.md` file should provide clear guidance to set up and use your Next.js project with Application Insights logging.
