document.addEventListener('DOMContentLoaded', function() {
    

    const button = document.getElementById('gen');
    const outputurl = document.getElementById('outputurl');
    const code = document.getElementById('code');

    button.addEventListener('click', function() {
        const inputurl = document.getElementById('inputurl').value;
        console.log(inputurl)
        if (inputurl.trim() === '') {
            alert('Oopsy!!, Please enter URL.');
        }
        else {
            const requestBody = {
                url: inputurl
            };
            const options = {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer mA4qhb4hTlaLGOfoUuQJodhr',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            };
          
            fetch('https://api.dub.co/links?workspaceId=ws_clwvjjc4w0000es8tijnh0v5q', options)
            .then(response => response.json())
            .then(response => {
                if (response.shortLink && response.qrCode){
                    outputurl.value = response.shortLink;
                    code.value = response.qrCode;
                }
                else{
                    alert("Failed to shorten URL");
                }
            })
            .catch(err => {
                console.error(err);
                alert('An error occurred while shortening the URL');
            });
        }
    });

                
            
});