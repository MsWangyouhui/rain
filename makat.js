const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

const pulic=function(res,req){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	console.log('access:' + req.url);

}

server.post('*', (req, res, next) => {
	pulic(res,req);
	req.on('data',function(req,res){
		console.log("req："+req)
	})
	const strong='SELECT 1 + 1 AS solution';
	var Beyelong = new Promise((resolve,reject) =>{
	var mysql  = require('mysql');
	var connection =  mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '123',  
	  database : 'test'
	})
		connection.connect();
		connection.query(strong, function (error, results, fields) {
		if (error) throw error;
		console.log('The solution is: ', results[0].solution);
		lie=results[0].solution;
		resolve(lie)
		});
	connection.end();  
	})
	Beyelong.then((successMessage)=>{
		console.log('The is Behiand');
		console.log(successMessage);
		res.write(JSON.stringify(successMessage))
		res.end();
		next();
	})
	/*
	const app = new Vue({
    data: {
      url: req.url
    },
    template: require('fs').readFileSync('./index.html', 'utf-8')
  })
  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
     res.write(html);	
     res.end();
  })*/
	 
});


server.post('/123',(req,res,next) =>{
	Pulic.header();
	console.log('enter');
})


const port =  7070
server.listen(port,()=>{
  console.log(`server started at localhost:${port}`)
})
