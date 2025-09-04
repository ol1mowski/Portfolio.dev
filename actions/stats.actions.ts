'use server';

import { getYouTubeStats, formatNumber } from '@/lib/api/youtube/youtube.service';
import { getBlogStats } from './blog/stats.actions';

export interface SiteStats {
  youtubeSubscribers: number;
  youtubeViews: number;
  youtubeVideos: number;
  blogPosts: number;
  experienceYears: number;
  completedProjects: number;
}

export const getSiteStats = async (): Promise<SiteStats> => {
  try {
    const youtubeStats = await getYouTubeStats();
    const blogStats = await getBlogStats();

    return {
      youtubeSubscribers: youtubeStats ? youtubeStats.subscriberCount : 270,
      youtubeViews: youtubeStats ? formatNumber(youtubeStats.viewCount) : 20000,
      youtubeVideos: youtubeStats ? youtubeStats.videoCount : 35,
      blogPosts: blogStats?.general?.articles || 7,
      experienceYears: 2,
      completedProjects: 7,
    };
  } catch (error) {
    console.error('Error fetching site stats:', error);

    return {
      youtubeSubscribers: 270,
      youtubeViews: 20000,
      youtubeVideos: 35,
      blogPosts: 7,
      experienceYears: 2,
      completedProjects: 7,
    };
  }
};
