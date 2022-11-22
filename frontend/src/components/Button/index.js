import styles from "./Button.module.css";

const Button = ({ title, className, color, type, onClick }) => {
  return (
    <button className={`${styles[className]} ${styles[color]}`} type={type} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
