import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import "@/styles/index.scss";
import store from '@/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

export default function App({ Component, pageProps }: AppProps) {
    let persistor = undefined;
    if (typeof window !== 'undefined') {
        persistor = persistStore(store);
    }
    
    return (
        <Provider store={store}>
            {persistor ? (
                <PersistGate persistor={persistor}>
                    <Component {...pageProps} />
                </PersistGate>
            ) : <Component {...pageProps} />}
        </Provider>
    );
}
