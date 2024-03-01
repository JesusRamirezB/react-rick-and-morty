/* eslint-disable react/prop-types */
import './Pagination.css'

function Pagination(props) {
    const { page, prevPage, nextPage } = props;
  return (
    <div className="buttons">
      <button onClick={prevPage} disabled={page === 1}>
        Previous
      </button>
      <span>Page {page}</span>
      <button onClick={nextPage}>Next</button>
    </div>
  );
}

export default Pagination;
