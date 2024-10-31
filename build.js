// build.js
const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['./src/index.ts'], // Your entry point
    bundle: true,
    platform: 'node', // Target Node.js
    target: 'node20', // Specify the target Node.js version
    outdir: 'dist', // Output directory
    external: ['express'], // Exclude express from the bundle
    tsconfig: './tsconfig.json', // Path to your tsconfig.json
}).catch(() => process.exit(1));
