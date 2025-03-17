import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, setFilter }) => {
  return (
    <div className={styles.searchBox}>
      <label className={styles.label}>Search:</label>
      <input className={styles.input} type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
    </div>
  );
};

export default SearchBox;
