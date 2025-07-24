import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://neosending.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api/neosending/Whatsapp"),
        secure: false,
        headers: {
          Accept: "text/plain",
          Authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ3ODA0NjgxQzMzMzc2NUYwMTMwRkQxQzEwRjZBNEM4QjhFMTk5MzAiLCJ4NXQiOiJSNEJHZ2NNemRsOEJNUDBjRVBha3lMamhtVEEiLCJ0eXAiOiJhdCtqd3QifQ.eyJpc3MiOiJodHRwczovL25lb3NlbmRpbmcuY29tLyIsImV4cCI6MTc4NDkyNzc5MiwiaWF0IjoxNzUzMzkxNzkyLCJhdWQiOiJXaGF0c2FwcCIsInNjb3BlIjoiV2hhdHNhcHAiLCJqdGkiOiJlYzVlODgzZi02NjkxLTQ3NzAtOGRmMy01M2JkOWZjYmMyZDAiLCJzdWIiOiI4NGU3MmQ0OC0wNWNlLTJmNzgtYjFiMy0zYTFhZGVhMmIxZTUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ3ZWIiLCJlbWFpbCI6IndlYkBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoid2ViIiwiZmFtaWx5X25hbWUiOiJ0ZXN0IiwicGhvbmVfbnVtYmVyIjoiNzc3Nzc3Nzc3IiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjoiRmFsc2UiLCJlbWFpbF92ZXJpZmllZCI6IkZhbHNlIiwidW5pcXVlX25hbWUiOiJ3ZWIiLCJvaV9wcnN0IjoiV2hhdHNhcHBfQXBwIiwiY2xpZW50X2lkIjoiV2hhdHNhcHBfQXBwIiwib2lfdGtuX2lkIjoiNjY5NWIxZDktZjFkOC0zNDMzLWRkYjAtM2ExYjUwNzg1YTI5In0.tS_bvrcYw3veQ5FSxeXrAbJXGgyrQR2HXhFHF8Cp75CC0NTAsBBsaEIdm72T9PYTGoybqSUaFMPDe1W3b1TWBCtERgCe12DfifpoL-YfPsEx96o8WuD3hPwe2gN0p61W7CZzq7au6fnXQSjAWu2n4sY20EP9fw7FNySNMFH4OoVHGJ0iqR7Po-cwaaN5AGKW9M5Om0q3G8uZv_Lvx8c-PSuu1Z4Nf76_DD3K-7AiADOo_9-Vt5ExeTF9XG3Lut4KuwdEnLzFjf8cwiXPCqm7bKjPEPiBzI4xYnie-U121UwzNHx0DzT9kK1DzBxx-Q6sJxPchhT6j5BvlE_G_Mffhw",
        },
      },
    },
  },
});
