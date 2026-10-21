/**
 * Half stars
 * Half stars, with the chosen score shown next to them.
 */
import { useState } from 'react';
import { Rating } from '@halo-ds/react';

export default function Demo() {
  const [score, setScore] = useState(3.5);
  return (
    <div className="demo-row">
      <Rating allowHalf value={score} onValueChange={setScore} size="lg" aria-label="Rate your stay" />
      <strong>{score} / 5</strong>
    </div>
  );
}
