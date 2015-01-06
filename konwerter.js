var fs = require('fs');
var sax = require("sax");

//ustawienia dla saxa
var options= {
  strict:true,
  normalize:true
};

var tagi = [];
var isText = false;
var isId = false;
var saxStream = require("sax").createStream(options);

//obsługa błedow
saxStream.on("error", function (e) {

  console.error("error!", e);
  this._parser.error = null;
  this._parser.resume();

});

saxStream.on("opentag", function (node) {

  //sprawdzam, czy jestem w tagu <text>
  if(node.name==="text"){
  		isText= true;
  		console.log(node.tag);
  }
  else
  	isText=false;

  //sprawcza, czy jestem w ID
  if(node.name==="id" && tagi.indexOf("revision") <= -1)
  	isId = true;
  else
  	isId=false;

  tagi.push(node.name)

});

saxStream.on("closetag", function(){

	 tagi.pop();
	 isText = false;
	 isId = false;

});

saxStream.on("end",function(){
	fs.appendFileSync('gotowe.json','] \n');
});

saxStream.on("text", function (text) {

    //zapis i usuwanie niepotrzebnych znakow
		if(isId){
			fs.appendFileSync('gotowe.json','{\n"id": '+text.replace(/(\r\n|\n|\r)/gm,'').replace(/[^a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]/g,'')+', \n');
		}

		if(isText&&!isId){
			fs.appendFileSync('gotowe.json',' "text": '+'" '+text.replace(/(\r\n|\n|\r)/gm,'').replace(/[^a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ ]/g ,'').substring(0,40)+'" \n'+' }, \n');
		}

});

fs.appendFileSync('gotowe.json','[ \n');

fs.createReadStream("short.xml").pipe(saxStream);
