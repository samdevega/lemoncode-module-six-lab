export interface Character {
  id: string
  name: string
  image: string
  gender: string
  location: string
  status: string
  species: string
  origin: string
  quotes?: string[]
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  image: '',
  gender: '',
  location:'',
  status: '',
  species: '',
  origin: '',
  quotes: [],
});
