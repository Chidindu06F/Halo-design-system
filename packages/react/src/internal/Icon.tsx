import { ICONS } from './iconPaths';
import type { IconName } from './iconPaths';

/** Internal icon used inside components. Decorative, so hidden from screen readers. */
export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="currentColor" aria-hidden="true" focusable="false">
      {ICONS[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
