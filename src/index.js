import _ from 'lodash';
import style from './styles/app.css';
import logoIcon from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
window.onload = function () {
    let logo = document.getElementById('logo');
    logo.src = logoIcon;
    let loginFlag = localStorage.getItem('loginFlag');
    if ( typeof (loginFlag) === 'undefined') {
       localStorage.setItem('loginFlag','0');
    }
    else if( loginFlag === '1') { 
        import dashboard from dashboard.js;
        dashboard();
    } else if( loginFlag === '0' ){
        import login from login.js;
        login();
    }
}

