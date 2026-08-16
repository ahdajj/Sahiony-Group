export default [
  ...(await import('eslint-config-next/core-web-vitals')).default,
  ...(await import('eslint-config-next/typescript')).default,
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'node_modules/**'],
  },
];
