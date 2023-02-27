import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import "@/styles/index.scss";
import store from '@/store';
import { Provider } from 'react-redux';

export const App = ({ Component, pageProps }: AppProps) => (
    <Provider store={store}>
        <Component {...pageProps} />            
    </Provider>
);

export default App;
