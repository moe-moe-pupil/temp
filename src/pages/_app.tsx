import { ComponentType } from 'react';
import '../react-i18next/i18n';

const App = ({ Component, ...pageProps }: { Component: ComponentType }) => (
  <div className="main">
    <Component {...pageProps} />
  </div>
);

export default App;
