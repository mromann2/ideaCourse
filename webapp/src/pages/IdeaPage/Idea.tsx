import { useParams } from "react-router-dom";
import { Segment } from "../../components/Segment/Segment";
import { type ideaRouteParamsType } from "../../lib/routes";
import { trpc } from "../../lib/trpc";
import css from "./ideaPage.module.scss";

export function Idea() {
  const { ideaNick } = useParams() as ideaRouteParamsType;
  const { data, error, isLoading, isFetching, isError } = trpc.getIdea.useQuery({ ideaNick });

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>{error.message}</span>;
  }
  if (!data.idea) {
    return <span>Idea not found</span>;
  }
  return (
    <Segment title={data.idea.name} description={data.idea.description}>
      <div className={css.text} dangerouslySetInnerHTML={{ __html: data.idea.text }} />
    </Segment>
  );
}
