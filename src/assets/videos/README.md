# Local Videos Folder

To use a local video file in the video player:

1. **Add your video file** to this folder (`src/assets/videos/`)
   - Supported formats: `.mp4`, `.webm`, `.ogg`
   - Recommended: `.mp4` for best browser compatibility

2. **Import the video** in `src/App.tsx`:
   ```typescript
   import yourVideoName from './assets/videos/your-video-file.mp4';
   ```

3. **Use it in the `dummyVideos` array**:
   ```typescript
   {
     id: 1,
     title: 'Your Video Title',
     thumbnail: 'path/to/thumbnail.jpg',
     videoUrl: yourVideoName, // Use the imported video
     duration: '30:00',
     views: '2.4k',
   }
   ```

**Example:**
- Add `lecture-1.mp4` to this folder
- In `App.tsx`, add: `import lecture1 from './assets/videos/lecture-1.mp4';`
- In `dummyVideos`, use: `videoUrl: lecture1`

**Note:** Vite will automatically process the video file and provide the correct path.
