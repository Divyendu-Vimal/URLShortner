import express from "express";
import {connectToMongoDB} from "./connect.js";
import urlRoute from "./routes/url.js";
import URL from "./models/url.js";
import staticRoute from "./routes/staticRouter.js";

const app=express();
const PORT=8001;

connectToMongoDB('mongodb://127.0.0.1:27017/short-url')
.then(()=> console.log("MongoDb connected"));

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/url',urlRoute);
app.use('/',staticRoute);

app.get('/url/:shortId',async(req,res) => {
    const shortId=req.params.shortId;
    const entry=await URL.findOneAndUpdate(
        {
        shortId
        },
        {
            $push:{
                visitHistory:{timestamp: Date.now()},
            },
        }
    );
    res.redirect(entry.redirectURL);
});



app.listen(PORT,()=> console.log(`Server started at PORT:${PORT}`));

