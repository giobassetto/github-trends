import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Routes from './Routes';

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      ...FontAwesome5.font,
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default function App({ skipLoadingScreen }) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
      authorization: 'your_git_hub_authorization'
    }
  });

  if (!isLoadingComplete && !skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  }
    return (
        <ApolloProvider client={client}>
          {Platform.OS === 'ios' ? <StatusBar barStyle="default" /> : <StatusBar barStyle="dark-content" />}
          <Routes />
        </ApolloProvider>
    );

}
