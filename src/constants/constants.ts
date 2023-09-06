import LegendaryArtifact from "../assets/TableAvatars/LegendaryArtifact.png";
import EpicWarrior from "../assets/TableAvatars/EpicWarrior.png";
import MysticSpellbook from "../assets/TableAvatars/MysticSpellbook.png";
import CommonPotion from "../assets/TableAvatars/CommonPotion.png";
import HeroicBlade from "../assets/TableAvatars/HeroicBlade.png";

import cardImg1 from "../assets/CardImgs/cardImg1.png";
import cardImg2 from "../assets/CardImgs/cardImg2.png";
import cardImg3 from "../assets/CardImgs/cardImg3.png";

import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import discord from "../assets/discord.svg";
import telegram from "../assets/telegram.svg";

import b1Img1 from "../assets/HeroImgsB1/b1i1.png";
import b1Img2 from "../assets/HeroImgsB1/b1i2.png";
import b1Img3 from "../assets/HeroImgsB1/b1i3.png";
import b1Img4 from "../assets/HeroImgsB1/b1i4.png";
import b1Img5 from "../assets/HeroImgsB1/b1i5.png";

import b2Img1 from "../assets/HeroImgsB2/b2i1.png";
import b2Img2 from "../assets/HeroImgsB2/b2i2.png";
import b2Img3 from "../assets/HeroImgsB2/b2i3.png";
import b2Img4 from "../assets/HeroImgsB2/b2i4.png";
import b2Img5 from "../assets/HeroImgsB2/b2i5.png";

import { ICard } from "./types";
import { INFT } from "./types";
import { ILink } from "./types";

export const cardsArr: ICard[] = [
  {
    cardImg: cardImg1,
    cardTitle: "STRU Token sale",
    cardTitleNumber: "01",
    cardText:
      "The StarRunner Token the exclusive crypto currency fueling the adventure of the Play-to-Earn sensation.",
  },
  {
    cardImg: cardImg2,
    cardTitle: "Stakinkg",
    cardTitleNumber: "02",
    cardText:
      "Join a thriving community of stakers, united by their passion for exploration, strategy, and gaming.",
  },
  {
    cardImg: cardImg3,
    cardTitle: "NFT minting",
    cardTitleNumber: "03",
    cardText:
      "Every StarRunner NFT tells a story - YOUR story. This NFT encapsulates the essence of your journey like never before.",
  },
];

export const NFTs: INFT[] = [
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

export const links: ILink[] = [
  {
    id: 1,
    name: "facebook",
    to: "https://www.facebook.com/",
    imgPath: facebook,
  },
  {
    id: 2,
    name: "instagram",
    to: "https://www.instagram.com/",
    imgPath: instagram,
  },
  {
    id: 3,
    name: "discord",
    to: "https://discord.com/",
    imgPath: discord,
  },
  {
    id: 4,
    name: "telegram",
    to: "https://telegram.org/",
    imgPath: telegram,
  },
];

export const imgArrayFirsrtBlock: string[] = [
  b1Img1,
  b1Img2,
  b1Img3,
  b1Img4,
  b1Img5,
];

export const imgArraySecondBlock: string[] = [
  b2Img1,
  b2Img2,
  b2Img3,
  b2Img4,
  b2Img5,
];

export const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const regPhone =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
export const regPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
