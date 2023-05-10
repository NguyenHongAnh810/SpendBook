import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';
import {spendItem} from '../models';

enablePromise(true);

const tableName = 'spendData';

export const getDBConnection = async () => {
  return openDatabase({name: 'spend-book-data.db', location: 'default'});
};

export const createTable = async (db: any, tableName?: string) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
        value TEXT NOT NULL
    );`;

  await db.executeSql(query);
};

export const getSpendItems = async (db: any): Promise<spendItem[]> => {
  try {
    const spendItems: spendItem[] = [];
    const results = await db.executeSql(
      `SELECT rowid as id, total, date, note, type, category FROM ${tableName}`,
    );
    results.forEach((result: any) => {
      for (let index = 0; index < result.rows.length; index++) {
        spendItems.push(result.rows.item(index));
      }
    });
    return spendItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get Items !!!');
  }
};

export const saveSpendItems = async (db: any, spendItems: spendItem[]) => {
  const insertQuery =
    `INSERT OR REPLACE INTO ${tableName}(rowid, total, date, note, type, category) values` +
    spendItems
      .map(
        i =>
          `(${i?.id}, '${i?.total}', '${i?.date}', '${i?.note}', '${i?.type}','${i?.category}')`,
      )
      .join(',');

  return db.executeSql(insertQuery);
};

export const deleteSpendItem = async (db: any, id: number) => {
  const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
  await db.executeSql(deleteQuery);
};

export const deleteTable = async (db: any) => {
  const query = `drop table ${tableName}`;

  await db.executeSql(query);
};
