import * as apiModel from './api/character.api-model'
import * as viewModel from './character.vm'
import * as quoteApiModel from './api/quote.api-model'

export const mapCharacterFromApiToVm = (
  character: apiModel.Character,
  apiQuotes: quoteApiModel.Quote,
): viewModel.Character => {
  return ({
    ...character,
    id: character.id,
    name: character.name,
    image: character.image,
    gender: character.gender,
    location: character.location.name,
    status: character.status,
    species: character.species,
    origin: character.origin.name,
    quotes: apiQuotes.content
  })
}

export const mapCharacterFromVmToApi = (character: viewModel.Character): apiModel.Character =>
  (({
    ...character,
    id: character.id,
    name: character.name,
    image: character.image,
    gender: character.gender,
    location: character.name,
    status: character.status,
    species: character.species,
    origin: character.origin,
  } as unknown) as apiModel.Character)
