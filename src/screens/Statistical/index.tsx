import {View, Text} from 'react-native';
import React from 'react';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {useState} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native';
import {ItemStatisticalChart} from './ItemStatisticalChart';
import ComboBox from '../../components/ComboBox';
import ModalDatePicker from '../../shared/components/modal/ModalDatePicker';
import moment from 'moment';

export default function Statistical() {
  const [selectedChoose, setSelectedChoose] = useState(0);
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <SafeAreaView style={styles.container}>
      <ModalDatePicker
        visible={visible}
        setVisible={setVisible}
        value={date}
        onPress={date => {
          setDate(date);
        }}
      />
      <SegmentedControl
        values={['Ngày', 'Tháng', 'Năm']}
        selectedIndex={selectedChoose}
        onChange={event => {
          setSelectedChoose(event.nativeEvent.selectedSegmentIndex);
        }}
        backgroundColor="orange"
        activeFontStyle={{color: 'orange'}}
        fontStyle={{color: 'white'}}
        style={{marginHorizontal: 20}}
      />
      <ComboBox
        placeHolder="Chọn ngày"
        value={moment(date).format('DD/MM/YYYY')}
        onPress={() => {
          setVisible(!visible);
        }}
      />
      <Text style={styles.title}>Thu nhập</Text>
      <ItemStatisticalChart />
      <Text style={styles.title}>Chi tiêu</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 1,
    gap: 12,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
});
