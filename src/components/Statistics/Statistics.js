import s from "./Statistics.module.css";
import PropTypes from "prop-types";
import { getRandomHexColor } from "../../utils";

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title ? <h2 className={s.title}>{title}</h2> : ""}

      <ul className={s.statList}>
        {stats.map((stat) => (
          <li
            className={s.statItem}
            key={stat.id}
            style={{ backgroundColor: getRandomHexColor() }}>
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage + "%"}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

export default Statistics;
