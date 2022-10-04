import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { OnboardingProvider } from './context/onboardingProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <OnboardingProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </OnboardingProvider>
);

reportWebVitals();
