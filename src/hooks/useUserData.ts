'use client'

import { User } from '@/types'
import { db } from '@/database/db'
import { useLiveQuery } from 'dexie-react-hooks'
import { nanoid } from 'nanoid'

type AddUser = Pick<User, 'userName' | 'jobTitle'>
type EditUser = Pick<User, 'userName' | 'jobTitle' | 'userId'>

export const useUserData = () => {
  // data = user
  // undefined = loading
  // null = no user
  // aware this sucks, but this is meant to be a short exercise
  const activeUser = useLiveQuery(async () => {
    const user = await db.users.where('status').equals('active').toArray()
    if (user[0]) {
      return user[0]
    } else {
      return null
    }
  })

  const addUser = ({ userName, jobTitle }: AddUser) => {
    // const checkIfExists = db.users
    //   .where('[userName, jobTitle]')
    //   .equals([userName, jobTitle])
    //   .toArray()

    // Something to implement later, leaving as example
    // Need to check if user exists before adding it

    db.users.add({
      userId: nanoid(),
      userName,
      jobTitle,
      status: 'active',
    })
  }

  // Check if active user then edit value
  const editUser = ({ userName, jobTitle, userId }: EditUser) => {
    if (activeUser !== null && activeUser?.userId === userId) {
      db.users.where('userId').equals(userId).modify({ userName, jobTitle })
    }
  }

  // As above future improvement is a need to check if user exists before adding it

  const logout = (userId: string) => {
    db.users.where('userId').equals(userId).modify({ status: 'inactive' })
  }

  return { activeUser, addUser, editUser, logout }
}

// Need to add logout capability here so we can add more users later
// Db setup as it is will easily make this possible
