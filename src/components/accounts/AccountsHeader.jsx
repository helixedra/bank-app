import IconButton from "../shared/IconButton";
import Button from "../shared/Button";
import { RiBarChartLine } from "@remixicon/react";
import Analytics from "../analytics/Analytics";
import { useState } from "react";
import Modal from "../shared/Modal";

export default function AccountsHeader({ account, action }) {
  const [analyticsModal, setAnalyticsModal] = useState(false);

  function toggleAnalyticsModal() {
    setAnalyticsModal((prev) => !prev);
  }

  return (
    <>
      <div className="accounts_header">
        <div className="accounts_header__account_switcher">
          <Button style={"secondary"} action={action}>
            <span className="icon_stack">{account.icon}</span>
            <span>{account.name}</span>
          </Button>
        </div>
        <div className="accounts_header__chart_button">
          <IconButton style={"secondary"} icon={<RiBarChartLine />} action={toggleAnalyticsModal} />
        </div>
      </div>
      <Modal visibility={analyticsModal} handler={toggleAnalyticsModal} title="Analytics" header={true}>
        <div className="responsive_container">
          <Analytics heading={false} />
        </div>
      </Modal>
    </>
  );
}
