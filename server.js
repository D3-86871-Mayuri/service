const express=require('express')
const app = express()
app.get('/', (request,response)=>
{
    response.send('welcome to my expresss application')

})
app.listen(4000,'0.0.0.0',()=>
{
   console.log('server is running on 4000')
})
