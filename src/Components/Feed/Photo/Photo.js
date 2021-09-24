import React from "react";
import { useParams } from "react-router";
import { PHOTO_GET } from "../../../api";
import useFetch from "../../../Hooks/useFetch";
import Error from "../../Helper/Error";
import Loading from "../../Helper/Loading";
import PhotoContent from "./PhotoContent";

function Photo() {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent data={data} single={true} />
      </section>
    );
  return <div></div>;
}

export default Photo;
