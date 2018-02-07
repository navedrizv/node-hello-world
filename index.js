const express = require("express");
const app = express();

app.listen(8081, () => {	
	console.log("Node running on port 8081");
});

app.get("/", (req,res) => {
	res.send("Hello World");
})
