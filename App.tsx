import { AppProvider } from '@/context/AppContext';
import { RouterProvider, useRouter } from '@/router/Router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import IPODetailPage from '@/pages/IPODetailPage';
import ComparePage from '@/pages/ComparePage';
import CalendarPage from '@/pages/CalendarPage';
import LearnPage from '@/pages/LearnPage';
import AboutPage from '@/pages/AboutPage';

function Routes() {
  const { path } = useRouter();

  let page: React.ReactNode;
  if (path === '/' || path === '') {
    page = <HomePage />;
  } else if (path.startsWith('/ipo/')) {
    const id = path.split('/')[2];
    page = <IPODetailPage id={id} />;
  } else if (path === '/compare') {
    page = <ComparePage />;
  } else if (path === '/calendar') {
    page = <CalendarPage />;
  } else if (path === '/learn') {
    page = <LearnPage />;
  } else if (path === '/about') {
    page = <AboutPage />;
  } else {
    page = <HomePage />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{page}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <RouterProvider>
        <Routes />
      </RouterProvider>
    </AppProvider>
  );
}

export default App;
