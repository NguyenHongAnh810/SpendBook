import Realm from 'realm';
import {SpendItem} from '.';
import {createRealmContext} from '@realm/react';

export class Spend extends Realm.Object<SpendItem> {
  id!: string;
  total!: number;
  date!: Date;
  note?: string;
  type!: string;
  category!: number;
  static schema = {
    name: 'Spend',
    properties: {
      id: 'string',
      total: 'int',
      note: 'string',
      type: 'string',
      category: 'int',
      date: 'double',
    },
    primaryKey: 'id',
  };
}

// Create a configuration object
const realmConfig: Realm.Configuration = {
  schema: [Spend],
};
// Create a realm context
export const {RealmProvider, useRealm, useObject, useQuery} =
  createRealmContext(realmConfig);
