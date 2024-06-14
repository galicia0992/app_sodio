import {useState, useRef, useEffect} from 'react';
import {StyleSheet, Platform, KeyboardAvoidingView} from 'react-native';
import post from '../api/post';
import {
  Modal,
  ModalBody,
  ModalFooter,
  Center,
  Button,
  ButtonText,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  Heading,
  ModalCloseButton,
  Icon,
  CloseIcon,
  InputField,
  Input,
  Badge,
  BadgeIcon,
  BadgeText,
  CheckIcon,
  AlertCircleIcon,
  CloseCircleIcon,
  AddIcon,
} from '@gluestack-ui/themed';
import {CheckBox} from '@ui-kitten/components';

type Props = {
  visible: boolean;
  setVisible: any;
};

const Alta = ({visible, setVisible}: Props): JSX.Element => {
  const [cantidadSodio, setCantidadSodio] = useState<string>('');
  const [alimento, setAlimento] = useState<string>('');
  const [icono, setIcono] = useState<any>('');
  const [colorBadge, setColorBadge] = useState<string>('info');
  const [advertencia, setAdvertencia] = useState<string>('Primer Conteo');

  useEffect(() => {
    if (parseInt(cantidadSodio) < 250) {
      setColorBadge('success');
      setIcono(CheckIcon);
      setAdvertencia('Bien');
    } else if (
      parseInt(cantidadSodio) >= 251 &&
      parseInt(cantidadSodio) <= 500
    ) {
      setColorBadge('warning');
      setIcono(AlertCircleIcon);
      setAdvertencia('Cuidado');
    } else if (parseInt(cantidadSodio) >= 501) {
      setColorBadge('error');
      setIcono(CloseCircleIcon);
      setAdvertencia('Es mucho');
    } else {
      setColorBadge('muted');
      setIcono(AddIcon);
      setAdvertencia('Primer Conteo');
    }
  }, [cantidadSodio]);

  const ref = useRef(null);
  return (
    <Center h={300}>
      <Modal
        isOpen={visible}
        onClose={() => {
          setVisible(false);
        }}
        finalFocusRef={ref}>
        <ModalBackdrop />
        <KeyboardAvoidingView
          keyboardVerticalOffset={82}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ModalContent w={330}>
            <ModalHeader>
              <Heading size="lg">Informacion Inicial</Heading>
              <ModalCloseButton>
                <Icon as={CloseIcon} />
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              <Input
                style={styles.InputStyle}
                variant="outline"
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}>
                <InputField
                  placeholder="Alimento"
                  value={alimento}
                  onChangeText={value => setAlimento(value)}
                />
              </Input>
              <Input
                style={styles.InputStyle}
                variant="outline"
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}>
                <InputField
                  placeholder="mg de sodio"
                  inputMode="numeric"
                  value={cantidadSodio}
                  onChangeText={value => setCantidadSodio(value)}
                />
                <Badge
                  size="lg"
                  variant="solid"
                  borderRadius="$sm"
                  action={colorBadge}>
                  <BadgeText>{advertencia}</BadgeText>
                  <BadgeIcon as={icono} ml="$2" />
                </Badge>
              </Input>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="outline"
                size="sm"
                action="secondary"
                mr="$3"
                onPress={() => {
                  setVisible(false);
                }}>
                <ButtonText>Cancelar</ButtonText>
              </Button>
              <Button
                size="sm"
                action="positive"
                borderWidth="$0"
                onPress={() => {
                  setVisible(false);
                  setAlimento('');
                  setCantidadSodio('');
                  post(alimento, cantidadSodio)
                }}>
                <ButtonText>Guardar</ButtonText>
              </Button>
            </ModalFooter>
          </ModalContent>
        </KeyboardAvoidingView>
      </Modal>
    </Center>
  );
};

export default Alta;

const styles = StyleSheet.create({
  InputStyle: {
    marginVertical: 10,
  },
});
