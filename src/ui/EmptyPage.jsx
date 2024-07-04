/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function EmptyPage({ page, message }) {
  return (
    <div className="px-3 py-4">
      <Link className="linkButton" to="/">
        {" "}
        &larr; Back to menu
      </Link>

      <p className="mt-7 font-semibold">
        {`Your ${page} is EMPTY. ${message}`}
      </p>
    </div>
  );
}
export default EmptyPage;
