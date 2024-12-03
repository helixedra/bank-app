import { useNavigate } from "react-router-dom";
import classes from "./PaginationControls.module.scss";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

function PaginationControls({ currentPage, totalItems, itemsPerPage, parentUrl }) {
  const navigate = useNavigate();
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className={classes.pagination_container}>
      <button className={classes.pagination_arrow} onClick={() => navigate(`${parentUrl}/${currentPage - 1}`)} disabled={currentPage <= 1}>
        <RiArrowLeftSLine />
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button key={i + 1} onClick={() => navigate(`${parentUrl}/${i + 1}`)} className={currentPage === i + 1 ? classes.active : ""}>
          {i + 1}
        </button>
      ))}

      <button className={classes.pagination_arrow} onClick={() => navigate(`${parentUrl}/${currentPage + 1}`)} disabled={currentPage >= totalPages}>
        <RiArrowRightSLine />
      </button>
    </div>
  );
}

export default PaginationControls;
