import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import styles from "./TopNFTsSection.module.scss";
import { NFTs } from "../../../constants/constants";

const TopNFTsSection = () => {
  return (
    <>
      <SectionTitle sectionTitleNumber="02">Top NFTs</SectionTitle>

      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th><h3>NFT Name</h3></th>
              <th><h3>Rarity Level</h3></th>
              <th><h3>Total games</h3></th>
              <th><h3>Games Won</h3></th>
              <th><h3>Price (ETH)</h3></th>
            </tr>
          </thead>
          <tbody>
            {NFTs.map((NFT) => (
              <tr key={NFT.id}>
                <td>
                  <img src={NFT.avatar} className={styles.avatar} />
                </td>
                <td data-cell="name">{NFT.name}</td>
                <td data-cell="rarity">{NFT.level}</td>
                <td data-cell="total games">{NFT.games}</td>
                <td data-cell="games won">{NFT.wins}</td>
                <td data-cell="price">{NFT.price}</td>
              </tr>
            ))
            
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TopNFTsSection;
