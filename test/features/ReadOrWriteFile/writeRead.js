import fs from "fs";
import { Options } from "@wdio/types";
import chai from "chai";

class WriteReadPage {
  writeFileWithCallback(path, data) {
    return fs.writeFileSync(path, data);
  }
  
  readFileWithCallback(path) {
    return fs.readFileSync(path, "utf8");
  }

}

export default new WriteReadPage();
