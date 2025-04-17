export type User = {
  userId: string
  userName: string
  jobTitle: string
  status: Status
}

export type Status = 'active' | 'inactive'
