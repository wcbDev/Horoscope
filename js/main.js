//Add birthday input to variable



//Create 12 conditionals based on dates
// Aries Dates: 03/ 21-04/ 19
// Taurus Dates: 04/ 20-05/ 20
// Gemini Dates: 05/ 21-06/ 20
// Cancer Dates: 06/ 21- 07/ 22
// Leo Dates:  07/ 23- 08/ 22
// Virgo Dates:  08/ 23- 09/ 22
// Libra Dates:  09/ 23- 10/ 22
// Scorpio Dates:  10/ 23- 11/ 21
// Sagittarius Dates:  11/ 22- 12/ 21
// Capricorn Dates:  12/ 21- 01/ 20
// Aquarius Dates:  01/ 21- 02/ 18
// Pisces Dates:  02/ 19-03/ 20
document.querySelector('#submit').addEventListener('click',zodiacReadOut)

function zodiacReadOut() {
  let userDate = document.querySelector('#birthdate').value
  const month = new Date (userDate).getMonth() + 1
  const day = new Date (userDate).getDay() + 1

  if ((month == 3 && day >= 21) || (month == 4 && day <= 19) ){
    document.querySelector("#placeToPutResult").innerText = 'Aries'
  }

  else if ((month == 4 && day >= 20) || (month == 5 && day <= 20) ){
    document.querySelector("#placeToPutResult").innerText = 'Taurus'
  }

  else if ((month == 5 && day >= 21) || (month == 6 && day <= 20) ){
    document.querySelector("#placeToPutResult").innerText = 'Gemini'
  }

  else if ((month == 6 && day >= 21) || (month == 7 && day <= 22) ){
    document.querySelector("#placeToPutResult").innerText = 'Cancer'
  }

  else if ((month == 7 && day >= 23) || (month == 8 && day <= 22) ){
    document.querySelector("#placeToPutResult").innerText = 'Leo'
  }

  else if ((month == 8 && day >= 23) || (month == 9 && day <= 22) ){
    document.querySelector("#placeToPutResult").innerText = 'Virgo'
  }

  else if ((month == 9 && day >= 23) || (month == 10 && day <= 22) ){
    document.querySelector("#placeToPutResult").innerText = 'Libra'
  }

  else if ((month == 10 && day >= 23) || (month == 11 && day <= 21) ){
    document.querySelector("#placeToPutResult").innerText = 'Scorpio'
  }

  else if ((month == 11 && day >= 22) || (month == 12 && day <= 21) ){
    document.querySelector("#placeToPutResult").innerText = 'Sagittarius'
  }

  else if ((month == 12 && day >= 22) || (month == 1 && day <= 20) ){
    document.querySelector("#placeToPutResult").innerText = 'Capricorn'
  }

  else if ((month == 1 && day >= 21) || (month == 2 && day <= 18) ){
    document.querySelector("#placeToPutResult").innerText = 'Aquarius'
  }

  else {
    document.querySelector("#placeToPutResult").innerText = 'Pisces'
  }
}

//Output Sign to DOM