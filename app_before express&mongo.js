const express = require('express');
const bodyParser = require('body-parser');
const app_beforeExpressMongo = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app_beforeExpressMongo.set('view engine', 'ejs');
app_beforeExpressMongo.use(express.static('./stuff'))

app_beforeExpressMongo.get('/', (req, res)=>{
res.render('index')
});
app_beforeExpressMongo.get('/contacts', (req, res)=>{
    res.render('contact', {qs: req.query})

});

app_beforeExpressMongo.post('/contacts',urlencodedParser, (req, res)=>{
    console.log(req.body)
    res.render('contact-success', {data:req.body})

});

app_beforeExpressMongo.get('/profile/:name', (req, res)=>{
    const data = {age:29, job: 'ninja', hobbies: ['eating', 'fighting', 'cycling']}
    res.render('profile',{person:req.params.name, data: data})
});

app_beforeExpressMongo.listen(3000);
