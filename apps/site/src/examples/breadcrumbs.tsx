import { BreadcrumbItem, Breadcrumbs } from '@halo-ds/react';
import { House } from '@phosphor-icons/react';

export default function Example() {
  return (
    <Breadcrumbs>
      <BreadcrumbItem href="#" icon={<House />}>Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Projects</BreadcrumbItem>
      <BreadcrumbItem>Brand refresh</BreadcrumbItem>
    </Breadcrumbs>
  );
}
