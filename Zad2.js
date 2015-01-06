db.Wiki2.drop();

var map = function(){

  var words = this.text.toString().split(" ");

  words.forEach(function(key){
    emit(key, key);
  });

};

var reduce = function(key, value){

  return value.length;

};

result = db.WikiShort.mapReduce( map, reduce, {out: 'Wiki2'});

db.Wiki2.find();
