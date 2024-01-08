import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  Fab as FAB,
  Box,
  FabIcon,
  FabLabel,
  AddIcon,
} from '@gluestack-ui/themed';

type Props = {
  setVisible: any;
};

const Fab = ({setVisible}: Props) => {
  return (
    <View style={styles.fabStyle}>
      <FAB
        size="md"
        placement="bottom right"
        isHovered={false}
        isDisabled={false}
        isPressed={false}
        onPress={() => setVisible(true)}>
        <FabIcon as={AddIcon} mr="$1" />
        <FabLabel>Quick start</FabLabel>
      </FAB>
    </View>
  );
};

export default Fab;
const styles = StyleSheet.create({
  fabStyle: {
    position: 'absolute',
    margin: 5,
    right: 0,
    bottom: '4%',
    zIndex:1
  },
});
