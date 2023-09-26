import express from 'express';
import { createIphones} from './src/db/create-ads.js';
import { router } from './src/router.js';
const app = express();

app.use(express.json({ extended: true }));
app.use('/pictures', express.static('pictures'));

router(app);

async function start(){
    try{

        //createIphones();
        app.listen(5000, ()=>console.log(`App started on port: 5000...`));
    } catch(e){
        console.log("Server ERROR", e.message);
        process.exit(1);
    }
}

start()