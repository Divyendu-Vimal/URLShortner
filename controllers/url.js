import {nanoid} from "nanoid";
import URL from "../models/url.js";

async function handleGenerateNewShortURL(req,res){
    const body=req.body;
    if(!body.url) return res.status(400).json({error:'URL is required'});
    const shortID=nanoid(8);
    const newurl=new URL({
        shortId:shortID,
        redirectURL:body.url,
        visitHistory:[],
    });
    const savedUser =await newurl.save();
    return res.json({id:savedUser.shortId});
}

async function handleGetAnalytics(req,res){
    const shortId=req.params.shortId;
    const entry=await URL.findOne({shortId});
    return res.json({totalClicks:entry.visitHistory.length,analytics:entry.visitHistory,
    });
}

export 
    {handleGenerateNewShortURL,
    handleGetAnalytics,
}