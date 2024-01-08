import {View, Text} from 'react-native';
import React from 'react';
import App from '../App';
import {PaperProvider} from 'react-native-paper';


type Props = {};

const Providers = (props: Props) => {
  return (
    <>
        <PaperProvider>
          <App />
        </PaperProvider>
    </>
  );
};

export default Providers;
