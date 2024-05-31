const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
  await fs.writeFile(fileName, fileContent);
  console.log("File Created and Added Content Successfully...");
};
writeFile(fileName, fileContent);

module.exports = { writeFile };
