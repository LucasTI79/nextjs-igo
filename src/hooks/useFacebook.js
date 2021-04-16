/** React Starter Kit for Firebase
* https://github.com/kriasoft/react-firebase-starter
* Copyright (c) 2015-present Kriasoft | MIT License
*/

import React from 'react';

let promise;

export function useFacebook(options, cb) {
 if (typeof options === 'function') {
   cb = options;
 }

 React.useEffect(() => {
   if (promise) {
     promise.then(cb);
     console.log('promise')
   } else {
     promise = new Promise(resolve => {
       // https://developers.facebook.com/docs/javascript/reference/FB.init
      //  window.fbAsyncInit = () => {
      //    window.FB.init({
      //      //appId: window.config.facebook.appId,
      //      autoLogAppEvents: true,
      //      status: true,
      //      cookie: true,
      //      xfbml: true,
      //      version: 'v5.0',
      //      ...options,
      //    });
      //    resolve(window.FB);
      //  };

       console.log('else promise')


       const script = document.createElement('script');
       const isDebug = window.localStorage.getItem('fb:debug') === 'true';
       script.src = `https://connect.facebook.net/pt_BR/sdk/xfbml.customerchat.js`; // prettier-ignore
       document.head.appendChild(script);
     });
     promise.then(cb);
   }
 }, []);
}