import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchPhoto } from "../../../Store/photo";
import Error from "../../Helper/Error";
import Head from "../../Helper/Head";
import Loading from "../../Helper/Loading";
import PhotoContent from "./PhotoContent";

function Photo() {
  const { id } = useParams();
  const { data, error, loading } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPhoto(id));
  }, [id, dispatch]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single={true} />
      </section>
    );
  return <div></div>;
}

export default Photo;
