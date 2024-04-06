const fs = require('fs');
//? Read the context of `input.txt`
//  const data = fs.readFileSync('./input.txt',
//  	{ encoding: 'utf8', flag: 'r' });
//  console.log(data);

//? Append “First modification” to the content and write it to `output1.txt`
/*
fs.appendFile('output1.txt', 'First modification', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
*/
//? Read `output1.txt` and append “SEcond modification” to the file `output2.txt`
/*
// Path to the output1
const inputFilePath = 'output1.txt';

 // Path to the outpu2
const outputFilePath = 'output2.txt';

 // Read the content of the output1
fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
   // Append "Second modification" to the content
	fs.appendFile(outputFilePath, 'Second modification', function (err) {
	if (err) throw err;
	console.log('Saved!');
  	});
});
*/
//? Finally read `output2.txt` and print to the console
/*
fs.readFile("output2.txt",function(err,data){
    if(err){
        console.log("error occured",err);
    }
    console.log("Content of file output2 is:",data.toString());
})
*/


