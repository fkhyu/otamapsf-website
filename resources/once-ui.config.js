import { Poppins } from "next/font/google";

const heading = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const body = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const label = Poppins({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],

});

// const code = Poppins_Mono({
//   variable: "--font-code",
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],

// });

const fonts = {
  heading: heading,
  body: body,
  label: label,
//   code: code,
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],

};

export { fonts };