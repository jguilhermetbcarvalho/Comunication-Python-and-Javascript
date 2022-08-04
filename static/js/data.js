// Get the button and container elemnes from HTML
const button = document.getElementById('theButton')
const data = document.getElementById('info')

// Create an array of cars to send to the server:
const mensagem = 'POST enviado.'
// Create  an event listener on the button element:
button.onclick = function(){
    data.innerHTML = 'Sua solictação foi encaminhada para nosso servidor Python!'

    // Get the reciever endpoint from Python using fetch
    fetch('http://127.0.0.1:5000/receiver',
    {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
    // Stringfy the payload into JSON:
    body: JSON.stringify(mensagem)}).then(res=>{
        if(res.ok){
            return res.json()
        }else{
            alert('Something is wrong')
        }
    }).then(jsonResponse=>{
        // Log the response data in the console
        console.log(jsonResponse)
    }).catch((err)=> console.error(err));

}