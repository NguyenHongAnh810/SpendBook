import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import ModalDatePicker from '../../shared/components/modal/ModalDatePicker';
import ComboBox from '../../components/ComboBox';
import moment from 'moment';
import Tag from '../../components/Tag';
import {Spend, useQuery, useRealm} from '../../services/models/Realm';
import {useNavigation} from '@react-navigation/native';

export default function Create() {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState();
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState('');
  const [total, setTotal] = useState();
  const realm = useRealm();

  const Title = ({value}: {value: string}) => (
    <Text style={styles.title}>{value}</Text>
  );

  const onPressTag = (value: string) => {
    setType(value);
  };

  const resetData = () => {
    setType('');
    setNote('');
    setTotal();
  };

  const createSpend = () => {
    if(!type.length || !total.length ) return
    try {
      realm.write(() => {
        realm.create('Spend', {
          id: `${total}${Math.random()}`,
          total: Number(total),
          date: date.getTime(),
          note: note,
          type: type,
          category: 0,
        });
      });
      resetData()
      navigation.navigate('Thống kê');
    } catch (err) {
      console.log('err', err);
    }
  };

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
      <ComboBox
        placeHolder="Chọn ngày"
        value={moment(date).format('DD/MM/YYYY')}
        onPress={() => {
          setVisible(!visible);
        }}
      />
      <View style={styles.contentItem}>
        <Title value="Loại" />
        <Tag title="Tiền thu" onPress={onPressTag} valueActive={type} />
        <Tag title="Tiền chi" onPress={onPressTag} valueActive={type} />
      </View>
      <View style={styles.contentItem}>
        <Title value="Ghi chú" />
        <TextInput
          value={note}
          onChangeText={(txt: string) => setNote(txt)}
          placeholder="Nhập ghi chú"
          style={{padding: 0, flex: 1}}
        />
      </View>
      <View style={styles.contentItem}>
        <Title value="Số tiền" />
        <TextInput
          value={total}
          onChangeText={(txt: string) => setTotal(txt)}
          placeholder="Nhập số tiền"
          style={{padding: 0, flex: 1}}
        />
      </View>
      <TouchableOpacity style={styles.buttonAdd} onPress={createSpend}>
        <Text style={{color: 'white'}}>Thêm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cornsilk',
    alignItems: 'center',
    paddingTop: 20,
    flex: 1,
    gap: 24,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    width: '18%',
  },
  contentItem: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    width: '100%',
  },
  buttonAdd: {
    backgroundColor: 'orange',
    padding: 12,
    borderRadius: 12,
  },
});
