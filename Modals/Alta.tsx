import {useState, useRef} from 'react';
import {StyleSheet} from 'react-native';
import { Modal, ModalBody, ModalFooter, Text, Center, Button, ButtonText, ModalBackdrop, ModalContent, ModalHeader, Heading, ModalCloseButton, Icon, CloseIcon } from '@gluestack-ui/themed';

type Props = {
  visible: boolean;
  setVisible: any;
};

const Alta = ({visible, setVisible}: Props): JSX.Element => {
    const ref = useRef(null)
  return (
    <Center h={300}>
      <Modal
        isOpen={visible}
        onClose={() => {
          setVisible(false)
        }}
        finalFocusRef={ref}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">Engage with Modals</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text>
              Elevate user interactions with our versatile modals. Seamlessly
              integrate notifications, forms, and media displays. Make an impact
              effortlessly.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setVisible(false)
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              size="sm"
              action="positive"
              borderWidth="$0"
              onPress={() => {
                setVisible(false)
              }}
            >
              <ButtonText>Explore</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default Alta;
