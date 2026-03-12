function Getvalue(){
    let cityname=document.getElementById("City").value
    let countryname =document.getElementById("Country")
    let result=document.getElementById("result")
    fetch(`https:api.aladhan.com/v1/timingsByCity?city=${cityname}&country=${countryname}&method=1`).then(function(res){
        return res.json();
    }).then(function(data){
result.innerHTML = `Fajr: ${data.data.timings.Fajr} <br>
Dhuhr:${data.data.timings.Dhuhr}<br>
Asr:${data.data.timings.Asr}<br>
Maghrib:${data.data.timings.Maghrib}<br>
Isha:${data.data.timings.Isha}`
        console.log(data)
    }).catch((err)=>{
        console.log("error" +err)
    })
}