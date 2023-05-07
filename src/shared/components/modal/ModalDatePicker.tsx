import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Modal} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {memo} from 'react';

type ModalDatepickerProps = {
  onPress?: (value: any) => void;
  visible: boolean;
  setVisible: (value: boolean) => void;
  value: Date;
};
const ModalDatePicker = ({
  onPress = () => {},
  visible,
  setVisible,
  value,
}: ModalDatepickerProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(false);
      }}>
      <DateTimePicker
        testID="dateTimePicker"
        value={value}
        mode={'date'}
        is24Hour={true}
        onChange={(event, date) => {
          setVisible(false);
          onPress(date);
        }}
      />
    </Modal>
  );
};

export default memo(ModalDatePicker);

const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 22,
    backgroundColor: 'white',
    height: 200,
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
