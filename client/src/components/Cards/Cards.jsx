import style from "./Cards.module.css";
import Card from "../Card/Card";

const Cards = () => {
  return(
    <div className={style.cardContainer}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
  )
};

export default Cards