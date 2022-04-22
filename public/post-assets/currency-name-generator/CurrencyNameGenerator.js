import { useState } from 'react'

const CurrencyNameGenerator = () => {
  let [generatedName, setGeneratedName] = useState('(click the button to generate a currency Name)')

  function generateCurrencyName() {
    let lowerCaseLetters = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ]
    let startPrefex = 'illion'
    let endPrefex = 'illionare'

    let currencyName = ''

    const numOfWords = Math.floor(Math.random() * 7) + 3

    for (let i = 0; i <= numOfWords; i++) {
      let randomIndex = Math.floor(Math.random() * lowerCaseLetters.length)
      let randomLetter = lowerCaseLetters[randomIndex]
      currencyName += randomLetter + startPrefex + ' '
      lowerCaseLetters.splice(randomIndex, 1)
    }

    let randomIndex = Math.floor(Math.random() * lowerCaseLetters.length)
    let randomLetter = lowerCaseLetters[randomIndex]
    currencyName += randomLetter + endPrefex + ' '

    setGeneratedName(currencyName)
  }

  return (
    <div className="text-center">
      <p>{generatedName}</p>
      <button onClick={generateCurrencyName}>Generate</button>
    </div>
  )
}

export default CurrencyNameGenerator
