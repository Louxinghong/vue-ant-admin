// module.exports = {
//   presets: [
//     '@vue/app'
//   ]
// }
const presets = [
    ["@babel/preset-env", {
        targets: {
        ie: "9",
            chrome: "59",
        android: "6.0",
            ios: "8.0",
        esmodules:false
        },
        debug:true,
      "corejs": "3",
        useBuiltIns: false,
      forceAllTransforms: true
    }]
  ];
  
  module.exports = { presets };