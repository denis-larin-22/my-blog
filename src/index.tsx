import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './Root';
import { NextUIProvider, Spinner } from "@nextui-org/react";
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './core/store';
import './18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <Suspense fallback={<Spinner size='lg' className='w-screen h-screen flex items-center justify-center' />}>
        <ReduxProvider store={store}>
          <Root />
        </ReduxProvider>
      </Suspense>
    </NextUIProvider>
  </React.StrictMode>
);
