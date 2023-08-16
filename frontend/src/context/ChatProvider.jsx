import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuidv4 } from 'uuid';

const ChatContext = createContext()

export default function ChatProvider(props) {
  let { readFromLocalStorage, writeOnLocalStorage, deleteFromLocalStorage } = useLocalStorage()
  const [chats, setChats] = useState(readFromLocalStorage('chats', 'object') ?? []);

  function createNewChat() {
    let newChat = uuidv4();
    writeOnLocalStorage('chats', [...chats, newChat], 'object');
    setChats(prev => [...prev, newChat])
    return { newChat, chats: [...chats, newChat] };
  }

  function clearAllChats() {
    deleteFromLocalStorage('chats')
    setChats([])
  }

  return <ChatContext.Provider value={{
    chats,
    createNewChat,
    clearAllChats,
  }} {...props} />
}

function useChat() {
  return useContext(ChatContext);
}

export { useChat };