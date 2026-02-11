import { useState, useEffect } from 'react';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import VideoDescription from './components/VideoDescription';
import VideoList from './components/VideoList';
import ChatWidget from './components/ChatWidget';
import LoadingScreen from './components/LoadingScreen';

const dummyVideos = [
  {
    id: 1,
    title: 'Strategic Management & Business Analytics',
    thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    duration: '36:20',
    views: '2.4k',
    isActive: true,
  },
  {
    id: 2,
    title: 'Financial Markets & Investment Strategies',
    thumbnail: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    duration: '28:15',
    views: '1.8k',
  },
  {
    id: 3,
    title: 'Leadership & Organizational Behavior',
    thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    duration: '42:30',
    views: '3.2k',
  },
  {
    id: 4,
    title: 'Digital Marketing & Consumer Psychology',
    thumbnail: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    duration: '31:45',
    views: '2.1k',
  },
  {
    id: 5,
    title: 'International Business & Global Trade',
    thumbnail: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    duration: '25:50',
    views: '1.5k',
  },
];

function App() {
  const [selectedVideo, setSelectedVideo] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

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
    <div className="min-h-screen bg-navy-950 animate-fade-in">
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
              description="Explore advanced concepts in business strategy, analytical frameworks, and real-world case studies from the Amity University MBA program."
              duration="36 min"
              level="Intermediate"
              lessons={12}
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
