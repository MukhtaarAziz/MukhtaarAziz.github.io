
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4){
        document.getElementById('result').innerHTML = xhr.response;
        var oglasi = JSON.parse(xhr.responseText);
        alert(oglasi)
    }
};
xhr.open('GET', 'https://dev-mukhtaar.000webhostapp.com/settings/skills.json');
xhr.send();