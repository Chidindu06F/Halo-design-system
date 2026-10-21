import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/geist/400.css';
import '@fontsource/geist/600.css';
import '@fontsource/geist/700.css';
import '@fontsource/geist-mono/400.css';
import '@halo-ds/tokens/css';
import '@halo-ds/react/styles.css';
import './site.css';
import { ToastProvider } from '@halo-ds/react';
import { Layout } from './Layout';
import { Components } from './pages/Components';
import { Examples } from './pages/Examples';
import { Home } from './pages/Home';
import { Installation } from './pages/Installation';
import { Router, useRoute } from './router';

function Pages() {
  const { path } = useRoute();
  if (path.startsWith('/components')) return <Components />;
  if (path.startsWith('/examples')) return <Examples />;
  if (path.startsWith('/installation')) return <Installation />;
  return <Home />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <ToastProvider>
        <Layout>
          <Pages />
        </Layout>
      </ToastProvider>
    </Router>
  </StrictMode>,
);
