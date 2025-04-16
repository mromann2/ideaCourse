import { type JSX } from "react";
import { Link } from "react-router-dom";
import { Segment } from "../../../components/Segment";
import { getIdeaRoute } from "../../../lib/routes";
import { trpc } from "../../../lib/trpc";
import css from "./index.module.scss";

export function AllIdeas() {
  const { data, error, isLoading, isFetching, isError } = trpc.getIdeas.useQuery();

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>{error.message}</span>;
  }

  return (
    <Segment title="All Ideas">
      <div className={css.ideas}>
        {data?.ideas.map(
          (idea): JSX.Element => (
            <div className={css.idea} key={idea.nick}>
              <Segment
                size={2}
                title={
                  <Link className={css.ideaLink} to={getIdeaRoute({ ideaNick: idea.nick })}>
                    {idea.name}
                  </Link>
                }
                description={idea.description}
              />
            </div>
          ),
        )}
      </div>
    </Segment>
  );
}
