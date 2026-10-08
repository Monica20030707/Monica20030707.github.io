const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "Vue.js",
      "Tailwind",
      "JavaScript",
      "Redux",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      "Python",
      "Django",
      "Go",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "GraphQL",
    ],
  },
  {
    title: "Tools & other",
    items: [
      "Git",
      "Docker",
      "AWS",
      "Electron",
      "Kotlin",
      "Unreal Engine",
      "Figma",
      "VS Code",
      "Postman",
      "Jest",
    ],
  },
];

export function Skills() {
  return (
    <section className="section-pad">
      <div className="page-column">
        <h2 className="heading-lg text-ink text-center mb-3">
          Skills & technologies
        </h2>
        <p className="text-body-sm text-body text-center mb-10">
          Tools I reach for most often when shipping product.
        </p>

        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="heading-md text-ink mb-4 text-center">
                {group.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {group.items.map((item) => (
                  <span key={item} className="command-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
