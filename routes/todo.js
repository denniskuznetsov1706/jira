const {Router} = require('express')
const todoo = require('../models/todoo')
const router = Router()
const fetch = require('node-fetch');
var bodyParser = require('body-parser')


//const todoo = require('../models/todoo');

var ja;
var ass =[];

fetch('https://denyskuz.atlassian.net/rest/api/3/filter', {
  method: 'GET',
  headers: {
    'Authorization': `Basic ${Buffer.from(
      'kuznetsov.dennis.1706@gmail.com:NUg54ZqoeTw3rqjIiaN946D8'
    ).toString('base64')}`,
    'Accept': 'application/json'    
}
})
.then(response => {
  console.log(
    `Response: ${response.status} ${response.statusText}`
  );
  return response.text();
})
  .then(text => {
      ja=JSON.parse(text);
     // console.log(ja.issues[ja.total-1].key.toString());

     //---------------
        for (let i=1; i<=3; i++)
        {
            ass.push(ja[ja.length-i].displayName);
        }

     //-----------------


    })
  
  .catch(err => console.error(err));


 // console.log(ja.total.toString()+"fgfggfgf");
 router.get('/',async (req,res)=>{

    //const todo= await todoo.find({})

    res.render('main-page',{
        isMainPage:true,
        //todo,
        ja
    })
})





var pat=false;

router.post('/filter', async(req, res)=>{
  
    console.log(req.body.filter);
    pat=req.body.filter;
 //   res.render('filter',{
//---------------------------------------

var jj;
fetch(pat, {
  method: 'GET',
  headers: {
    'Authorization': `Basic ${Buffer.from(
      'kuznetsov.dennis.1706@gmail.com:NUg54ZqoeTw3rqjIiaN946D8'
    ).toString('base64')}`,
    'Accept': 'application/json'    
}
})
.then(response => {
  console.log(
    `Response: ${response.status} ${response.statusText}`
  );
  return response.text();
})
  .then(text => {
      jj=JSON.parse(text);
      console.log(jj.total.toString());

     // res.render('filter',{
      //  jj,
      //  tit:jj.total.toString()
        
   // })
   res.render('filter',{
       jj

   });


     

    })
  
  .catch(err => console.error(err));





//----------------------------


  //  jj
})



router.get('/filter',async(req,res)=>{
    res.render('filter',{
        isFilter:true,
        
    })
})


module.exports = router