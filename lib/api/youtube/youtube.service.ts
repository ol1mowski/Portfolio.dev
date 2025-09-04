interface YouTubeChannelStats {
  subscriberCount: number;
  viewCount: number;
  videoCount: number;
}

interface YouTubeApiResponse {
  items: Array<{
    statistics: {
      subscriberCount: string;
      viewCount: string;
      videoCount: string;
    };
  }>;
}

export const getYouTubeStats = async (): Promise<YouTubeChannelStats | null> => {
  try {
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

    if (!API_KEY) {
      console.warn('YouTube API key not configured, using fallback data');
      return {
        subscriberCount: 270,
        viewCount: 20000,
        videoCount: 35,
      };
    }

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch YouTube data');
    }

    const data: YouTubeApiResponse = await response.json();

    if (!data.items || data.items.length === 0) {
      throw new Error('No channel data found');
    }

    const stats = data.items[0].statistics;

    return {
      subscriberCount: parseInt(stats.subscriberCount),
      viewCount: parseInt(stats.viewCount),
      videoCount: parseInt(stats.videoCount),
    };
  } catch (error) {
    console.error('Error fetching YouTube stats:', error);

    return {
      subscriberCount: 270,
      viewCount: 20000,
      videoCount: 35,
    };
  }
};

export const formatNumber = (num: number): number => {
  if (num < 100) return num;
  if (num < 1000) return Math.round(num / 10) * 10;
  return Math.round(num / 100) * 100;
};
