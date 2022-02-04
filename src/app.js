import React from 'react';
import { render } from 'react-dom';
import '../styles/globals.css';

import {ExampleComponent} from './example_component';

const AppComponent = () => <div className={'flex justify-center align-center h-[100vh] bg-sky-600 text-white py-[24em]'}>
  <ExampleComponent />
</div>;

render(<AppComponent />, document.getElementById('app-root'));