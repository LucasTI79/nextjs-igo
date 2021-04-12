
import React, { useEffect } from "react";

export default function FbCostumerChat() {
  useEffect(() => {
    window.fbAsyncInit = () => {
      window.FB.init({
        xfbml            : true,
        version          : 'v10.0'
      });
    };

    (function(d, s, id) {
      var js,
      fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/pt_BR/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'))
  });

  return null
}