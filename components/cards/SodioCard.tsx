import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SodioInfo from '../info/SodioInfo';

type Props = {
  getInf: any;
};

const SodioCard = ({getInf}: Props) => {
  let sodioFechas: any = {};

  getInf.map(
    (item: {
      fullDate: string | number;
      cantidadSodio: any;
      alimento: string;
    }) => {
      if (sodioFechas[item.fullDate]) {
        sodioFechas[item.fullDate] += parseInt(item.cantidadSodio);
      } else {
        sodioFechas[item.fullDate] = parseInt(item.cantidadSodio);
      }
    },
  );

  let arrSodioFechas: any = Object.keys(sodioFechas);
  
  return (
    <View>
      {arrSodioFechas.map((item: string, i: any) => {
        return (
          <View style={styles.bar} key={i}>
            <SodioInfo
              fullDate={item}
              sodioFechas={sodioFechas}
              getInf={getInf}
              navigation={undefined}
              navigate={undefined}></SodioInfo>
          </View>
        );
      })}
    </View>
  );
};

export default SodioCard;

const styles = StyleSheet.create({
  bar: {
    width: 250,
    margin: 10,
  },
});
