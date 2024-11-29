import Button from "./Button";
import classes from "./TransactionsShortList.module.scss";

function ListItem() {}

export default function TransactionsShortList({ data }) {
  const transations = data.map((item) => {
    <ListItem {...item} />;
  });

  return (
    <div className={`${classes.transactions} col-8 p-6 transactions_shortlist`}>
      <div className={classes.transactions_header}>
        <div className={classes.transactions_header_title}>
          Recent transactions
        </div>
        <div className={classes.transactions_header_actions}>
          <Button type="secondary" action={""}>
            More
          </Button>
        </div>
      </div>

      <div className={classes.transactions_content}>{transations}</div>
    </div>
  );
}
