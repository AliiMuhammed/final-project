import Pagination from "react-bootstrap/Pagination";

function Paginate() {
  return (
    <Pagination className="container  d-flex justify-content-center text-warning">
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default Paginate;
