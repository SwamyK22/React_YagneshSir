// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<h1>Hello World</h1>);
