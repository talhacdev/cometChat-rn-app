import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainScreens from './screens';
import {styles} from './styles';
import {FirebaseProvider} from './context/FirebaseContext'; // 👈 New Context Provider
import {CometChatAuthContextProvider} from './context/CometChatAuthContext'; // 👈 New Context Provider

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* 👇 */}
      <FirebaseProvider>
        <CometChatAuthContextProvider>
          <NavigationContainer>
            <MainScreens />
          </NavigationContainer>
        </CometChatAuthContextProvider>
      </FirebaseProvider>
    </SafeAreaView>
  );
};

export default App;
