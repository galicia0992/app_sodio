import {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {Card, Text, Button, Avatar} from 'react-native-paper';
import {Platform} from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
import Alta from '../Modals/Alta';
import Fab from '../components/buttons/Fab';
import getInfo from '../api/getInfo';
import SodioCard from '../components/cards/SodioCard';


type Props = {};

const Home = (props: Props) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [getInf, setGetInf] = useState<any[]>([]);

  useEffect(() => {
    getInfo(setGetInf);
  }, []);

  return (
    <>
      <SafeAreaView style={styles.bg}>
        <Fab setVisible={setVisible}></Fab>
        <View style={styles.cardView}>
          <Card>
            <Card.Content>
              <Text variant="titleLarge">Presiona 'Nuevo' para iniciar </Text>
              <Text variant="bodyMedium">Rellena los campos necesarios</Text>
            </Card.Content>
          </Card>
          <ScrollView>
            <SodioCard getInf={getInf}></SodioCard>
          </ScrollView>
        </View>
        <Alta visible={visible} setVisible={setVisible} />
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#FFFF',
    height: '100%',
  },
  cardView: {
    padding: 12,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
