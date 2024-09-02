module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root:["./src"],
        alias: {
        "@assets": ["./src/assets"],
        "@features": ["./src/features"],
        "@service": ["./src/service"],
        "@navigation": ["./src/navigation"],
        "@components": ["./src/components"],
        "@styles": ["./src/styles"],
        "@utils": ["./src/utils"],
        }
      }
    ] 
  ]
};
