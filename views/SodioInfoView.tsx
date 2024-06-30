import {View, Text, ViewBase} from 'react-native';
import React, { useEffect, useState } from 'react';

type Props = {
  route: any;
};

export default function SodioInfoView({route}: Props) {
  
  const {infoObjSodio} = route.params;
  
  return (
    <View>
      {
        infoObjSodio.map((item:{alimento: string, cantidadSodio: string, fullDate: string, id: number}) =>(
          <View key={item.id}>
            <Text>{item.alimento}</Text>
          </View>
        ))
      }
    </View>
  );
}
