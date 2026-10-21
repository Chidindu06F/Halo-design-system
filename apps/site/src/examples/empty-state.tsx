import { Button, EmptyState, Illustration } from '@halo-ds/react';

export default function Example() {
  return (
    <EmptyState
      media={<Illustration name="no-projects" />}
      title="No projects yet"
      description="Create a project to start organising your work."
      actions={<Button>New project</Button>}
    />
  );
}
