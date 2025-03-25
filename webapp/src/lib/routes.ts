const getRouteParams = <T extends Record<string, boolean>>(object: T): Record<keyof T, string> => {
  return Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: `:${key}` }), {}) as Record<keyof T, string>;
};

export const getAllIdeasRoute = () => "/";

export const ideaRouteParams = getRouteParams({ ideaNick: true });
export type ideaRouteParamsType = typeof ideaRouteParams;
export const getIdeaRoute = ({ ideaNick }: ideaRouteParamsType) => `/ideas/${ideaNick}`;
export const getNewIdeaRoute = () => "/ideas/new";
export const getSignUpRoute = () => "/sign-up";
export const getSignInRoute = () => "/sign-in";
export const getSignOutRoute = () => "/sign-out";
