import express from "express";
import path from "path" ;
import hbs from "hbs" ;
const app = express();
const port = process.env.PORT || 5000 ;
const __dirname = path.resolve();

// public static path 
const staticPath = path.join(__dirname,"/public");
const templatePath = path.join(__dirname,"../WeatherAppExpress/templates/views/");
const partialsPath = path.join(__dirname,"../WeatherAppExpress/templates/partials");

app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

// routing 
app.get("/",(req,res) => {
    res.render("index");
})

app.get("/about",(req,res) => {
    res.render("about");
})

app.get("/weather",(req,res) => {
    res.render("weather");
})

app.get("*",(req,res) => {
    res.render("404error",{
        errorMsg : 'Oops! Page Not Found'
    });
})


app.listen(port,()=>{
    console.log(`Listening to the port at ${port}`);
})