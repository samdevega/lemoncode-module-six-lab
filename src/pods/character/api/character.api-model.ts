export interface Character {
  id: string
  type: string
  name: string
  image: string
  gender: string
  status: string
  species: string
  origin: {
    name: string
  }
  location: {
    name: string
  }
}
