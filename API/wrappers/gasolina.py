import json
import requests
from bs4 import BeautifulSoup

def extractData():
    data = dict()

    request = requests.get('https://www.dieselogasolina.com/')
    parsed_html = BeautifulSoup(request.text, 'html.parser')
    resumen_precios = parsed_html.find_all('div', {'class', 'tabla_resumen_precios'})[1]
    for precio in resumen_precios.find_all('tr'):
        precios = precio.find_all('td')
        if len(precios) < 2:
            continue

        key = precios[0].get_text().encode('ascii', errors='ignore').decode()
        for i, entry in enumerate(precios):
            entry_txt = entry.get_text()
            if i == 0:
                data[key] = dict()
            elif i == 1:
                entry_num = ''.join(x for x in entry_txt if x.isdigit() or x in [',', '.', '-']).replace(',', '.')
                data[key]['hoy'] = float(entry_num)
            elif i == 2:
                entry_num = ''.join(x for x in entry_txt if x.isdigit() or x in [',', '.', '-']).replace(',', '.')
                data[key]['ayer'] = float(entry_num)
            elif i > 3:
                print(f'Unknown entry! ({i} - {entry_txt}) Crashing...')
                exit(-1)


    return json.dumps({'precios_combustibles': data})

def main():
    data = extractData()
    print(f'{data}')

if __name__ == "__main__":
    main()
