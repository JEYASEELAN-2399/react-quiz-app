import React from 'react';
import ReactDOM from 'react-dom/client';
import Quiz from './components/Quiz';
import "./index.css"
import { Quizprovider } from './contexts/quiz';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Quizprovider>
    <Quiz />
    </Quizprovider>
  </React.StrictMode>
);


