export function show(data)
{
    let item = document.getElementById('weather-list');
    let data_item = '';

    item.innerHTML = '';

    for(let i=0;i<data.length;i++) {
        let tempSign = data[i].country == 'US' ? '°F' : '°C';
        let windSign = data[i].country == 'US' ? 'mph' : 'km/h';
        data_item += `<ul><li>${data[i].city}: ${data[i].temp} ${tempSign}, ${data[i].wind} ${windSign}</li></ul>`;
    }
    item.innerHTML = data_item;
}