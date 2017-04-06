var header = document.querySelector('header');
var section = document.querySelector('section');

var getURL = 'https://raw.githubusercontent.com/EJefferyCode/files/master/fileone.json';
var grab = new XMLHttpRequest();
grab.open('GET', getURL);
grab.responseType = 'json';
grab.send();

grab.onload = function () {
    var companyOrange = grab.response;
    fillHeader(companyOrange);
    showEmployed(companyOrange);
}

function fillHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['companyName'];
    header.appendChild(myH1);
    
    var myPara = document.createElement('p');
    myPara.textContent = jsonObj['companyCity'];
    header.appendChild(myPara);
    
    var myInfo = document.createElement('p');
    myInfo.textContent = jsonObj['contactInfo'];
    header.appendChild(myInfo);
    
    var myPhone = document.createElement('h3');
    myPhone.textContent = jsonObj['contactPhone'];
    header.appendChild(myPhone);
}

function showEmployed(jsonObj) {
    var employees = jsonObj['employee'];
    
    for(i = 0; i < employees.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');
        
        myH2.textContent = employees[i].name;
        myPara1.textContent = 'Main Office: ' + employees[i].office;
        myPara2.textContent = '212-917-1347 ext ' + employees[i].ext;
        myPara3.textContent = 'Genre Focus:';
        
        var genres = employees[i].genres;
        for (j = 0; j < genres.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = genres[j];
        myList.appendChild(listItem);
        }
        
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        section.appendChild(myArticle);
        
    }
}



















