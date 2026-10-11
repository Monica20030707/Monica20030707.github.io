import { PhotoPile } from "./PhotoPile";

export function About() {
  return (
    <section className="pb-section-sm pt-10 md:pb-section-md md:pt-14 lg:pb-section">
      <div className="mx-auto w-full max-w-2xl px-6 text-center">
        <h1 className="display-hero text-ink">
          My real name is Thuy.
          <br />
          But I go by <em className="italic">Monica</em>.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-body-md text-body">
          Looks harder than it actually is — CS grad, full-stack builder, and
          occasional game tinkerer.
        </p>
      </div>

      <div className="mx-auto mt-10 w-full max-w-4xl px-4 sm:mt-12">
        <PhotoPile />
      </div>

      <div className="mx-auto mt-10 max-w-xl space-y-4 px-6 text-center text-body-md text-body md:mt-12">
        <p>
          I&apos;m a recent{" "}
          <strong className="font-medium text-ink">Computer Science</strong>{" "}
          grad who&apos;s excited about building things people actually enjoy
          using. Most of my work has been in{" "}
          <strong className="font-medium text-ink">full-stack web</strong> and
          mobile development, where I get to take an idea and turn it into
          something real.
        </p>
        <p>
          During internships I wore a lot of hats — jumping between{" "}
          <strong className="font-medium text-ink">front-end</strong>,{" "}
          <strong className="font-medium text-ink">backend</strong>, and even
          data work. That taught me to adapt quickly and stay curious, which I
          think is one of my biggest strengths.
        </p>
        <p>
          Outside of work, I love experimenting with{" "}
          <strong className="font-medium text-ink">game development</strong>.
          It&apos;s where I get to be playful with coding, try wild ideas, and
          push myself to learn without worrying too much about the rules.
        </p>
      </div>
    </section>
  );
}
