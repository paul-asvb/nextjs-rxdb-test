import {
  addRxPlugin,
  createRxDatabase
} from 'rxdb';
addRxPlugin(require('pouchdb-adapter-memory'));


/*const serverDB = createRxDatabase({
  name: 'nextrxtestserver',           // <- name
  adapter: 'memory',          // <- storage-adapter
 // password: 'myPassword',     // <- password (optional)
 // multiInstance: true,         // <- multiInstance (optional, default: true)
  //eventReduce: false // <- eventReduce (optional, default: true)
}).then(console.dir);*/

export default function Home() {
  const db = createRxDatabase({
    name: 'nextrxtest', // <- name
    adapter: 'memory', // <- storage-adapter
    // password: 'myPassword',     // <- password (optional)
    // multiInstance: true,         // <- multiInstance (optional, default: true)
    //eventReduce: false // <- eventReduce (optional, default: true)
  }).then(console.dir);
  return (
    <div className="container">
      container
    </div>
  )
}