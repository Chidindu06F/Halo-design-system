import { Accordion, AccordionItem } from '@halo-ds/react';

export default function Example() {
  return (
    <div style={{ width: '100%', maxWidth: 480 }}>
      <Accordion defaultValue={['billing']}>
        <AccordionItem value="billing" title="How does billing work?">
          You pay monthly for each member. Change or cancel any time.
        </AccordionItem>
        <AccordionItem value="data" title="Where is my data stored?">
          In Europe or the United States. You choose when you sign up.
        </AccordionItem>
        <AccordionItem value="export" title="Can I export my work?">
          Yes, as PDF, CSV or a full backup.
        </AccordionItem>
      </Accordion>
    </div>
  );
}
