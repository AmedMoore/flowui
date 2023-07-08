import { Column } from "@flowui/react/layout";
import { Alert } from "@flowui/react/feedback";

const DocsNotFoundPage = () => (
  <Column items="center">
    <Alert
      title="Oh, Lost?"
      variant="bordered"
      color="error"
      customClassName="max-w-screen-sm px-11 py-6"
    >
      The page you were looking for appears to have been moved, deleted, or does
      not exist.
    </Alert>
  </Column>
);

export default DocsNotFoundPage;
