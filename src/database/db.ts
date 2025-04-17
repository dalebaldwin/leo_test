import Dexie, { type EntityTable } from 'dexie'
import { User } from '@/types'

const db = new Dexie('leonardo_ai_test') as Dexie & {
  users: EntityTable<User, 'userId'>
}

db.version(1).stores({
  users: '++userId, userName, jobTitle, status',
})

export { db }

// using dexie for indexedDb access
// gets around next and it's annoying issue with local storage
// also has some nice query functions
// We can also use this later for potentially caching data from the graphql query
// Can also use this for storing favourites or which elements have been clicked
