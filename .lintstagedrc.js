const path = require("path");

const buildEslintCommand = (filenames) =>
    `next lint --fix --file ${filenames
        .map((f) => path.relative(process.cwd(), f))
        .join(" --file ")}`;

const pages = "./src/pages/**/*.{js,jsx,ts,tsx}";
const components = "./src/components/**/*.{js,jsx,ts,tsx}";
module.exports = {
    "/src/**/*.{js,jsx,ts,tsx}": ["eslint", "prettier --write"],
    [pages]: [buildEslintCommand],
    [components]: [buildEslintCommand],
};
