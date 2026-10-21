import { Button, Result } from '@halo-ds/react';

export default function Example() {
  return (
    <Result
      status="success"
      title="Payment sent"
      description="We emailed a receipt to you and the person you paid."
      actions={
        <>
          <Button variant="secondary">View receipt</Button>
          <Button>Back to overview</Button>
        </>
      }
    />
  );
}
