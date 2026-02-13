import { useState, useEffect } from 'react';
import { currentTheme, getThemeClasses } from './config/theme';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import VideoDescription from './components/VideoDescription';
import VideoList from './components/VideoList';
import ChatWidget from './components/ChatWidget';
import LoadingScreen from './components/LoadingScreen';

// Import local video file (uncomment and add your video file to src/assets/videos/)
import localVideo from './assets/videos/amity.mp4';

const dummyVideos = [
  {
    id: 1,
    title: 'Week 1 Recap & Concept of Economic Reality',
    thumbnail: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    duration: '28:15',
    views: '1.8k',
  },
  {
    id: 2,
    title: 'International Financial Statement Analysis',
    thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    // Use local video: uncomment the line below and comment out the videoUrl line
    videoUrl: localVideo,
    // videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    duration: '30:00',
    views: '2.4k',
    isActive: true,
  },
  
  {
    id: 3,
    title: 'Diagnostic Pre-Knowledge Test Review',
    thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    duration: '42:30',
    views: '3.2k',
  },
  {
    id: 4,
    title: 'The Four Core Financial Statements',
    thumbnail: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    duration: '31:45',
    views: '2.1k',
  },
  {
    id: 5,
    title: 'Purpose of the Income Statement',
    thumbnail: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    duration: '25:50',
    views: '1.5k',
  },
];

function App() {
  const [selectedVideo, setSelectedVideo] = useState(2);
  const [isLoading, setIsLoading] = useState(true);
  const themeClasses = getThemeClasses();

  // Apply theme class to body
  useEffect(() => {
    const body = document.body;
    if (currentTheme === 'light') {
      body.classList.add('light-theme');
      body.style.backgroundColor = '#ffffff';
      body.style.color = '#1a1a1a';
    } else {
      body.classList.remove('light-theme');
      body.style.backgroundColor = '#060e1a';
      body.style.color = '#e2e8f0';
    }
  }, []);

  useEffect(() => {
    // Simulate loading time for premium feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const activeVideo = dummyVideos.find(v => v.id === selectedVideo) || dummyVideos[0];

  const videosWithActive = dummyVideos.map(v => ({
    ...v,
    isActive: v.id === selectedVideo,
  }));

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={`min-h-screen ${themeClasses.bg} animate-fade-in`}>
      <Header />

      <main className="max-w-[1440px] mx-auto p-6">
        <div className="flex gap-6 items-start">
          {/* Left: Video + Info + Course list */}
          <div className="flex-1 min-w-0 space-y-5">
            <VideoPlayer
              key={activeVideo.id}
              thumbnail={activeVideo.thumbnail}
              videoUrl={activeVideo.videoUrl}
            />

            <VideoDescription
              badge="MODULE 3 — LESSON 7"
              title={activeVideo.title}
              description="Explore the structure, purpose, and analytical techniques of the Income Statement within an international reporting environment. This session focuses on IFRS and US GAAP comparisons, profitability interpretation, and economic reality adjustments."
              duration="30 min"
              level="Intermediate"
              lessons={5}
              enrolled="2.4k"
            />

            <VideoList
              videos={videosWithActive}
              onVideoSelect={setSelectedVideo}
            />
          </div>

          {/* Right: Chat widget */}
          <div className="hidden lg:block w-[400px] shrink-0">
            <div className="sticky top-[120px] h-[calc(100vh-152px)]">
              <ChatWidget />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
