import { UserEdit } from '@/components/userEdit/userEdit'
import { useUserData } from '@/hooks/useUserData'

export const SignIn = () => {
  const { addUser } = useUserData()

  return <UserEdit userAction={addUser} actionText="Sign in" uName="" jTitle="" />
}
