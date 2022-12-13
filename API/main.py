from fastapi import FastAPI
import uvicorn
import json

# import the wrappers
import wrappers.gasolina as gasolina
import wrappers.twitterWrapper as twitterWrapper


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


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
