'use client';
import React from 'react';
import images from '@/constants/images';
import Image from 'next/image';

const InstagramLinks = () => {
    const [visibleImages, setVisibleImages] = React.useState(images);

    // Update visible images based on window width
    React.useEffect(() => {
        const updateVisibleImages = () => {
            const width = window.innerWidth;
            if (width < 393) {
                // Показываем первые 2 картинки
                setVisibleImages(images.slice(0, 2));
            } else if (width < 1024) {
                // Показываем первые 3 картинки
                setVisibleImages(images.slice(0, 3));
            } else {
                // Показываем все 6 картинок
                setVisibleImages(images);
            }
        };

        updateVisibleImages(); // Устанавливаем изначально
        window.addEventListener('resize', updateVisibleImages);

        return () => {
            window.removeEventListener('resize', updateVisibleImages);
        };
    }, []);

    return (
        <div className="grid w-full grid-cols-2 phone:grid-cols-3 lg:grid-cols-6">
            {visibleImages.map((image, index) => (
                <a
                    key={index}
                    href={image.href}
                    className="block overflow-hidden hover:opacity-90"
                >
                    <Image
                        src={image.src}
                        alt={`Image ${index + 1}`}
                        width={321}
                        height={320}
                        className="w-full h-auto object-cover"
                    />
                </a>
            ))}
        </div>
    );
};

export default InstagramLinks;
