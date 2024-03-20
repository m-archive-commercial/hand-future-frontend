/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SessionProvider } from "next-auth/react";

import { ThemeProvider } from "next-themes";

import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import { trpc } from "~/lib/trpc";
import { USE_PERSISTOR } from "../config/system";

import { store } from "../store/states/store";

import "../styles/globals.css";

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        {USE_PERSISTOR ? (
          <PersistGate persistor={persistStore(store)} loading={null}>
            <ThemeProvider defaultTheme={"dark"} attribute={"class"}>
              <Component {...pageProps} />
            </ThemeProvider>
          </PersistGate>
        ) : (
          <Component {...pageProps} />
        )}

        <ToastContainer
          autoClose={3000}
          position={toast.POSITION.BOTTOM_RIGHT}
        />
      </SessionProvider>
    </Provider>
  );
};

export default trpc.withTRPC(MyApp);
