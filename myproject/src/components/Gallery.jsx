import React, { useState, useEffect } from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
};

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Function to fetch images from Lorem Picsum API
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`);
        const data = await response.json();
        setImages(prevImages => [...prevImages, ...data]);
        setPage(prevPage => prevPage + 1);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !loading) {
          fetchImages();
        }
      },
      { threshold: 0.5 }
    );

    // Attach the observer to a sentinel element at the bottom of the page
    observer.observe(sentinelRef.current);

    // Clean up function to disconnect the observer
    return () => {
      observer.disconnect();
    };
  }, [page]); // Trigger effect when page changes

  const sentinelRef = React.useRef(null);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-[20px]">
      {images.map((image, index) => (
        <div key={index} className={`relative w-full h-64 overflow-hidden`}>
          <img src={image.download_url} alt={`Image ${index}`} className="object-cover w-full h-full" />
        </div>
      ))}
      <div ref={sentinelRef}></div>
      {loading && <Loader />}
    </div>
  );
};

export default Gallery;
