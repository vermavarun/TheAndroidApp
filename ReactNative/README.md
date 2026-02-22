# To Run

```powershell
npm run android or npx expo start // for web, android
npm run ios
npm run web
```

# To Build (using expo and eas)

```powershell
npm install -g eas-cli // only once
eas login
eas build:configure
eas build -p android --profile preview // for testing apk
eas build -p android --profile production // for AAB build play store // upload this aab to play store
or
eas submit --platform android
```

# The workflow for EXPO eas

```powershell
npx eas-cli@latest build --platform all
mkdir .eas\workflows && type nul > .eas\workflows\create-production-builds.yml
```

```yaml

name: Create Production Builds

jobs:
  build_android:
    type: build # This job type creates a production build for Android
    params:
      platform: android
  build_ios:
    type: build # This job type creates a production build for iOS
    params:
      platform: ios

```

```powershell
npx eas-cli@latest workflow:run create-production-builds.yml

```
### Google Console LINK
https://play.google.com/console/u/0/developers/8005763102262143365/app-list