Uruchomienie:  
-> klonujemy repo  
-> Odpalamy Docker Desktop  
-> wchodzimy do folderu repo poprzez terminal
-> wpisujemy docker compose up --build
-> podziwiamy jak tworzą się 3 kontenery:  
--> Baza postgres  
--> Aplikacja Experes  
---> http://localhost:3000/cars  
---> http://localhost:3000/cars/1  
---> http://localhost:3000/average_year  
--> Testy  
-> wzdychamy na pięknie wykonanym zadaniem ;)  
Opcjonalne:  
-> po upewnieniu się, że apka działa ubijamy działające kontenery korzystając z komendy docker compose down
