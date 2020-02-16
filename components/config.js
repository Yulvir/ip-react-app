// Este codigo permite que podamos apuntar a flask local si desarrollamos en local o a flask desplegado si estamos en producción

// para npm start ----> process.env.NODE_ENV = development
// para npm run build ----> process.env.NODE_ENV = production

let BASE_URL =  "http://localhost:5000";
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production'){
    BASE_URL = "https://getinfoip.com/api";
}


export default BASE_URL;




