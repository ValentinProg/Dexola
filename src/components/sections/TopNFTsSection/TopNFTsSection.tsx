import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import styles from "./TopNFTsSection.module.scss";
import NFTs from "../../../constants/constants";

const TopNFTsSection = () => {
  return (
    <>
      <SectionTitle sectionTitleNumber="02">Top NFTs</SectionTitle>

      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>NFT Name</th>
              <th>Rarity Level</th>
              <th>Total games</th>
              <th>Games Won</th>
              <th>Price(ETH)</th>
            </tr>
          </thead>
          <tbody>
            {NFTs.map((NFT) => (
              <tr key={NFT.id}>
                <td data-cell="avatar">
                  <img src={NFT.avatar} className={styles.avatar} />
                </td>
                <td data-cell="name">{NFT.name}</td>
                <td data-cell="level">{NFT.level}</td>
                <td data-cell="games">{NFT.games}</td>
                <td data-cell="wins">{NFT.wins}</td>
                <td data-cell="price">{NFT.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TopNFTsSection;
