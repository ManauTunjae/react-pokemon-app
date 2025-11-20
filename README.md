#Pokémon Application

##En enkel och interaktiv Pokémon-applikation byggd med React. Applikationen hämtar data från det officiella PokéAPI och låter användaren bläddra bland de första 151 Pokémon. När en Pokémon väljs visas detaljerad information såsom namn, typ, vikt, längd och bild.

##🚀 Funktioner
	•	Visa en startskärm med möjlighet att starta eller avsluta appen.
	•	Hämta de 151 första Pokémon från PokéAPI automatiskt vid uppstart.
	•	Lista Pokémon där användaren kan välja en.
	•	Visa detaljerad information om vald Pokémon:
	•	Namn
	•	Typ(er)
	•	Vikt
	•	Längd
	•	Bild (front sprite)

##🧩 Komponenter

##App.jsx
	•	Huvudingången till applikationen.
	•	Innehåller en startknapp som visar eller döljer Pokémon-applikationen.
	•	Visar även en Pokémon-logo.

##PokemonApplication.jsx
	•	Hämtar alla Pokémon från API:et.
	•	Visar en lista med Pokémon där användaren kan klicka för att se mer information.
	•	Hämtar detaljerad data om vald Pokémon.
	•	Renderar Pokemon-komponenten när en Pokémon är vald.

##Pokemon.jsx
	•	Presenterar detaljerad information om den valda Pokémon:
	•	Bild
	•	Namn
	•	Typ(er)
	•	Vikt
	•	Längd

##🔧 Teknologier
	•	React
	•	JavaScript (ES6+)
	•	PokéAPI (https://pokeapi.co/)
	•	CSS för styling
