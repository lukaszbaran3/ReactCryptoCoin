import "../css/Pagination.css";

const Pagination = ({ currentPage, prevPage, nextPage }) => {
  return (
    <div className="pagination">
      <button
        className="crypto-info-button"
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        <i className="fa-solid fa-chevron-left"></i> Previous Page
      </button>
      <button
        className="crypto-info-button"
        onClick={nextPage}
        disabled={currentPage === 3}
      >
        Next Page <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};
export default Pagination;
