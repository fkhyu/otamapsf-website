export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "What is OtaMapSF?",
    answer: "OtaMapSF is a mobile app that helps you explore San Francisco with ease."
  },
  {
    question: "Is OtaMapSF free?",
    answer: "Yes, OtaMapSF is completely free to use."
  },
  {
    question: "Which platforms are supported?",
    answer: "OtaMapSF is available for both iOS and Android. As an .apk for Android and TestFlight for iOS."
  },
  {
    question: "Who is OtaMapSF for?",
    answer: "OtaMapSF is designed for participants of the Neighborhood event, but usable by anyone who wants to explore San Francisco, whether you're a tourist or a local."
  }
];
