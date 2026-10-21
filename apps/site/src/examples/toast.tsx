import { Button, useToast } from '@halo-ds/react';

// Wrap your app once in <ToastProvider>, then call toast() from anywhere.
export default function Example() {
  const { toast } = useToast();
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <Button onClick={() => toast({ type: 'success', title: 'Changes saved' })}>Save</Button>
      <Button variant="secondary" onClick={() => toast({ type: 'error', title: 'Couldn\u2019t send', description: 'Check your connection.' })}>
        Show an error
      </Button>
    </div>
  );
}
