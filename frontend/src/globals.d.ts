// globals.d.ts
import type { NextRouter } from 'next/router';
import * as React from 'react';

declare module 'next/dist/shared/lib/router-context' {
  /** Re-declare Next.js’s internal RouterContext for TS */
  export const RouterContext: React.Context<NextRouter>;
}
