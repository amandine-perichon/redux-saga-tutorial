import axios from 'axios'

export const requestQuote = () => {
  return axios.get('http://quotes.stormconsultancy.co.uk/quotes/1.json')
}
