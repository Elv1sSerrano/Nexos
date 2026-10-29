import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const slideWidths = {
  post: "basis-full",
  resource: "basis-[86%] sm:basis-[62%] lg:basis-[48%]",
  event: "basis-[78%] sm:basis-[45%] lg:basis-[32%]",
  project: "basis-[88%] sm:basis-[52%] lg:basis-[48%]",
  course: "basis-[92%] sm:basis-[78%] lg:basis-full",
  video: "basis-[85%] sm:basis-[48%] lg:basis-[32%]",
  product: "basis-[86%] sm:basis-[48%] lg:basis-[32%]",
};

function Carousel({ title, items = [], type, variant = "resource" }) {
  const SlideComponent = type;
  const [viewportRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps", dragFree: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateControls = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateControls();
    emblaApi.on("select", updateControls).on("reInit", updateControls);
    return () => emblaApi.off("select", updateControls).off("reInit", updateControls);
  }, [emblaApi, updateControls]);

  if (!items.length) return null;

  return (
    <section className="surface-card overflow-hidden p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-lg font-bold sm:text-xl">{title}</h2>
        <div className="hidden gap-2 sm:flex">
          <button type="button" onClick={() => emblaApi?.scrollPrev()} disabled={!canScrollPrev} className="carousel-button disabled:cursor-not-allowed disabled:opacity-40" aria-label={`Ver ${title} anteriores`}><ChevronLeft size={18} /></button>
          <button type="button" onClick={() => emblaApi?.scrollNext()} disabled={!canScrollNext} className="carousel-button disabled:cursor-not-allowed disabled:opacity-40" aria-label={`Ver más ${title}`}><ChevronRight size={18} /></button>
        </div>
      </div>
      <div ref={viewportRef} className="overflow-hidden">
        <div className="flex -ml-3 touch-pan-y">
          {items.map((item, index) => (
            <div key={item.id || item.title || item.projectName || index} className={`min-w-0 shrink-0 grow-0 pl-3 ${slideWidths[variant] || slideWidths.resource}`}>
              <SlideComponent {...item} />
            </div>
          ))}
        </div>
      </div>
      <p className="mt-3 text-xs text-[#616061] sm:hidden">Desliza para ver más</p>
    </section>
  );
}

export default Carousel;
