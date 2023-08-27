import LegendaryArtifact from "../assets/LegendaryArtifact.png";
import EpicWarrior from '../assets/EpicWarrior.png'
import MysticSpellbook from '../assets/MysticSpellbook.png'
import CommonPotion from '../assets/CommonPotion.png'
import HeroicBlade from '../assets/HeroicBlade.png'

interface NFTs {
  id: number;
  avatar: string;
  name: string;
  level: string;
  games: number;
  wins: number;
  price: number;
}

const NFTs: NFTs[] = [
  {
    id: 1,
    avatar: LegendaryArtifact,
    name: "Legendary Artifact",
    level: "Legendary",
    games: 189,
    wins: 125,
    price: 2.5,
  },
  {
    id: 2,
    avatar: EpicWarrior,
    name: "Epic Warrior",
    level: "Rare",
    games: 134,
    wins: 100,
    price: 1.5,
  },
  {
    id: 3,
    avatar: MysticSpellbook,
    name: "Mystic Spellbook",
    level: "Common",
    games: 133,
    wins: 43,
    price: 1.2,
  },
  {
    id: 4,
    avatar: CommonPotion,
    name: "Common Potion",
    level: "Heroic",
    games: 87,
    wins: 23,
    price: 2.8,
  },
  {
    id: 5,
    avatar: HeroicBlade,
    name: "Heroic Blade",
    level: "Epic",
    games: 56,
    wins: 15,
    price: 0.5,
  },
];

export default NFTs;


export const regEmail = (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
export const regPhone = (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/);