import { PhotoPile } from "./PhotoPile";

export function About() {
  return (
    <section className="pb-section-sm pt-10 md:pb-section-md md:pt-14 lg:pb-section">
      <div className="mx-auto w-full max-w-2xl px-6 text-center">
        <h1 className="display-hero text-ink">
          My name is Thuy
          <br />
          but I go by <em className="italic">Monica</em>
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-pretty text-body-md text-body">
          It&apos;s pronounced{" "}
          <em className="italic text-ink">&ldquo;twee&rdquo;</em>, and no
          worries if you need a{" "}
          <span className="whitespace-nowrap">second try!</span>
        </p>
      </div>

      <div className="mx-auto mt-10 w-full max-w-4xl px-4 sm:mt-12">
        <PhotoPile />
      </div>

      <div className="about-copy mx-auto mt-10 max-w-xl px-6 md:mt-12">
        <p className="about-lede">
          I care most about{" "}
          <strong className="font-medium text-ink">functionality</strong> and{" "}
          <strong className="font-medium text-ink">simplicity</strong>.
          That&apos;s been the core of how I design, write code, and choose what
          to build. If it already does the job, there&apos;s no need to reinvent
          the wheel.
        </p>

        <div className="about-block">
          <h2 className="about-kicker">What I do</h2>
          <p>
            I work across the stack and enjoy learning new technologies. Lately,
            I&apos;ve been exploring{" "}
            <strong className="font-medium text-ink">AWS</strong> and{" "}
            <strong className="font-medium text-ink">cloud computing</strong>.
            I&apos;ve also played around with AI for a body-recognition project
            and built an Arduino project connected to Pi-hole. New things are my
            favorite things to learn!
          </p>
        </div>

        <div className="about-block">
          <h2 className="about-kicker">What I make</h2>
          <p>
            I&apos;m proud of learning how to make games. My husband and I create
            game assets and indie games together, including a horror game that
            started on itch.io and made its way to{" "}
            <strong className="font-medium text-ink">Steam</strong>. We recently
            built a company website that pulls content straight from the Steam
            API, and we&apos;re very proud of how it turned out. We also keep AI
            out of our games, 100%.
          </p>
        </div>

        <div className="about-block">
          <h2 className="about-kicker">When I&apos;m not building</h2>
          <p>
            I&apos;m probably playing a game, learning a new recipe, or taking{" "}
            <strong className="font-medium text-ink">Libby</strong> out for a
            walk or hike. She loves chasing a ball and is extremely spoiled. I
            can&apos;t help it!
          </p>
        </div>

        <p className="about-close">
          I&apos;m always up for learning something new, making something fun,
          or chatting with fellow builders.
        </p>
      </div>
    </section>
  );
}
