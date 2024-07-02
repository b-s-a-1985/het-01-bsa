# Házi feladat
Építsünk fel egy React alkalmazást, ami komponensek segítségével megjeleníti a következő adatstruktúrát:  

```
const recipes = [
    id: 1,
    name: "Rántotta",
    ingredients: [
        "2 tojás",
        "egy csipet só"
    ],
    instructions: "Feltörjük, megsütjük, finom lesz",
    difficulty: 3
]
```

Egészítsük ki a recept adatbázist még 2 recepttel és nézzük meg, hogy helyesen működik-e az alkalmazásunk.  
## Hallgatói megjegyzés:  
A React megköveteli, hogy az Array elemeknek egyedi azonosítójuk legyen, ```key``` kulccsal.  
Ez a jelen alkalmazásban így is van, fordítási hibaüzenet nincs. Ekkor viszont a feladat specifikációban megadott ```id```  redundáns információ, ráadásul a felhasználó számára érdektelen. 
Mivel a ```key``` értékét nem sikerült megjeleníteni, ezért a komponens listából kihagytam. Úgy vélem, hogy ez a belső, technikai információ a felhasználó számára lényegtelen. A ```Recipe``` komponens azonban működik különböző paraméterekkel, a specifikációnak megfelelően.  
A ***./components/recipe.json*** fájl kiegészítésével további receptek adhatók a megjelenített listához a forráskód megváltoztatása nélkül.
- Készült: Budapest, 2024.07.02
- Hallgató: Bodnár Sándor Árpád
- Verzió: 0.1
