 let month = ["January", "Febuary", "March","April","May","June","July","August","September","October","November","December"]
function birthday(){
    let date = document.getElementById("birth").value
    let user = new Date(`${date} 00:00:00`)
    let today = new Date()

    today.setHours(0)
    today.setMinutes(0)
    today.getSeconds(0)
    today.getMilliseconds(0)

    let currentYear = today.getFullYear();

    let birthdayyear= new Date(`${date} 00:00:00`)
    birthdayyear.setFullYear(currentYear)

    let current ;
    let previous;
    let next;

    if(today.getTime() < birthdayyear.getTime()){
        current = today.getFullYear() - user.getFullYear();
        previous =`${birthdayyear.getDate()} ${month[birthdayyear.getMonth()]} ${birthdayyear.getFullYear()}`
        next =`${birthdayyear.getDate()} ${month[birthdayyear.getMonth()]} ${birthdayyear.getFullYear()+1}`
    }else{
        current = today.getFullYear() - user.getFullYear() -1;
        previous =`${birthdayyear.getDate()} ${month[birthdayyear.getMonth()]} ${birthdayyear.getFullYear()-1}`
        next =`${birthdayyear.getDate()} ${month[birthdayyear.getMonth()]} ${birthdayyear.getFullYear()}`


    }
    document.getElementById("result").innerHTML= `
    age : ${current}<br>
    Previous_Birthday : ${previous}<br>
    Next_Birthday : ${next}`
}

// function birthday(){
//     let date = document.getElementById("birth").value
//     let user = new Date(`${date} 00:00:00`)
//     let today =new new date()

//     today.setHours(0)
//     today.setminutes(0)
//     today.getseconds(0)
//     today.getMilliSecond(0)
// let currentYear = today.getFullYear()
//  let birthdayyear= new Date(`${date} 00:00:00`)
//  birthdayyear.setFullYear(currentYear)

//  let current;
//  let previous;
//  let next;

//  if(today.getTime() < birthdayyear.getTime()){
// current= today.getFullYear() - user.setFullYear();
// previous = `${birthdayyear.getDate()} ${month[birthdayyear.getMonth()]} ${birthdayyear.getFullYear()}`
// next =`${birthdayyear.getDate()} ${month[birthdayyear.getMonth()]} ${birthdayyear.getFullYear() +1} `
//  }else{
//     current= today.getFullYear() - user.setFullYear() -1;
// previous = `${birthdayyear.getDate()} ${month[birthdayyear.getMonth()]} ${birthdayyear.getFullYear()-1}`
// next =`${birthdayyear.getDate()} ${month[birthdayyear.getMonth()]} ${birthdayyear.getFullYear() +1} `
//  }

//  document.getElementById("result").innerHTML=`
//  Age : ${current}<br>
//  Previous :${previous}<br>
// Next :${next}`
// }