import styles from "./SectionTitle.module.scss";

interface SectionTitleProps {
  children: React.ReactNode;
  sectionTitleNumber: string;
}

const SectionTitle = ({ children, sectionTitleNumber }: SectionTitleProps) => {
  return (
    <h2 className={styles.sectionTitle}>
      <span>{children}</span>
      <span>{sectionTitleNumber}</span>
    </h2>
  );
};

export default SectionTitle;
