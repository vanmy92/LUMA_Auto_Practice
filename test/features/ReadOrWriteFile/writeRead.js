import fs from "fs";
class WriteReadPage {
  writeFileWithCallback =  async (path, data) => {
    return fs.writeFileSync(path, data);
  }
  
  readFileWithCallback= async (path) =>{
    return fs.readFileSync(path, "utf8");
  }

}

export default new WriteReadPage();
