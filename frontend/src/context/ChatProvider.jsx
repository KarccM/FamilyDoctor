import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import axios from 'axios';
import { useMutation } from "react-query";
import { post } from "../api/axios";

const ChatContext = createContext()

export default function ChatProvider(props) {
  let { readFromLocalStorage, writeOnLocalStorage, deleteFromLocalStorage } = useLocalStorage()
  const [chats, setChats] = useState(readFromLocalStorage('chats', 'object') ?? []);

  const { mutate, isError, isLoading } = useMutation(
    () => post('chats', {}),
    {
      onSuccess: (data) => {
        writeOnLocalStorage('chats', [...chats, data.data._id], 'object');
        setChats(prev => [...prev, data.data._id]);
      },
      onError: (error) => {
        console.log('error :>> ', error);
      },
    }
  );

  function createNewChat() {
    mutate()
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
    mutateLoading: isLoading,
    mutateError: isError,
  }} {...props} />
}

function useChat() {
  return useContext(ChatContext);
}

export { useChat };