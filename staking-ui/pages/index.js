import styles from "../styles/Home.module.css";
import Header from "../components/Header.js";
import StakeDetails from "../components/StakeDetails";
import StakeForm from "../components/StakeForm";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <StakeDetails />
      <StakeForm />
    </div>
  );
}
