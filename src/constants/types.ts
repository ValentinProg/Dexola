export interface ICard {
  cardImg: string;
  cardTitle:string;
  cardTitleNumber: string;
  cardText: string;
}

export interface INFT {
  id: number;
  avatar: string;
  name: string;
  level: string;
  games: number;
  wins: number;
  price: number;
}

export interface ILink {
  id: number;
  name: string;
  to: string;
  imgPath: string;
}
  