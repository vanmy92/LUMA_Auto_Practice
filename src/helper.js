const fs = require('fs')
const globalMap = new Map()

module.exports = {
  setStringVariable: function (value, variable) {
    if (globalMap.has(variable)) {
      globalMap.delete(variable)
      globalMap.set(variable, value)
    } else {
      globalMap.set(variable, value)
    }
  },
  expandValue: function (expression) {
    let originalExp = expression
    let varStart = expression.indexOf('${')
    if (varStart >= 0) {
      let varName = ''
      let expanded = ''
      while (varStart >= 0) {
        const varEnd = originalExp.indexOf('}', varStart + 2)
        if (varEnd > varStart + 1) {
          varName = originalExp.substring(varStart + '${'.length, varEnd)
          const value = module.exports.getStringVar(varName)
          expanded = originalExp.substring(0, varStart) + value + originalExp.substring(varEnd + 1)
          // console.log(expanded)
        }
        originalExp = expanded
        varStart = expanded.indexOf('${')
      }
      return expanded
    }
    return originalExp
  },
  GetDataset: function (fileName) {
    const isSet = fs.existsSync(`${fileName}.json`)
    if (!isSet) {
      console.warn('Please ensure you have a copy of the necessary data file ' + fileName + ' locally.')
      process.exit(1)
    }
    return JSON.parse(fs.readFileSync(`${fileName}.json`, 'utf8'))
  },

  GetJsonDataAsString: function (fileName) {
    const isSet = fs.existsSync(`${fileName}.json`)
    if (!isSet) {
      console.warn('Please ensure you have a copy of the necessary data file ' + fileName + ' locally.')
      process.exit(1)
    }
    return fs.readFileSync(`${fileName}.json`, 'utf8')
  },
  
}
