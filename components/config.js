// Este codigo permite que podamos apuntar a flask local si desarrollamos en local o a flask desplegado si estamos en producción

// para npm start ----> process.env.NODE_ENV = development
// para npm run build ----> process.env.NODE_ENV = production

let BASE_URL_API =  "http://localhost:5000";
let BASE_URL_CONTENT =  "http://localhost:3000/static";
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production'){
    BASE_URL_API = "https://getinfoip.com/api";
    BASE_URL_CONTENT = "http://getinfoip.com/";
}





