import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './src/services/navigation';
import {RealmProvider} from './src/services/models/Realm';

export default function App() {
  return (
    <RealmProvider >
      <Navigation />
    </RealmProvider>
  );
}
