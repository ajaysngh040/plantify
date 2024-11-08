"use client";
import { useEffect, useState } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";
import { Provider } from "react-redux";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isPersistorReady, setIsPersistorReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsPersistorReady(true);
    }
  }, []);

  return (
    <Provider store={store}>
      {isPersistorReady ? (
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      ) : null}
    </Provider>
  );
}
