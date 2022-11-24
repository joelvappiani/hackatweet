import '../styles/globals.css'
import Head from 'next/head';

import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import users from '../reducers/users'
import tweets from '../reducers/tweets'

import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({ users, tweets })

const persistConfig = { key: 'hackatweet', storage }

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware({ serializableCheck: false })
})

const persistor = persistStore(store)



function MyApp({ Component, pageProps }) {
  return (
    
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Head>
          <title>Hackatweet</title>
        </Head>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
