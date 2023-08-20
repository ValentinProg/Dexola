import styles from "./SectionTitle.module.scss";

interface SectionTitleProps {
  children: React.ReactNode;
  sectionTitleNumber: string;
}

const SectionTitle = ({ children, sectionTitleNumber }: SectionTitleProps) => {
  return (
    <div className={styles.sectionTitle}>
      <span>{children}</span>
      <span>{sectionTitleNumber}</span>
    </div>
  );
};

export default SectionTitle;
