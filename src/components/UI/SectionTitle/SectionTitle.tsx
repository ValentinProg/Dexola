import styles from "./SectionTitle.module.scss";

interface SectionTitleProps {
  children: React.ReactNode;
  sectionTitleNumber: string;
}

const SectionTitle = ({ children, sectionTitleNumber }: SectionTitleProps) => {
  return (
    <div className={styles.sectionTitle}>
      <h2>{children}</h2>
      <h2>{sectionTitleNumber}</h2>
    </div>
  );
};

export default SectionTitle;
