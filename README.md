# Remitano UI KIT

## Run Debug

In the project directory, you can run:

```
  yarn
  yarn start
```

When develop, each time you change the code inside `/src`, you need to run `yarn update` to build lib and link to playground again


## Run Storybook

In the project directory, you can run:

```
  yarn
  yarn storybook
```

## Run Storybook (Native App)

In the project directory, you can run:

```
  cd playground_native
  yarn
  yarn ios
  // yarn android

  cd ..
  yarn update
```

## Build And Publish Storybook

```
  cd playground
  yarn build-storybook
  // yarn chromatic
```

## Install required dependencies (for React Native app only)
```
  yarn add react-native-svg
  yarn add --dev react-native-svg-transformer
  yarn add @react-spring/native
```

update metro.config.js 

```
  const { getDefaultConfig } = require("metro-config");

  module.exports = (async () => {
    const {
      resolver: { sourceExts, assetExts }
    } = await getDefaultConfig();
    return {
      transformer: {
        babelTransformerPath: require.resolve("react-native-svg-transformer")
      },
      resolver: {
        assetExts: assetExts.filter(ext => ext !== "svg"),
        sourceExts: [...sourceExts, "svg"]
      }
    };
  })();
```
For more detail: https://github.com/kristerkari/react-native-svg-transformer
