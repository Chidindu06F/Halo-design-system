/**
 * Group
 * A labelled group, read as one question by screen readers.
 */
import { Checkbox, CheckboxGroup } from '@halo-ds/react';

export default function Demo() {
  return (
    <CheckboxGroup label="Notifications">
      <Checkbox label="Email" description="A weekly summary and account updates." defaultChecked />
      <Checkbox label="Push notifications" description="Mentions, replies and reminders." defaultChecked />
      <Checkbox label="Text messages" description="Only for sign-in codes." />
    </CheckboxGroup>
  );
}
