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
         const el = document.createElement('div');
         el.className = 'fb-customerchat';
         el.setAttribute('attribution', 'install_email');
         el.setAttribute('page_id', '503018133206953');
         el.setAttribute('theme_color', '#44bec7');
         el.setAttribute('logged_in_greeting', 'Ol&#xe1;! Como posso te ajudar?');
         el.setAttribute('logged_out_greeting', 'Ol&#xe1;! Como posso te ajudar?');
         // el.setAttribute('pgreeting_dialog_display', '...');
         // el.setAttribute('pgreeting_dialog_delay', '...');
         // el.setAttribute('pminimized', 'false');
         document.body.appendChild(el);
         FB.XFBML.parse();
       }, 2000);
     }
   });

   return null;
 });

 export default CustomerChat;