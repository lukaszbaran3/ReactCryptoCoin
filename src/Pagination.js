const Pagination = ({ currentPage, prevPage, nextPage }) => {
    return (
      <div>
        <button
          className="crypto-info-button"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <button
          className="crypto-info-button"
          onClick={nextPage}
          disabled={currentPage === 3}
        >
          Next Page
        </button>
      </div>
    );
  };
  export default Pagination