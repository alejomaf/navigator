#Prerrequisitos
#pip install bs4
#pip install requests
#pip install lxml
#pip install html.parser

from bs4 import BeautifulSoup
import requests
import json
import re
def extractData():
    websiteURL = 'https://infocar.dgt.es/etraffic/Incidencias?caracter=acontecimiento&orden=fechahora_ini%20DESC&IncidenciasOTROS=IncidenciasOTROS&IncidenciasEVENTOS=IncidenciasEVENTOS&IncidenciasRETENCION=IncidenciasRETENCION&IncidenciasPUERTOS=IncidenciasPUERTOS&IncidenciasMETEOROLOGICA=IncidenciasMETEOROLOGICA&IncidenciasRESTRICCIONES=IncidenciasRESTRICCIONES'

    response = requests.get(websiteURL, timeout=0.10)
    print(response)

    if response.status_code != 200:
        print("Fallo en la petición, abortando consulta")
        return
        
    print("Petición correcta")
    contenido = response.text
    soup = BeautifulSoup(contenido, 'html.parser')
    #print(soup.prettify())

    tablas = soup.find('td', class_ = 'nombreIncidencia bg3b').get_text()

    resultado = list()
    tabla = soup.find_all('td',  class_='nombreIncidencia')
            
    #Patrones de búsqueda
    patternRoad = r"La carretera   ([^ ]+)"
    patternSense = r"sentido ([^ ]+)"
    patternKm = r"km ([^ ]+)"
    patternKmDestino = r"al  km ([^ ]+)"
    patternDescription = r"(.*)(?<=\sen\:)"
    #crea un patron que busque el texto antes de la palabra "advertencia: "

            
        #variables para guardar los datos
    accidents = {}
    accidents['accident'] = []
        
    for each in tabla:
        match = re.search(patternRoad, each.get_text())
        matchSense = re.search(patternSense, each.get_text())
        matchKm = re.search(patternKm, each.get_text()) 
        matchDescription = re.search(patternDescription, each.get_text())            
        # Si se ha encontrado todas las coincidencias

        #No es lo mejor pero bueno
        matchKmDestino = re.search(patternKmDestino, each.get_text())
        aux = each.get_text().split("Advertencia:")
        if(len(aux) == 2):
            valorAdevertencia = aux[1]
        else:
            valorAdevertencia = "no hay advertencia"

        #Comprueba si hay km destino
        if(matchKmDestino):
            kmOrigen = matchKm.group(1)
            kmDestino = matchKmDestino.group(1)
        else:
            kmOrigen = matchKm.group(1)
            kmDestino = matchKm.group(1)
            
            # Si se ha encontrado todas las coincidencias
        if(match and matchSense and matchKm and matchDescription):
        # Añade el accidente al json
            accidents['accident'].append({
                    'carretera': match.group(1),
                    'sentido': matchSense.group(1),
                    'kmOrigen': kmOrigen,
                    'kmDestino': kmDestino,
                    'descripcion': matchDescription.group(1).strip("en: " ).lower(),
                    'advertencia': valorAdevertencia
            })
    return json.dumps(accidents)

    print(extractData())


