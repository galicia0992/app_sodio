import React from 'react';
import Home from './views/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {GluestackUIProvider, Text} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {PaperProvider} from 'react-native-paper';
import DateProvider from './context/DateContext';
import SodioInfoView from './views/SodioInfoView';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <DateProvider>
      <PaperProvider>
        <GluestackUIProvider config={config}>
          <ApplicationProvider {...eva} theme={eva.light}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="Home"
                  component={Home}
                  options={{headerTitle: '', headerShown: false}}
                />
                <Stack.Screen
                name="SodioInfo"
                component={SodioInfoView}
                ></Stack.Screen>
              </Stack.Navigator>
            </NavigationContainer>
          </ApplicationProvider>
        </GluestackUIProvider>
      </PaperProvider>
    </DateProvider>
  );
}

export default App;
