import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Header } from '@/widgets/Header';
import { selectFetchUser, useUserStore } from '@/entities/user';
import { Layout } from '@/shared/ui/Layout';
import Router from './router/Router';

const App = () => {
  const fetchUser = useUserStore(selectFetchUser);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <>
      <Layout headerSlot={<Header />}>
        <Router />
      </Layout>
      <Toaster position="top-right" toastOptions={{ duration: 1500 }} />
    </>
  );
};

export default App;
