'use client';

import React from 'react';

export function Background() {
  return (
    <>
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600/10 via-blue-600/10 to-background pointer-events-none dark:from-blue-500/20 dark:via-blue-500/20" />
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-50 dark:opacity-30" />
    </>
  );
}
