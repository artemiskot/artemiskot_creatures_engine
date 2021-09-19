const { MODE } = require("./blendMode.js");
const description =
  "This engine was created to generate random characters out of different layers";
const baseUri = "https://github.com/artemiskot";

const layerConfigurations = [
  {
    growEditionSizeTo: 20,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Face" },
      { name: "Implant" },
      { name : "Haircut"},
      { name: "Hand" },
      { name : "HandItem"}
    ],
  },
];

const format = {
  width: 3000,
  height: 3000,
};

const background = {
  generate: true,
  brightness: "80%",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
};
