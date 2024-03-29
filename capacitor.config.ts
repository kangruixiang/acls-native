
import { CapacitorConfig } from '@capacitor/cli';

const appId = 'awesome.code.recorder.io';
const appName = 'Awesome Code Recorder';
const server = process.argv.includes('-hmr') ? {
  'url': 'http://169.254.83.107:5173',   // always have http:// in url
  'cleartext': true
} : {};
const webDir = 'build';

const config: CapacitorConfig = {
  appId,
  appName,
  webDir,
  server
};

if (process.argv.includes('-hmr')) console.log('WARNING: running capacitor with livereload config', config);

export default config;
