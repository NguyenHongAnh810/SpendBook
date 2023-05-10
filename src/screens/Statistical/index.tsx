import {View, Text, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {useState} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native';
import {ItemStatisticalChart} from './ItemStatisticalChart';
import ComboBox from '../../components/ComboBox';
import ModalDatePicker from '../../shared/components/modal/ModalDatePicker';
import moment from 'moment';
import {Spend, useQuery, useRealm} from '../../services/models/Realm';
import {NativeModules} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import firestore from '@react-native-firebase/firestore';

export default function Statistical() {
  const [selectedChoose, setSelectedChoose] = useState(0);
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [revenus, setRevenus] = useState([]);
  const [expense, setExpense] = useState([]);
  const realm = useRealm();
  const spend = realm.objects('Spend');

  useEffect(() => {
    const data = firestore()
      .collection('1')
      .get()
      .then(res => {
        console.log('res', res);
        res.forEach(documentSnapshot => {
          console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
        });
      });
  }, []);

  const onChange = (spends: any, changes: any) => {
    setRevenus(spends.filtered('type == "Tiền thu"'));
    setExpense(spends.filtered('type == "Tiền chi"'));
  };

  useEffect(() => {
    spend.addListener(onChange);
    return () => {
      spend.removeListener(onChange);
    };
  }, []);

  const Item = ({item}: any) => {
    return (
      <View>
        <Text>{item.total}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{gap: 12}}>
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
        {revenus.map(item => (
          <Item item={item} />
        ))}
        <Text style={styles.title}>Chi tiêu</Text>
        {expense.map(item => (
          <Item item={item} />
        ))}
      </ScrollView>
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
  containerItem: {},
});
