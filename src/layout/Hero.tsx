import { ImageWithFallback } from "../components/ImageWithFallback";
import { StickerPile } from "./StickerPile";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-72px)] flex-col overflow-hidden">
      <div className="page-enter relative z-10 flex flex-1 flex-col">
        <div className="flex flex-1 items-center justify-center px-6">
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

            <p className="mx-auto mt-6 max-w-md text-body-md text-body">
              Currently an{" "}
              <strong className="font-medium text-ink">
                Associate Full Stack Engineer
              </strong>{" "}
              in Seattle, shipping{" "}
              <strong className="font-medium text-ink">
                things people enjoy using
              </strong>
              .
            </p>
          </div>
        </div>

        <div className="w-full shrink-0 pb-1 pt-2">
          <StickerPile />
        </div>
      </div>
    </section>
  );
}
