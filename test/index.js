"use strict";

const mod = require("../");

mod.start("svz7BhvlP5Bk4JqrBPhqIdgOOZOBv8Ed1iiHDnyMRl4").then(async page => {
	const  res1  = await mod.send(page, "Hello Test");
	
	console.log((await res1.json()).replies[0].text);
});
