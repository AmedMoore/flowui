import { Column } from "@flowui/react/layout";
import { Skeleton } from "@flowui/react/feedback";

export default function DocsPageLoading() {
  return (
    <Column gap={4}>
      <Skeleton width="25rem" height="2rem" />
      <Skeleton width="40rem" />
      <Skeleton width="35rem" />
      <Skeleton width="40rem" />
      <Skeleton width="35rem" />
    </Column>
  );
}
