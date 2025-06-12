'use client';

import type { JSX } from "react";
import Link from "next/link";
import { paragraphs, lastUpdatedDate } from "./content";

// Helper function to format text with lists
function formatText(text: string) {
  const lines = text.split('\n');
  const elements: JSX.Element[] = [];
  let currentList: string[] = [];
  let listLevel = 0;

  lines.forEach((line, index) => {
    if (line.trim().startsWith('•')) {
      const indent = line.search(/\S/) - line.search('•');
      const content = line.replace(/^\s*•\s*/, '');
      
      if (indent <= 2) { // Main bullet point
        if (currentList.length > 0 && listLevel > 0) {
          elements.push(<ul key={`sublist-${index}`} className="list-disc pl-6 mb-2">{currentList.map((item, i) => <li key={i}>{item}</li>)}</ul>);
          currentList = [];
        }
        if (listLevel === 0) {
          currentList = [];
          listLevel = 1;
        }
        currentList.push(content);
      } else { // Sub bullet point
        if (currentList.length > 0 && listLevel === 1) {
          elements.push(<ul key={`mainlist-${index}`} className="list-disc pl-6 mb-2">{currentList.map((item, i) => <li key={i}>{item}</li>)}</ul>);
          currentList = [];
        }
        listLevel = 2;
        currentList.push(content);
      }
    } else if (line.trim() !== '') {
      if (currentList.length > 0) {
        const listClass = listLevel === 2 ? "list-disc pl-10 mb-2" : "list-disc pl-6 mb-2";
        elements.push(<ul key={`list-${index}`} className={listClass}>{currentList.map((item, i) => <li key={i}>{item}</li>)}</ul>);
        currentList = [];
        listLevel = 0;
      }
      elements.push(<p key={`text-${index}`} className="mb-2">{line}</p>);
    }
  });

  if (currentList.length > 0) {
    const listClass = listLevel === 2 ? "list-disc pl-10 mb-2" : "list-disc pl-6 mb-2";
    elements.push(<ul key="final-list" className={listClass}>{currentList.map((item, i) => <li key={i}>{item}</li>)}</ul>);
  }

  return elements;
}

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-poppins)]">
        <main className="flex flex-col mx-auto px-6 max-w-screen-xl py-12">
            <div className="flex flex-row justify-between items-center w-full mb-8 border-b border-black/10 dark:border-white/10 pb-8">
                <h1 className="text-black dark:text-white text-4xl font-semibold">Privacy Policy</h1>
                <div className="flex flex-col items-end space-y-2">
                    <Link 
                        href="/" 
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                        ← Back to Main Page
                    </Link>
                    <div className="text-black/60 dark:text-white/60">Last updated: <span>{lastUpdatedDate}</span></div>
                </div>
            </div>
            <div className="flex flex-col mt-6 space-y-8">
                {paragraphs.map((section) => (
                    <div key={section.id} className="space-y-4">
                        <h2 className="text-black/80 dark:text-white/90 text-xl font-semibold">{section.title}</h2>
                        <div className="text-black/60 dark:text-white/70">
                            {formatText(section.text)}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    </div>
  );
}
