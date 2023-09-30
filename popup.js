async function getLink(){
    var link = document.getElementById("inputurl").value;
    const api_url=`https://api.shrtco.de/v2/shorten?url=${link}`
    const response=await fetch(api_url)
    const data=await response.json()
    res=data.result.full_short_link2
    document.getElementById('outputurl').value=res
    console.log(res)
}
document.getElementById('gen').addEventListener('click',getLink)
