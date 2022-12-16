from fastapi import FastAPI
import uvicorn
import json
from pymongo import MongoClient

# import the wrappers
import wrappers.gasolina as gasolina
import wrappers.twitterWrapper as twitterWrapper
import wrappers.incidentesWrapper as incidentesW

MONGODB_CONNECTION_STRING = 'mongodb://localhost:27017'


app = FastAPI(title="API de datos masivos encadenados",
              description=''' API para obtener datos relativos a los accidentes de 
    tráfico en España, información sobre el precio de la gasolina, y 
    estado de las carreteras''',
              version="0.1.0",
              )
# API Gasolina


@app.get("/info-gasolina")
def get_gasolina():
    return json.loads(gasolina.extractData())["precios_combustibles"]


@app.get("/info-gasolina/tipo/{id}")
def get_gasolina_id(id: str):
    return json.loads(gasolina.extractData())["precios_combustibles"][id]


@app.get("/info-gasolina/dia/{id}")
def get_gasolina_dia(id: str):
    lista_precios = json.loads(gasolina.extractData())["precios_combustibles"]
    lista_result = []

    for i in lista_precios:
        lista_result.append({i: lista_precios[i][id]})
    return lista_result


@app.get("/info-gasolina/diferencia")
def get_gasolina_diferencia():
    lista_precios = json.loads(gasolina.extractData())["precios_combustibles"]
    lista_result = []

    for i in lista_precios:
        lista_result.append({
            "tipo": i,
            "precio_hoy": lista_precios[i]["hoy"],
            "precio_ayer": lista_precios[i]["ayer"],
            "diferencia": "{:.3f}".format(lista_precios[i]["hoy"] - lista_precios[i]["ayer"]),
            "tendencia": "subida" if lista_precios[i]["hoy"] - lista_precios[i]["ayer"] > 0 else "bajada"
        })
    return lista_result


@app.get("/info-incidentes")
def get_incidentes():
    return json.loads(incidentesW.extractData())["accident"]


@app.get("/info-incidentes/carretera/{id}")
def get_incidentes_carretera(id: str):
    list_result = []
    incidencias = json.loads(incidentesW.extractData())["accident"]
    for each in incidencias:
        if each["carretera"] == id:
            list_result.append(each)
    return list_result


@app.get("/info-twitter/carretera/{id}")
def get_tweets_carretera(id: str):
    tweets = twitterWrapper.twitter_search_recent_tweets(id, 7)

    return {'tweet_score': len(tweets) / 10}


@app.get("/info-historico")
def get_historico():
    client = MongoClient(MONGODB_CONNECTION_STRING)
    db = client['opendata']
    collection = db['data']
    cursor = collection.find({})
    fields = ['carretera', 'autonomia', 'causa', 'nivel', 'tipo']
    docs = [{field: doc[field] for field in fields} for doc in cursor]
    return docs


@app.get("/info-historico/carretera/{id}")
def get_historico_carretera(id: str):
    client = MongoClient(MONGODB_CONNECTION_STRING)
    db = client['opendata']
    collection = db['data']
    cursor = collection.find({'carretera': id.upper()})
    fields = ['carretera', 'autonomia', 'causa', 'nivel', 'tipo']
    docs = [{field: doc[field] for field in fields} for doc in cursor]
    return docs


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
