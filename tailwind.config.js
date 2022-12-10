/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#1f2937",
          
          "secondary": "#6b7280",
                   
          "accent": "#111827",
                   
          "neutral": "#f3f4f6",
                   
          "base-100": "#e5e7eb",
        
"info": "#1d4ed8",
        
"success": "#065f46",
        
"warning": "#eab308",
        
"error": "#b91c1c",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
 plugins: [require("daisyui")],
}
