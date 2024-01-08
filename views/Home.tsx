import {useState} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {Card, Text, Button, Avatar} from 'react-native-paper';
import { Platform } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import Alta from '../Modals/Alta';
import Fab from '../components/buttons/Fab';

type Props = {};

const Home = (props: Props) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <SafeAreaView style={styles.bg}>
          <Fab
          setVisible={setVisible}
          >
          </Fab>
        <View style={styles.cardView}>
        <ScrollView>
          <Card>
            <Card.Content>
              <Text variant="titleLarge">Presiona 'Nuevo' para iniciar </Text>
              <Text variant="bodyMedium">Rellena los campos necesarios</Text>
            </Card.Content>
          </Card>      
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
    height:"100%",
    justifyContent:"center",
    alignItems:"center"
  },
});
