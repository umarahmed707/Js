function Getvalue(){
    let cityname=document.getElementById("input").value
    let result=document.getElementById("result")
    fetch(`http://api.weatherapi.com/v1/current.json?key=fb67d12392b74d05ac993131262801&q=${cityname}`).then(function(res){
        return res.json();
    }).then(function(data){
        
        let city = data.location.name;
        let temp = data.current.temp_c;
        let country = data.location.country;

    result.innerHTML=`${city} ${country} temperature: ${temp}`
        console.log(data)
    }).catch((err)=>{
        console.log("error" +err)
    })
}