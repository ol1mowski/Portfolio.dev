import { useState, useEffect } from 'react';

interface BlogStatsData {
  general: {
    articles: number;
    categories: number;
    tags: number;
    authors: number;
    totalViews: number;
    avgReadTime: number;
  };
  growth: {
    articles: string;
    views: string;
    readers: string;
  };
  tags: Array<{
    name: string;
    count: number;
    trending: boolean;
  }>;
}

export const useBlogData = () => {
  const [blogStats] = useState({
    articles: '7',
    readers: '1',
    authors: '1',
    categories: '5',
  });
  const [trendingTopics, setTrendingTopics] = useState<Array<{ name: string; growth: string }>>([]);
  const [isLoadingTrending, setIsLoadingTrending] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setIsLoadingTrending(true);
        const response = await fetch('/api/blog/stats');
        if (response.ok) {
          const data: BlogStatsData = await response.json();

          const trendingTags = data.tags
            .filter(tag => tag.trending)
            .slice(0, 4)
            .map(tag => ({
              name: `#${tag.name}`,
              growth: `+${tag.count}`,
            }));

          setTrendingTopics(trendingTags);
        }
      } catch (error) {
        console.error('Error fetching blog data:', error);
        setTrendingTopics([]);
      } finally {
        setIsLoadingTrending(false);
      }
    };

    fetchBlogData();
  }, []);

  return {
    blogStats,
    trendingTopics,
    isLoadingTrending,
  };
};
