/**
 * Long paths
 * With maxItems, the middle collapses into a "..." people can open.
 */
import { BreadcrumbItem, Breadcrumbs } from '@halo-ds/react';
import { House } from '@phosphor-icons/react';

export default function Demo() {
  return (
    <Breadcrumbs separator="caret" maxItems={4}>
      <BreadcrumbItem href="#" icon={<House />}>Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Workspace</BreadcrumbItem>
      <BreadcrumbItem href="#">Projects</BreadcrumbItem>
      <BreadcrumbItem href="#">Design</BreadcrumbItem>
      <BreadcrumbItem href="#">Mobile app</BreadcrumbItem>
      <BreadcrumbItem>Screens</BreadcrumbItem>
    </Breadcrumbs>
  );
}
