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
      autoUpdateMethod: 'none',
      maxVersions: 2
    }
  }
};

export default config;
