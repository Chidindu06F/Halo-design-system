/**
 * Sizes and separators
 * Small for dense layouts, medium for most pages. Slash or caret: pick one and use it everywhere.
 */
import { BreadcrumbItem, Breadcrumbs } from '@halo-ds/react';
import { House } from '@phosphor-icons/react';

export default function Demo() {
  return (
    <div className="demo-stack">
      <Breadcrumbs size="sm">
        <BreadcrumbItem href="#" icon={<House />}>Home</BreadcrumbItem>
        <BreadcrumbItem href="#">Projects</BreadcrumbItem>
        <BreadcrumbItem>Settings</BreadcrumbItem>
      </Breadcrumbs>
      <Breadcrumbs separator="caret">
        <BreadcrumbItem href="#" icon={<House />}>Home</BreadcrumbItem>
        <BreadcrumbItem href="#">Projects</BreadcrumbItem>
        <BreadcrumbItem>Settings</BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
}
