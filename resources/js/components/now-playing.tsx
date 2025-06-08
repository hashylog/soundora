import {
  SkipBack,
  Play,
  SkipForward,
} from 'lucide-react';

export default function NowPlaying() {
  return (
    <div className="border-1 rounded-lg fixed bottom-5 left-5 right-5 text-white px-6 py-4 flex items-center justify-between shadow-lg z-50">
      <div className="flex items-center gap-4">
        <img
          src="/path/to/album-art.jpg"
          alt="Album Art"
          className="w-14 h-14 rounded-lg object-cover shadow-md"
        />
        <div>
          <h3 className="text-md font-semibold text-white">Song Title</h3>
          <p className="text-sm text-zinc-400">Artist Name</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-zinc-800 transition">
          <SkipBack className="w-5 h-5" />
        </button>
        <button className="p-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition shadow-md">
          <Play className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-full hover:bg-zinc-800 transition">
          <SkipForward className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
