import { AppHeader } from "./AppHeader"
import Head from "next/head";
import { useEffect } from "react";
import { useIsLoggedInQuery } from "@/store/services/user";

export const AppBody = ({page = '', children}) => {
    const { data, isLoading } = useIsLoggedInQuery()

    useEffect(() => {
        console.log('query data: ', data);
    }, [isLoading]);

    return (
        <div className="app">
            <Head>
                <title>{page}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="App">
                <AppHeader />

                <div>
                    {children}
                </div>
            </main>
        </div>
    );
}