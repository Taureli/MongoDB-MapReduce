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

######Czas wykonania operacji: 0,758 sekundy.

###Szukanie anagramów

Do znalezienia anagramów napisałem [skrypt w języku JavaScript](Zad1.js).

Rozdziela on wszystkie słowa na litery, które po alfabetycznym posortowaniu są emitowanew funckji Map. Jeśli zostaną wyemitowane przynajmniej 2 takie same zestawy liter, oznacza to, że znaleziono anagram.

######Dla naszej bazy danych skrypt znalazł 914 anagramów w czasie 0,716 sekundy.

#Zadanie 2

#Przygotowanie

Pierwszą rzeczą, jaką wykonałem była konwersja pliku xml na csv, aby móc go wgrać do bazy Mongo. Przy okazji "oczyściłem" teksty z niepotrzebnych znaków, zostawiając jedynie litery i cyfry.

######Operacja konwersji zajęła 17 minut
