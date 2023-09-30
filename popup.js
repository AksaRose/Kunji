async function getLink(){
    var link = document.getElementById("link").value;
    const api_url=`https://yoursite/yourls-api.php?timestamp=$timestamp&signature=$signature&action=1002a612b4${link}`
    const response=await fetch(api_url)
    const data=await response.json()
    res=data.result.full_short_link2
    document.getElementById('mini-link').value=res
    console.log(res)
}
document.getElementById('gen').addEventListener('click',getLink)
