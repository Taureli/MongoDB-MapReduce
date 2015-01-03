#Jakub Karolczak

> Spis zadań:
> * [Zadanie 1](#zadanie-1)

#Zadanie 1

###Przygotowanie

Do pobranego pliku [word_list.txt](http://wbzyl.inf.ug.edu.pl/nosql/doc/data/word_list.txt) dopisałem w pierwszej linii słowo 'value', które posłuży za nazwę kolumny w bazie danych (za sprawą wartości --headerline podanej przy imporcie).

Następnie zimportowałem wszystkie słowa z pliku do bazy MongoDB za pomocą polecenia:
```
time mongoimport --type csv -c Words --file word_list.txt --headerline
```

######Czas wykonania operacji: 0,758 sekundy.
