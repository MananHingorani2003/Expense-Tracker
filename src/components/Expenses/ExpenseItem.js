import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseAttributes from "./ExpenseAttributes";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.user.date} />
        <ExpenseAttributes user={props.user} />
      </Card>
    </li>
  );
};

export default ExpenseItem;
