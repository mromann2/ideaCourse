import { type JSX } from "react";
import { trpc } from "../../lib/trpc";

// type idea = { nick: string; name: string; description: string };

export function AllIdeas() {
  const { data, error, isLoading, isFetching, isError } = trpc.getIdeas.useQuery();

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return (<span>{error.message}</span>);
  }

  return (
    <>
      {data.ideas.map(
        (idea): JSX.Element => (
          <div key={idea.nick}>
            <div>{idea.nick}</div>
            <div>{idea.name}</div>
            <div>{idea.description}</div>
          </div>
        ),
      )}
    </>
  );
}
