let dataURL = '../data/cars.json';
let req = new XMLHttpRequest();

req.open('GET', dataURL);
req.responseType = 'json';
req.send();

req.onload = () => {
    const data = req.response;
    const cars = data['cars'];
    const myList = document.createElement('ul');

    for (let i = 0; i < cars.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `${cars[i].Make} ${cars[i].Model} ${cars[i].Year}`;
        myList.appendChild(listItem);
    };

    document.getElementById('myCars').appendChild(myList);
};