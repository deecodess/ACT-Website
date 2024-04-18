import styles from "./Button.module.scss";

const Button = ({ children, color, textcolor }) => {
  return (
    <button
      className={styles.button}
      style={{ backgroundColor: color, color: textcolor }}
    >
      {children}
    </button>
  );
};

export default Button;
