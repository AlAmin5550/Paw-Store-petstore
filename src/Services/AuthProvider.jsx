"use client";
import { SessionProvider } from 'next-auth/react';
import React from 'react'
import { CartProvider } from './CartProvider';

export default function AuthProvider({children}) {
  return (
    <SessionProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </SessionProvider>
  )
}
