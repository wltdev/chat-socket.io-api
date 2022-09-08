import moment from 'moment'
import * as Ramda from 'ramda'

import { User } from '@/entities/User'

const sortUsers = Ramda.sortWith([Ramda.descend(Ramda.prop('latestMessageDate'))])

export const setSortUsers = (docs: User[]) => {
  const handledDocs = docs.map((doc) => {
    let sentMessageIsAfter = true
    if (doc.sentMessages.length && doc.recievedMessages.length) {
      sentMessageIsAfter = moment(doc?.sentMessages[0].createdAt).isAfter(doc?.recievedMessages[0].createdAt)
    } else if (!doc.sentMessages.length && doc.recievedMessages.length) {
      sentMessageIsAfter = false
    }

    const latestMessage = sentMessageIsAfter ? doc.sentMessages[0] : doc.recievedMessages[0]

    return {
      ...doc,
      latestMessage,
      latestMessageDate: latestMessage ? latestMessage.createdAt : ''
    }
  })

  const sortedDocs = sortUsers(handledDocs)
  return sortedDocs
}
