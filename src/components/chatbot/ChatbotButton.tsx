// src/components/chatbot/ChatbotButton.tsx
import React from 'react';

interface ChatbotButtonProps {
  toggleChat: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ChatbotButton: React.FC<ChatbotButtonProps> = ({ toggleChat }) => {
  return (
    <button
      onClick={toggleChat}
      className="
        fixed bottom-4 right-4 sm:right-6 md:right-8 lg:right-10 
        bg-blue-700 text-white rounded-full 
        w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
        flex items-center justify-center 
        shadow-xl z-[9999]
        hover:shadow-2xl hover:scale-105 transition-transform duration-200 
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 3.866-3.582 7-8 7-1.79 0-3.44-.416-4.872-1.14L3 21l1.14-5.128C3.416 15.44 3 13.79 3 12c0-4.418 3.134-8 7-8s7 3.582 7 8z"
        />
      </svg>
    </button>
  );
};

export default ChatbotButton;
