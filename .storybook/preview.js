import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import "../projects/src/style/global.scss";
import "../node_modules/@angular/material/prebuilt-themes/indigo-pink.css";

setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
};
