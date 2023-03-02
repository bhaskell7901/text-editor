import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = (content) => openDB('jate', 1)
      .then((db) => db.transaction('jate', 'readwrite')
        .objectStore('jate')
        .put({ id: 1, text: content })
      );


// TODO: Add logic for a method that gets all the content from the database
export const getOneDb = (id) => openDB('jate', 1)
     .then((db) => db.transaction('jate','readonly')
       .objectStore('jate')
       .get(id)
      );

initdb();
