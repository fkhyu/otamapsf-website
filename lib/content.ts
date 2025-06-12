import { title } from "process";

export const home = {
    appName: "OtaMapSF",
    title: ["Explore San Francisco", "with "],
    description: "OtaMapSF is your interactive travel companion for discovering San Francisco's key spots while meeting others on the same journey. Whether you're here for tech, creativity, or community—we help you navigate it all, effortlessly.",
    learnMoreLink: "#benefits",
    learnMoreText: "Learn more",
    downloadLink: "https://github.com/onrecc/findoors-app/releases",
    downloadRedirect: "#download",
    downloadText: "Download",
    sections: {
        hero: {
            title: "Explore San Francisco",
            subtitle: "Your ultimate guide to the city"
        },
        about: {
            content: "Welcome to our San Francisco exploration platform"
        }
    },
};

export const benefits = {
    title: "What can you do?",
    elements: {
        el1: {
            title: "See the City",
            description: "View a dynamic map of curated points of interest across San Francisco—like cultural landmarks, tech hubs, cafes, and hidden gems.",
            emoji: "🗺️",
        },
        el2: {
            title: "Meet People",
            description: "Connect with fellow travelers and locals who share your interests. Join group tours, meetups, or casual hangouts.",
            emoji: "🤝",
        },
        el3: {
            title: "Share Your Journey",
            description: "Document your adventures with photos and notes. Share your experiences with the community and inspire others.",
            emoji: "📸",
        },
        el4: {
            title: "Discover Events",
            description: "Stay updated on local events, workshops, and gatherings. Find activities that match your interests and schedule.",
            emoji: "🎉",
        },
    }
}

export const steps = [
    {
      number: "1",
      title: "Download the App",
      description: "Get OtaMapSF from App Store or Google Play and create your account to start exploring."
    },
    {
      number: "2", 
      title: "Explore Places",
      description: "Discover amazing locations around you with our interactive map interface."
    },
    // {
    //   number: "03",
    //   title: "Plan Your Route", 
    //   description: "Create custom routes and save your favorite destinations for later."
    // },
    {
      number: "3",
      title: "Share & Connect",
      description: "Share your discoveries with friends and connect with the community."
    }
];

export const openness = {
    title: "Made by Students, Shared with the World",
    description: "This isn’t a polished corporate product—it’s a tool built by students who wanted to solve a real-world challenge. It’s open source, and you're welcome to take it further.",
}

export const general = {
    organizationName: "OtaMaps ry",
}