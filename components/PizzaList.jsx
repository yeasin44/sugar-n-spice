import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The best Pizza in town</h1>
      <p className={styles.desc}>The best and the delicious Pizza ever!</p>
      <div className={styles.wrapper}>
        {pizzaList?.map((pizza) => (
          <PizzaCard pizza={pizza} key={pizza._id}></PizzaCard>
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
