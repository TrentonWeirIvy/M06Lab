// store.js
import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    msgs: [],
  },
  mutations: {
    updateMessages(state, messages) {
      state.msgs = messages;
    },
    newMessage(state, message){
        state.msgs.push(message);
    }
  },
  actions:{
    async getMessages({commit}){
        let messages = (await axios.get('http://localhost:3000/messages')).data;
        commit('updateMessages',messages);
    },
    async getMessage(_, id) {
        console.log(id);
        let message = (await axios.get(`http://localhost:3000/messages/${id}`)).data;
        return message;
      },
    async newMessage({commit}, messageBody){
        let msg = (await axios.post('http://localhost:3000/messages', {
          message: messageBody,
        })).data;
        commit('newMessage', msg.message);
    },
    
  }
});