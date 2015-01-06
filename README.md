#Jakub Karolczak

> Spis zadań:
> * [Zadanie 1](#zadanie-1)
> * [Zadanie 2](#zadanie-2)

#Zadanie 1

###Przygotowanie

Do pobranego pliku [word_list.txt](http://wbzyl.inf.ug.edu.pl/nosql/doc/data/word_list.txt) dopisałem w pierwszej linii słowo 'value', które posłuży za nazwę kolumny w bazie danych (za sprawą wartości --headerline podanej przy imporcie).

Następnie zimportowałem wszystkie słowa z pliku do bazy MongoDB za pomocą polecenia:
```
time mongoimport --type csv -c Words --file word_list.txt --headerline
```

#####Czas wykonania operacji: 0,758 sekundy.

###Szukanie anagramów

Do znalezienia anagramów napisałem [skrypt w języku JavaScript](Zad1.js), uruchamiany poleceniem:
```
time mongo test Zad1.js
```

Rozdziela on wszystkie słowa na litery, które po alfabetycznym posortowaniu są emitowanew funckji Map. Jeśli zostaną wyemitowane przynajmniej 2 takie same zestawy liter, oznacza to, że znaleziono anagram.

#####Dla naszej bazy danych skrypt znalazł 914 anagramów w czasie 0,716 sekundy.

#Zadanie 2

###Przygotowanie

Pierwszą rzeczą, jaką wykonałem była konwersja pliku xml na csv, aby móc go wgrać do bazy Mongo. Przy okazji wyciąłem wszystkie dane, poza zawartością znaczników <text> oraz "oczyściłem" teksty z niepotrzebnych znaków, zostawiając jedynie litery.

Wykorzystałem w tym celu [skrypt napisany przy użyciu Node](konwerter.js), uruchamiany poleceniem:
```
node konwerter.js
```

#####Czas wykonania operacji konwersji: 17 minut

Następnym krokiem jest zaimportowanie danych z pliku do bazy. Wykorzystałem do tego polecenie:
```
time mongoimport --type csv -c Wiki --file gotowe.csv --headerline
```

#####Czas wykonania operacji: 7 minut 35 sekund

###MapReduce

Następnie uruchomiłem operację MapReduce, przy użyciu [skryptu w JavaScripcie](Zad2.js), wpisujac polecenie:
```
time mongo test Zad2.js
```

Zlicza on ilość wystapien kazdego wyrazu i zapisanie tej wartosci jako 'value' w bazie danych.

#####Czas wykonania operacji: 12 godzin 26 minut

###Zliczanie wyrazów

Aby wypisac najczesciej pojawiajace sie slowa, uzylem ponizszej komendy w programie Robomongo:
```
db.Wiki2.find().sort( { "value": -1 } ).limit(10);
```

W wyniku dostalem takie oto dane:

```
urodził : 5382
sześć" : 5352
Urodził : 5342
ukończeniu : 5307
Dwa : 5261
rodzinie : 5261
przebywał : 5254
założył : 5246
pozostał : 5234
powrocie : 5229
```
