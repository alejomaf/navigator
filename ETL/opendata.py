import requests
from pymongo import MongoClient
import pymongo


def download_data():
    # Data extracted from https://opendata.esri.es/datasets/ComunidadSIG::incidencias-de-tr%C3%A1fico-espa%C3%B1a/about
    print('Downloading data from OpenData Esri API...')
    r = requests.get('https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/incidencias_DGT/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json')

    print(f'Got {r.status_code} as status code')
    if r.status_code != 200:
        print('Exiting because of incorrect status code')
        return None

    print('Processing data...')

    json_data = r.json()
    raw_data = [x['attributes'] for x in json_data['features']]

    print(f'Processed {len(raw_data)} rows of data')
    return raw_data


def store_data(connection_string, db_name, collection_name, data):
    # Create conection using MongoClient
    print('Opening MongoDB connection...')
    client = MongoClient(connection_string)

    # Create database 
    print('Creating/loading database...')
    db = client[db_name]

    # Create collection 
    try:
        db.validate_collection(collection_name)  # Try to validate a collection
        print('Collection already exists')
    except pymongo.errors.OperationFailure:  # If the collection doesn't exist
        print('Creating collection...')
        collection = db[collection_name]

        # Insert all data
        print('Inserting data into collection...')
        collection.insert_many(data)
        print('Insertion succesfull')


if __name__ == '__main__':
    # Download database with REST API
    data = download_data()

    # Save data into MONGODB database
    CONNECTION_STRING = 'mongodb://localhost:27017'
    db_name = 'opendata'
    collection_name = 'data'
    if data:
        store_data(CONNECTION_STRING, db_name, collection_name, data)

