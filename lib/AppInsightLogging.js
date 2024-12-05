"use client";

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
