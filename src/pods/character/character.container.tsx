import React from 'react'
import { useParams } from 'react-router-dom'
import * as api from './api'
import { createEmptyCharacter, Character } from './character.vm'
import { mapCharacterFromApiToVm } from './character.mappers'
import { CharacterComponent } from './character.component'

type CharacterParams = {
  id: string
}

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter())
  const { id } = useParams<CharacterParams>();

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id)
    const apiQuotes = await api.getQuotes(id)
    setCharacter(mapCharacterFromApiToVm(apiCharacter, apiQuotes))
  };

  const onQuotesChangeHandler = (oldQuote: string, newQuote: string) => {
    const quotes = character.quotes.map(quote => quote === oldQuote ? newQuote : quote)
    api.setQuotes(character.id, quotes)
      .then(handleLoadCharacter)
  }

  const onAddQuoteHandler = (newQuote: string) => {
    character.quotes.push(newQuote)
    api.setQuotes(character.id, character.quotes)
      .then(handleLoadCharacter)
  }

  const onDeleteQuoteHandler = (quoteToDelete: string) => {
    const quotes = character.quotes.filter(quote => quote !== quoteToDelete)
    api.setQuotes(character.id, quotes)
      .then(handleLoadCharacter)
  }

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter()
    }
  }, [])

  return <CharacterComponent character={character} onQuotesChange={onQuotesChangeHandler} onAddQuote={onAddQuoteHandler} onDeleteQuote={onDeleteQuoteHandler} />
}
