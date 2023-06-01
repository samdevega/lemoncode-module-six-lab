import { Character } from './character.api-model'
import { Quote } from 'common/models'
import axios from 'axios'

export const getCharacter = async (id: string): Promise<Character> => {
  return axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  .then(response => {
    return response.data
  })
  .catch(error => {
    console.error(error)
    return []
  })
}

export const getQuotes = async (characterId: string): Promise<Quote> => {
  return axios.get(`http://localhost:3000/api/quotes/${characterId}`)
  .then(response => response.data)
  .catch(error => {
    if (error.response.status !== 404) {
      console.error(error.response.data)
    }
    return {
      id: characterId,
      content: []
    }
  })
}

export const setQuotes = async (characterId: string, content: Array<string>): Promise<void> => {
  await axios.get(`http://localhost:3000/api/quotes/${characterId}`)
  .then(response => {
    return axios.patch(`http://localhost:3000/api/quotes/${characterId}`, { content })
  })
  .catch(error => {
    return axios.post(`http://localhost:3000/api/quotes`, { id: characterId, content })
  })
}
