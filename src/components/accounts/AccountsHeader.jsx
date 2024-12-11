import IconButton from "../shared/IconButton";
import Button from "../shared/Button";
import { RiBarChartLine } from "@remixicon/react";

export default function AccountsHeader({ account, action }) {
  return (
    <div className="accounts_header">
      <div className="accounts_header__account_switcher">
        <Button style={"secondary"} action={action}>
          <span className="icon_stack">{account.icon}</span>
          <span>{account.name}</span>
        </Button>
      </div>
      <div className="accounts_header__chart_button">
        <IconButton style={"secondary"} icon={<RiBarChartLine />} />
      </div>
    </div>
  );
}
