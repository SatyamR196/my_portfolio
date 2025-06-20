
import { useEffect } from 'react';
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { Pointer } from "@/components/magicui/pointer";
import { Lens } from "@/components/magicui/lens";
interface ProjectImageProps {
  title: string;
  images: string[];
  Link: string;
}

const ProjectImage = ({ title, images, Link }: ProjectImageProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  useEffect(() => {
    if (!api) {
      return;
    }

    // Auto-slide every 3 seconds
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <a href={Link} target="_blank" rel="noopener noreferrer">
      <Pointer>
        <div className="text-2xl">👆</div>
      </Pointer>
      <div className="transform transition-all duration-300 hover:scale-105">
        <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-cyan-600">
          <div className="aspect-video overflow-hidden">
            <Carousel
              className="w-full h-full"
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="h-full object-center">
                {images.map((image, index) => (
                  <CarouselItem key={index} className="h-full object-center">
                    <Lens>
                      <img
                        src={image}
                        alt={title}
                        className="w-full object-cover object-center hover:scale-110 transition-transform duration-500"
                      />
                    </Lens>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectImage;
