import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const SearchResults = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {

  }, []);
  
  return (
    <div>SearchResults</div>
  )
}

export default SearchResults