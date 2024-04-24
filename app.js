fetch('https://api.codescene.io/v2/projects/52805/analyses/2288648', {
  headers: {
      'Authorization': `Bearer AMoPKvSBNgUDbUnx1m1NikFtlzick3znXQcnV-ooKmE.Bfqv0P-ZaxD8lmAQlbTkaeuf6ZKjetdTXwpfW1Nv6HE`
  }
})
  .then(response => response.json())
  .then(data => {
  //  console.log(data)
  //})
  //.catch(error => {
  //   console.log('Error fetching data: ', error)
 // })

 //I have created my own array of objects in order to list all files with code health less than 5 and top 20 chnage frequency. Otherwise this would be linked to a json file with the real data from the response.
 
    let files = [
      
      {
        filename: "file1.js",
        code_health: 4.2,
        change_frequency: 20
      },
      {
        filename: "file2.js",
        code_health: 3.8,
        change_frequency: 15
      },
      {
        filename: "file3.js",
        code_health: 5.5,
        change_frequency: 30
      },
    ];
    
// Check if files array is not undefined and not empty
if (files && files.length > 0) {
  // Sort files by Change Frequency
  files.sort((a, b) => b.change_frequency - a.change_frequency);

  // Filter files with Code Health lower than 5.0 and in the top 20 of Change Frequency
  const filteredFiles = files.filter(file => file.code_health < 5.0 && files.indexOf(file) < 20);

// Print header
console.log("# File           # Code Health   # Change Frequency");

// Print filtered files with formatted output
filteredFiles.forEach(file => {
  const fileName = (file && file.filename) ? file.filename.toString().padEnd(15) : 'N/A'.padEnd(15);
  const codeHealth = (file && file.code_health) ? file.code_health.toFixed(1).toString().padEnd(15) : 'N/A'.padEnd(15);
  const changeFrequency = (file && file.change_frequency) ? file.change_frequency.toString() : 'N/A';
  console.log(`${fileName} ${codeHealth} ${changeFrequency}`);
});
} else {
console.log("No valid files found in the response.");
}
})
.catch(error => {
  console.log('Error fetching data: ', error)
});
