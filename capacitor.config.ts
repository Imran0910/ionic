import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'test',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    LiveUpdates: {
      appId: '6e9eeae7',
      channel: 'Production',
      autoUpdateMethod: 'background',
      maxVersions: 99
    }
  }
};

export default config;
