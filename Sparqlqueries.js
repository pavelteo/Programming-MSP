SELECT ?molecule ?mollabel ?molweight ?formula ?img ?roleLabel WHERE {
  VALUES ?molecule { 
    wd:Q167934   # Serotonin
    wd:Q407217   # DMT
    wd:Q409150   # Psilocin
    wd:Q193140   # Mescaline
    wd:Q69488    # MDMA
    wd:Q415997   # Ketanserin
  }
  
?molecule wdt:P2067 ?molweight. 
?molecule wdt:P274 ?formula. 
  
OPTIONAL { ?molecule wdt:P117 ?img. } 
OPTIONAL { ?molecule wdt:P2868 ?role. }
  
SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}
