


// Este codigo permite que se ejecute tanto de manera local como en produccion

// para npm start ----> process.env.NODE_ENV = development
// para npm run build ----> process.env.NODE_ENV = production

let BASE_URL =  "http://localhost:5000";
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production'){
    BASE_URL = "https://getinfoip.com/api";
}


export default BASE_URL;