/**
 * React Starter Kit for Firebase
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

 import React from 'react';
 import { useFacebook } from '../src/hooks/useFacebook';

 // https://developers.facebook.com/docs/messenger-platform/discovery/customer-chat-plugin
 const CustomerChat = React.memo(function CustomerChat() {
   const timeoutRef = React.useRef();
   // Initialize Facebook widget(s) in 2 seconds after
   // the component is mounted.
   useFacebook({ xfbml: false }, FB => {
     if (timeoutRef.current !== null) {
       timeoutRef.current = setTimeout(() => {

       }, 2000);
     }
   });

   return null;
 });

 export default CustomerChat;