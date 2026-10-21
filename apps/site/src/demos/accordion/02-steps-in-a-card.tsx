/**
 * Steps in a card
 * Inside a card, turn off the last divider. A disabled item can not be opened yet.
 */
import { Accordion, AccordionItem, Card } from '@halo-ds/react';

export default function Demo() {
  return (
    <div style={{ width: '100%', maxWidth: 420 }}>
      <Card>
        <Accordion type="single" defaultValue={['address']}>
          <AccordionItem value="address" title="1. Shipping address">Ada Okafor, 12 Marina Road, Lagos.</AccordionItem>
          <AccordionItem value="delivery" title="2. Delivery">Standard, 3 to 5 days.</AccordionItem>
          <AccordionItem value="payment" title="3. Payment" disabled divider={false}>Complete delivery first.</AccordionItem>
        </Accordion>
      </Card>
    </div>
  );
}
