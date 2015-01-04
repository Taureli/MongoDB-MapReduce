db.Words2.drop();

map = function() {

  var pom = this.value.split("").sort().toString(); //rozdzielam slowa na litery i sortuje alfabetycznie

  emit(pom,this.value);

};

reduce = function(key, value) {

  var results=[]; //tablica ze slowami

  //Wrzucam wszystkie anagramy do tablicy
  value.forEach(function(entry, index){
    results.push(entry);
  });

  return results.toString();

};

var finalize = function(key, value) {

  //wszystkie slowa w bazie maja po 6 znakow
  //wiec jesli zwrocono wiecej niz 6, znaleziono anagram
  if(value.length > 6)
    return value;
  else
    return value = null; //jesli mamy 6 znakow, nie znaleziono anagramu

};

res = db.Words.mapReduce(map, reduce, {out: 'Words2',finalize: finalize} );

//Wydrukowanie liczby anagramow w konsoli
print("Znalezione anagramy: " + db.Words2.count( {"value": {$ne:null}} ));
