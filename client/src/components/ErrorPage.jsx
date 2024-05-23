// ErrorPage.js
import React from "react";
import PropTypes from "prop-types";

ErrorPage.propTypes = {
  error: PropTypes.string,
};
function ErrorPage({ error }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-red-500 text-2xl font-bold mb-4">Error</div>
      <div className="text-gray-800">{error}</div>
    </div>
  );
}

export default ErrorPage;
