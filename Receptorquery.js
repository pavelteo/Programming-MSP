SELECT DISTINCT ?receptorLabel ?group ?subType ?item ?itemLabel
      WHERE {
        BIND(wd:Q1949517 AS ?receptor)

        {
          ?receptor wdt:P681 ?item . # cell component - information regarding the structure of the receptor and location
          BIND("structure" AS ?group)
          BIND("cell_component" AS ?subType)
        }
        UNION
        {
          ?receptor wdt:P361 ?item . # gives more advanced information about the nature of the receptor (e.g. G-coupled_
          BIND("structure" AS ?group)
          BIND("part_of" AS ?subType)
        }
        UNION
        {
          ?receptor wdt:P680 ?item . # molecular function - it is the main "query" for understanding ligand binding
          BIND("function" AS ?group)
          BIND("molecular_function" AS ?subType)
        }
        UNION
        {
          ?receptor wdt:P682 ?item . # biological process - for behavioral implications, sleep, pain, hunger etc. 
          BIND("function" AS ?group)
          BIND("biological_process" AS ?subType)
        }

        SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
      }

  
