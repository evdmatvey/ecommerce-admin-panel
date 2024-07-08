import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Header } from '@/widgets/Header';
import { selectFetchUser, useUserStore } from '@/entities/user';
import { Layout } from '@/shared/ui/Layout';
import Router from './router/Router';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

const App = () => {
  const fetchUser = useUserStore(selectFetchUser);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Layout headerSlot={<Header />}>
          <Router />
        </Layout>
        <Toaster position="top-right" toastOptions={{ duration: 1500 }} />
      </QueryClientProvider>
    </>
  );
};

export default App;
