type FetchFunction<T> = () => Promise<T>;

export const useAsyncData = <T, R = T>(
  fetchFn: FetchFunction<T>,
  errorHandler: (error: unknown) => void,
  transform?: (data: T) => R
): Promise<R | null> => {
  return fetchFn()
    .then(data => {
      if (!data) {
        return null;
      }

      return transform ? transform(data) : (data as unknown as R);
    })
    .catch(error => {
      errorHandler(error);
      return null;
    });
};
