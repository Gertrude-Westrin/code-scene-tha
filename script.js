/*
Using CodeScene's public REST API, Write a program/script which;
 1. lists all files with a Code Health lower than 5.0 and that are also,
 2.  In the top 20 of the most modified files ("Change Frequency").
*/

//Fetch data from API
let data = fetch('https://api.codescene.io/v2/projects/52805/analyses/2288648', {
    headers: {
        'Authorization': `Bearer <TOKEN>`
    }
})
//Convert response to a jason file. 
.then(response => response.json())
.then(data => {
   console.log(data)
})
.catch(error => {
   console.log('Error fetching data: ', error)
})