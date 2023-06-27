import { useMatches } from "react-router";

export default function usePageTitle() {
  let matches = useMatches();
  let crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.data));
  return { title: crumbs[crumbs.length - 1]?.props?.children };
}