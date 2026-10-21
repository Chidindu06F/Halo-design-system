/**
 * One open at a time
 * type="single" closes the open item when another opens.
 */
import { Accordion, AccordionItem } from '@halo-ds/react';

export default function Demo() {
  return (
    <div style={{ width: '100%', maxWidth: 480 }}>
      <Accordion type="single" defaultValue={['a']}>
        <AccordionItem value="a" title="Shipping">Free on orders over $50.</AccordionItem>
        <AccordionItem value="b" title="Returns">Within 30 days, in the original box.</AccordionItem>
        <AccordionItem value="c" title="Warranty">Two years on every product.</AccordionItem>
      </Accordion>
    </div>
  );
}
