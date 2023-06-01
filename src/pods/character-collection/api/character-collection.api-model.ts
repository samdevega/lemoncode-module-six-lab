export interface CharacterEntityApi {
  id: string;
  type: string;
  name: string;
  image: string;
  gender: string;
  status: string;
  location: {
    name: string
  };
}
