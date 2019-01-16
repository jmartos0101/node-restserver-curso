



//Puerto
process.env.PORT = process.env.PORT || 3000;


//ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Vencimiento del Token
//60*60*24*30
process.env.CADUCIDAD_TOKEN = 60*60*24*30;

//SEED de autenticacion
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';


//BASE DE DATOS
let urlDB;

if (process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe'
}else{
    urlDB = process.env.MONGO_URI 
}
//blaklsdklklasdklasdklasdasasd
process.env.URLDB = urlDB;

//google CLient ID
process.env.CLIENT_ID = process.env.CLIENT_ID || '942029456620-f0osp9coqg14r6h36025e5uc9660f4uj.apps.googleusercontent.com';
