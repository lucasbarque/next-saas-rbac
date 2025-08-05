import { ability } from '@saas/auth'

const useCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDeleteOtherUsers = ability.can('delete', 'User')

console.log('Can invite someone else:', useCanInviteSomeoneElse)
console.log('Can delete other users:', userCanDeleteOtherUsers)
