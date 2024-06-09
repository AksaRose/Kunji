document.addEventListener('DOMContentLoaded', function() {
    

    const button = document.getElementById('gen');
    const outputurl = document.getElementById('outputurl');
    const code = document.getElementById('code');
    const imagecont = document.getElementById('image-container');

    const image = document.createElement('img');
    image.src = "kunjiicon.png";
    image.width = '140';
    image.height = '159';
    image.alt = 'Kunji Icon';

    imagecont.appendChild(image);

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
                    Authorization: 'Bearer <Your-Token>',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            };
          
            fetch('https://api.dub.co/links?workspaceId=<Your-Workspace-ID>', options)
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