const express = require('express');

const app = express();

app.get(`/`,(request,response)=>{
	response.send(`/contact
		/about`);
});

app.get(`/about`,(request,response)=>{
	response.send(`Hi i am Ravi in my group Alay, Rutul, Krupesh we are four people `);
});

app.get(`/contact`,(request,response)=>{
	response.send(`my email adress is: ravi77asodariya@gmail.com`);
});

const port = process.env.PORT || 4000;

app.listen(port,()=> console.log(`Listening on port ${port}`));