import { defineConfig } from "@pandacss/dev"

export default defineConfig({
    // Whether to use css reset
    preflight: true,
    
    // Where to look for your css declarations
    include: ["./app/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
      extend: {
          tokens: {
              fonts: {
                  sans: { value: 'var(--font-geist-sans)' },
                  mono: { value: 'var(--font-geist-mono)' }
              }
          }
      }
    },

    // The output directory for your css system
    outdir: "styled-system",
    
    
})