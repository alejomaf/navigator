#!/bin/bash

echo "Instalando todas las librerías necesarias para el funcionamiento de la API"
pip install fastapi
pip install uvicorn
pip install bs4
pip install tweepy
pip install requests
pip install lxml
pip install html.parser

echo "Descargando todas las dependencias para Node JS"
npm install --prefix ./navigator

echo "Levantando API"
/usr/bin/python3 API/main.py &

echo "Levantando servicio Web"
npm start --prefix navigator/

