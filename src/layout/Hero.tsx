import { ImageWithFallback } from "../components/ImageWithFallback";
import { StickerPile } from "./StickerPile";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-72px)] flex-col overflow-hidden">
      {/* Copy sits under the sticker layer */}
      <div className="page-enter relative z-0 flex flex-1 flex-col">
        <div className="flex flex-1 items-center justify-center px-6 pb-[22vh] pt-6">
          <div className="mx-auto w-full max-w-hero text-center">
            <p className="mb-6 flex items-center justify-center gap-2.5 text-body-md text-body">
              <span>Hello</span>
              <ImageWithFallback
                src="/monica_profile.jpeg"
                alt="Monica Nguyen"
                className="size-9 rounded-full object-cover ring-1 ring-hairline"
              />
              <span>I&apos;m Monica</span>
            </p>

            <h1 className="display-hero text-ink">
              I build products that{" "}
              <em className="italic">feel</em> simple, even when
              they&apos;re not.
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-pretty text-body-md text-body">
              Based in{" "}
              <strong className="font-medium text-ink">
                Seattle, Washington
              </strong>{" "}
              and currently{" "}
              <strong className="whitespace-nowrap font-medium text-ink">
                Associate Software Engineer
              </strong>
              . Building things people{" "}
              <span className="whitespace-nowrap">enjoy using.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Stickers float above the copy */}
      <div className="absolute inset-x-0 bottom-0 top-[18%] z-20 sm:top-[16%] md:top-[14%]">
        <StickerPile className="h-full" />
      </div>
    </section>
  );
}
