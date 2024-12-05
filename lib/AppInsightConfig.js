import { ApplicationInsights } from '@microsoft/applicationinsights-web'; 
  
// Configure Application Insights
const appInsights = new ApplicationInsights({
  config: { instrumentationKey: 'YOUR_INSTRUMENTATION_KEY'}
});

// Load Application Insights
appInsights.loadAppInsights();

// Export appInsights and the React Plugin
export { appInsights };
