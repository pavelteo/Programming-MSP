SELECT ?receptor ?receptorLabel ?taxon ?taxonLabel ?bioProcess ?bioProcessLabel ?interactWith 
  ?InteractWithLabel ?molFunction ?molFunctionLabel ?partOf ?partOfLabel
WHERE {
  BIND (wd:Q1949517 AS ?receptor)


  ?receptor wdt:P703 ?taxon.
  ?receptor wdt:P682 ?bioProcess.
  ?receptor wdt:P129 ?interactsWith.
  ?receptor wdt:P680 ?molFunction.
  ?receptor wdt:P361 ?partOf.

  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }


  
}

  
