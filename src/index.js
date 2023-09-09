import React from 'react';
import ReactDOM from 'react-dom';

import './styles/style.css';

import { CreateHeader } from './scripts/CreateHeader.js';
import { CreateMain } from './scripts/CreateMain.js';
import { CreateFooter } from './scripts/CreateFooter.js';

function CreateApp() {
  const app = (
    <div>
      <CreateHeader />
      <CreateMain />
      <CreateFooter />
    </div>
  );

  return app;
}

const root = document.getElementById('root');
ReactDOM.render(<CreateApp />, root);
