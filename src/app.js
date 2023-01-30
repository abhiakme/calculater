const express=require("express");
const hbs=require("hbs");
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const app=express();

// app.use(express.static("public"));   //using static file middleware         path example->   css/style.css
app.use("/static",express.static("public"));   //using static file middleware alternate way      path example-> static/css/style.css


app.set("view engine","hbs");  // templets engine
app.set("views","views");

const routes=require("./routes/main");  // importing routes
app.use("/",routes);

app.listen(process.env.PORT|3000,()=>{
    console.log("lisning");
});
