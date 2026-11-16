import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.japaCounter',
  appName: 'japaCounter',
  webDir: 'www',
    server: {
    url: 'https://japa-counter-7mov.vercel.app/',
    cleartext: false
  }
};

export default config;
