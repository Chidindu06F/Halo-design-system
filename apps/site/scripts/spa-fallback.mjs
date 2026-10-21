// GitHub Pages serves 404.html for unknown paths, so deep links like /components/button load the app
import { copyFileSync } from 'node:fs';
copyFileSync('dist/index.html', 'dist/404.html');
