import {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Card, Text, Button, Avatar} from 'react-native-paper';
import {Fab, Box, FabIcon, FabLabel, AddIcon} from '@gluestack-ui/themed';
import Alta from '../Modals/Alta';

type Props = {};

const Home = (props: Props) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <View style={styles.bg}>
        
          <Fab
            size="md"
            placement="bottom right"
            isHovered={false}
            isDisabled={false}
            isPressed={false}
            onPress={()=>setVisible(true)}
            >
            <FabIcon as={AddIcon} mr="$1" />
            <FabLabel>Quick start</FabLabel>
          </Fab>
        
        <View style={styles.cardView}>
          <Card>
            <Card.Content>
              <Text variant="titleLarge">Presiona 'Nuevo' para iniciar </Text>
              <Text variant="bodyMedium">Rellena los campos necesarios</Text>
            </Card.Content>
          </Card>
        </View>
        <Alta visible={visible} setVisible={setVisible} />
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#FFFF',
    height: '100%',
    justifyContent: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: '7%',
  },
  cardView: {
    padding: 12,
    alignItems: 'center',
  },
});
