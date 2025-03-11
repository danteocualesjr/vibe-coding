import { FC } from 'react';
import { Plus, Search, Folder, Clock, Settings } from 'lucide-react';

const Sidebar: FC = () => {
  return (
    <div className="flex flex-col w-[260px] h-full bg-[#202123] text-white">
      {/* New Chat Button */}
      <div className="p-2">
        <button className="w-full flex items-center gap-2 rounded p-3 hover:bg-gray-700 transition-colors text-sm">
          <Plus size={16} />
          New chat
        </button>
      </div>

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-2 py-2">
          <div className="text-xs text-gray-500 font-medium mb-2 px-2">Today</div>
          {/* Chat items would go here */}
        </div>
      </div>

      {/* Projects Section */}
      <div className="px-2 py-2 border-t border-gray-700">
        <div className="text-xs text-gray-500 font-medium mb-2 px-2">Projects</div>
        <button className="w-full flex items-center gap-2 rounded p-2 hover:bg-gray-700 transition-colors text-sm">
          <Folder size={16} />
          Business with Marc
        </button>
        {/* More project items */}
      </div>

      {/* Bottom Section */}
      <div className="p-2 border-t border-gray-700">
        <button className="w-full flex items-center gap-2 rounded p-2 hover:bg-gray-700 transition-colors text-sm">
          <Settings size={16} />
          Settings
        </button>
      </div>
    </div>
  );
};

export default Sidebar; 