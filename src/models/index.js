// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ChatRoom, Messages, User, UserChatRoom } = initSchema(schema);

export {
  ChatRoom,
  Messages,
  User,
  UserChatRoom
};