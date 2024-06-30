import {View} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import {Text} from 'react-native-paper';
import {ProgressBar as Progressbar} from '@ui-kitten/components';
import { useEffect } from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type Props = {
  fullDate: any;
  sodioFechas: any;
  getInf: any;
  navigation: any;
  navigate:any
};

const SodioInfo = ({ fullDate, sodioFechas, getInf}: Props) => {
  const [cantidadDeSodio, setCantidadDeSodio] = useState<any>("")
  const [sodio, setSodio] = useState("")
  const [infoObjSodio, setInfoObjSodio] = useState<any>([])
  const navigation = useNavigation()
  let arr: any =[]
  
  
  
  useEffect(() => {
    Object.keys(sodioFechas).map(item =>{
      if (item == fullDate) {
        setCantidadDeSodio(sodioFechas[item])
      }
    })
  }, [sodioFechas])
  
  useEffect(() => {
    setSodio(fullDate)
    getInf.map((item: { fullDate: string; }) =>{
      if(item.fullDate == sodio){
        arr.push(item)
      }
    })
    setInfoObjSodio(arr)
    
  }, [sodio, getInf])
  
  
  const sodioInfoNavigation = (): void =>{
    
    navigation.navigate('SodioInfo', {infoObjSodio})
  }
  
  return (
    <Pressable
    onPressIn={()=> (sodioInfoNavigation())}
    >
      <View>
      <Text>{fullDate}</Text>
      <View>
        <Progressbar
          progress={(cantidadDeSodio / 15000) * 10}
          size="large"
        />
      </View>
      <Text
      >Total de hoy: {cantidadDeSodio}</Text>
    </View>
    </Pressable>
  );
};
export default SodioInfo;
