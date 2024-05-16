window.addEventListener('keypress', function(e){
    if (e.key === 'f') {
        searchedWindow = window.open("https://www.w3schools.com", "_blank");
        window.close();
    }else if(e.key === 'g'){
        console.log('You pressed the "g" key');
    }else if(e.metaKey && e.key === 'e'){
        window.open("https://www.google.com", "_blank");
    }
}, false);
