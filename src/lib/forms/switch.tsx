import styles from "./switch.module.scss";

export default function Switch() {
  return (
    <label className={styles.switch}>
      <input type="checkbox" />
      <span className={styles.slider} />
    </label>
  );
}
