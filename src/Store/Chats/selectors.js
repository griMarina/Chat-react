export const chatListSelector = (state) => state.chats.chatList;

export const getChatById = (chatId) => {
  return (state) => state.chats.chatList.find((chat) => chat.id === chatId);
};
