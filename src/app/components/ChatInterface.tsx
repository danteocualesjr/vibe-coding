import { FC } from 'react';
import { Plus, Search, Mic, MoreHorizontal } from 'lucide-react';

const ChatInterface: FC = () => {
  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto py-4 px-6">
          {/* Messages would go here */}
          <div className="flex justify-center items-center h-full text-white text-lg">
            What can I help with?
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-700 p-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="flex items-center bg-[#40414f] rounded-lg border border-gray-700">
              <button className="p-2 hover:bg-gray-700 rounded-l-lg">
                <Plus className="w-5 h-5 text-gray-400" />
              </button>
              
              <textarea
                rows={1}
                className="flex-1 bg-transparent border-0 outline-none resize-none py-3 px-2 text-white placeholder-gray-400"
                placeholder="Ask anything"
              />

              <div className="flex items-center gap-1 pr-2">
                <button className="p-2 hover:bg-gray-700 rounded-lg">
                  <Search className="w-5 h-5 text-gray-400" />
                </button>
                <button className="p-2 hover:bg-gray-700 rounded-lg">
                  <Mic className="w-5 h-5 text-gray-400" />
                </button>
                <button className="p-2 hover:bg-gray-700 rounded-lg">
                  <MoreHorizontal className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
            <div className="text-xs text-center text-gray-400 mt-2">
              ChatGPT can make mistakes. Check important info.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface; 