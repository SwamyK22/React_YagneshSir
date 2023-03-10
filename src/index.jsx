// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { createRoot } from 'react-dom/client';
import App from './app';
import Test from './Test';

const container = document.getElementById('root');

const root = createRoot(container);
root.render(
  <>
    <App title="Virat" desc="Criketor" />
    <App title="VP" />
    <Test count={10} />
  </>,
);
