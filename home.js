const express=require('express');
const logger=require('./logger');
const app=express();
app.get('/',(req,res)=>{

    res.send("welcome to the site");
});

const products=[
    {id:1,name:'apple',feature:'live_wallpapers',cost:40000},
    {id:2,name:'samsung',feature:'quality_camera',cost:30000},
    {id:3,name:'oneplus',feature:'swap_buttons',cost:20000},
    {id:4,name:'lenovo',feature:'snapshot_gesture',cost:10000}
];
app.get('/products',(req,res)=>{

    res.send(products);
    // res.end();

});
//display single id
app.get('/products/:idd',(req,res)=>{

    const product=products.find(p=>p.idd===parseInt(req.params.id));
    logger.log('error message');
    if(!product)
    res.status(404).send(`product idd ${idd} not found`);
    res.send(product);
    })
    app.get('/products/:idd',(req,res)=>{

        console.log(req.query.filterByName,'query filter')
    });
app.get('/products/:id',(req,res)=>{
const product=products.find(p=>p.name === req.query.filterByName);
logger.log('error message');
if(!product) res.status(404).send(`product name ${req.query.filterByName}not found`)
//app.listen(3000);
res.send(product);
    });
const port =process.env.ECBPORT||3000;
app.listen(port,()=> console.log(`listening to port ${port}`));
//console.log("we can listen in the given port");
