import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ImageGrid from "@/components/ImageGrid";
import { assetPath } from "@/lib/assetPath";

const projects: Record<string, {
  title: string;
  description: string;
  longDescription: string;
  tech?: string[];
  status: "active" | "wip" | "archived";
  highlights?: string[];
  codeSnippet?: { lang: string; code: string };
  sections?: { heading?: string; body: string; image?: { src: string; alt?: string; caption?: string }; grid?: { src: string; alt?: string; caption?: string; fullWidth?: boolean; flipX?: boolean; rotate?: "-90" | "90"; small?: boolean }[] }[];
  images?: { src: string; alt?: string; caption?: string }[];
}> = {
  corne: {
    title: "Corne v3 Build",
    status: "active",
    description: "The complete build of a Corne v3 split keyboard.",
    longDescription:
      "A hand-wired Corne v3 split keyboard build — 42 keys, Cherry MX switches, and a custom ZMK layout.",
    tech: ["ZMK", "Soldering"],
    sections: [
      {
        heading: "Why",
        body: "It all started with the challenge of simply being able to type on a split keyboard, especially a reduced layout. I bought a fully built Corne v4.1 and configured it using QMK/Vial. For me, building everything from scratch at that stage made no sense. I didn’t want to go through a complex process only to find out I couldn’t adapt to it. I initially searched for configuration ideas, but none of them really worked for me. \n\nEventually, I stopped looking and started designing my own layout, something that felt intuitive and still somewhat compatible with a traditional keyboard to ease the transition. The transition was painful. I felt like I typed slower than a toddler. After a while, and with a daily routine of about 10 minutes on Keybr, I started improving. I went from typing like a toddler to typing like a granny, still slow, but at least functional. A trick to prevent me from looking at the keyboard was to mix all the keycaps.",
        image: {
          src: assetPath("/images/cornev4.jpg"),
          alt: "Corne v4.1",
          caption: "The fully built Corne v4.1 with 3D printed case",
        },
      },
      {
        heading: "Custom Layouts and the Build Decision",
        body: "Over time, I began to understand the real power of a fully customizable layout. It allowed me to optimize for my own usage patterns. So far, the main results have been better ergonomics and some confused looks from people watching me type.\n\nNaturally, I decided to do what any sane and reasonable person would do: build my own keyboard from scratch.",
      },
      {
        heading: "Corne v3 Build",
        body: "It all starts with the PCB diodes and hot-swap sockets. The soldering can be a huge challenge, the diodes are ridiculously small and must be placed in the correct orientation. However, with some patience and by working slowly, it’s possible to complete it successfully. Soldering kits are quite cheap and useful for other applications, including keyboard maintenance.\n\nWith those components out of the way, it was time to solder the MCU. I chose the NRF52840, as it is electrically compatible with the nice!nano and much cheaper, so I decided to try it. This MCU also has a Bluetooth component, which makes it easier to switch devices quickly just by pressing a programmed key.\n\nAnother benefit of this setup is that the main side communicates with the other half wirelessly. This allows both sides to be more physically separated and removes the need for a TRRS cable in the middle. A longer TRRS cable could achieve similar spacing, but it would still occupy the middle area, limiting the placement of other devices.\n\nFor this build, I opted not to use batteries. I’m still not sure if that was a good or bad decision. Now, both sides need to be plugged into a power source to work, although they don’t need to be connected directly to the device you are using. For example, you can plug both halves into a powered desktop for power, and then switch to another device via Bluetooth without issues.\n\nI don’t use this keyboard outside my main setup, and I was hesitant about dealing with battery management, either remembering to charge them or ending up with a dead battery and not using the keyboard at all. In the end, I feel like it may not have been the best decision, but so far it hasn’t caused any major problems. Maybe in the future I design a battery with usb-c connector so I can use as full wireless whenever I need. Just need to keep in mind that doing this requires 3.3V and firmware updates.",
        grid: [
          { src: assetPath("/images/mcu.jpg"), alt: "NRF52840 MCU", caption: "MCU" },
          { src: assetPath("/images/assembel.png"), alt: "Assemble", caption: "Assemble" },
          { src: assetPath("/images/backplate.jpg"), alt: "Backplate", caption: "Backplate", fullWidth: true },
        ],
      },
      {
        heading: "Displays",
        body: "To pair with the MCU, I used a nice!view display. I wanted to make a better use to it instead of the default images and plots. But for me, the customization was way too painful to be worth it. The good part is that if you buy a v2.1 PCB from PandaKB, the nice!view five holes are already there, so there's no need for rewiring the fifth pin if there was only a four hole OLED on the board. \n\nThe soldering of the MCU and the display are pretty trivial, just align the lables and go for it, they are not as small as the diodes. Keep in mind that there are a bunch of devs out there creating some nice arts for this display, but as they aren't that useful for me, I would not stress over its customization.",
      },
      {
        heading: "Firmware and Keymap",
        body: "From that moment, all that was left to do was the firmware. I suffered for a couple of days with manually editing and making commits on the ZMK firmware itself. After a while I found out about the https://nickcoutsos.github.io/keymap-editor/. It connects to your repository and all the edits you do are committed to the .keymap file. It is also handy for exploring functionalities that were somehow hard to find on the official ZMK documentation. \n\nAs you can see, I kept a bunch of keys like Ctrl, backspace, Enter and some others where they normally would go on a regular keyboard, it really helped with the transition. My second layer has nothing special at all, just two macros for single or double quotes and another for some Portuguese punctuation I use regularly. The third layer has the numbers and some other macros to switch between USB and a Bluetooth device.",
        grid: [
          { src: assetPath("/images/base.png"), alt: "Base layer keymap", caption: "Base Layer", small: true },
          { src: assetPath("/images/symb.png"), alt: "Symbols layer keymap", caption: "Symbols Layer", small: true },
          { src: assetPath("/images/lower.png"), alt: "Lower layer keymap", caption: "Lower Layer", small: true },
        ],
      },
      {
        heading: "Final Thoughts",
        body: "Is really nice to be able to fully control what you want each key to be and at the same time have some ergonomics on top. The possibilities are endless and my keymap is not a big-brain one, just intuitive and practical setup for me. \n\nIf you're afraid of soldering or don't like it at all, don't stress over it! Ask or pay someone to do it for you and the fun will be the same. But if you wanna risk it, just watch some youtube tutorials before and practice it somehow, because one error and removing the bad solder becomes a nightmare and possibly a risk for the hardware.",
        grid: [
          { src: assetPath("/images/left.png"), alt: "Left half", caption: "Left half", flipX: true, rotate: "90", small: true },
          { src: assetPath("/images/right.png"), alt: "Right half", caption: "Right half", flipX: true, rotate: "-90", small: true },
        ],
      },
      {
        heading: "Future Upgrades",
        body: "One of the possible upgrades is the external battery. As I mentioned, I did not soldered a battery to it internally, so for special moments I might use a power bank module with 5V and usb-c and a thin battery. The porpouse here is to last enough at the same time of being portable. To wrap that build, I would 3D print some silly looking case for each side and have a pretty short way to plug it to the MCU."
      }
    ],
  },
  neovim: {
    title: "My Neovim Configuration",
    status: "wip",
    description: "All the plugins and configurations of my Neovim setup.",
    longDescription: "All the plugins and configurations of my Neovim setup.",
    tech: ["Lua", "Neovim"],
  },
  "bayesian-ab-testing": {
    title: "Bayesian A/B Testing",
    status: "wip",
    description: "Determine if CTA click-through rate increased enough to justify shipping it.",
    longDescription: "Determine if CTA click-through rate increased enough to justify shipping it.",
    tech: ["Stats", "Python"],
  },
};

function BodyText({ text, className }: { text: string; className?: string }) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  return (
    <p className={className}>
      {parts.map((part, i) =>
        urlRegex.test(part) ? (
          <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-neon-cyan underline underline-offset-2 hover:text-neon-cyan/70 transition-colors">
            {part}
          </a>
        ) : (
          part
        )
      )}
    </p>
  );
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

const statusColors = {
  active: "text-neon-green border-neon-green/30 bg-neon-green/5",
  wip: "text-yellow-400 border-yellow-400/30 bg-yellow-400/5",
  archived: "text-slate-500 border-slate-500/30 bg-slate-500/5",
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug];
  if (!project) notFound();

  return (
    <div className="relative z-10 max-w-3xl mx-auto px-6 pt-32 pb-20">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-neon-green transition-colors mb-10"
      >
        ← back to projects
      </Link>

      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <h1 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h1>
          <span className={`text-xs border rounded px-2 py-0.5 ${statusColors[project.status]}`}>
            {project.status}
          </span>
        </div>
        <p className="text-slate-400 text-lg leading-relaxed">{project.longDescription}</p>
      </div>

      {project.tech && project.tech.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-sm bg-dark-800/80 text-neon-cyan/70 border border-neon-cyan/20 rounded px-3 py-1"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      {project.highlights && project.highlights.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">highlights</h2>
          <ul className="space-y-3">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                <span className="text-neon-green mt-0.5 shrink-0">▸</span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.sections && project.sections.map((section, i) => (
        <div key={i} className="mb-10">
          {section.heading && (
            <h2 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
              {section.heading}
            </h2>
          )}
          <BodyText text={section.body} className="text-slate-300 text-sm leading-relaxed whitespace-pre-line" />
          {section.image && (
            <figure className="mt-6 rounded-lg overflow-hidden border border-neon-green/10 bg-dark-800/60">
              <div className="w-full h-[320px] overflow-hidden flex items-center justify-center">
                <img
                  src={section.image.src}
                  alt={section.image.alt ?? project.title}
                  className="-rotate-90 h-[800px] w-auto"
                />
              </div>
              {section.image.caption && (
                <figcaption className="px-3 py-2 text-xs text-slate-500">{section.image.caption}</figcaption>
              )}
            </figure>
          )}
          {section.grid && section.grid.length > 0 && (
            <ImageGrid images={section.grid} projectTitle={project.title} />
          )}
        </div>
      ))}

      {project.images && project.images.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.images.map((img, i) => (
              <figure key={i} className="rounded-lg overflow-hidden border border-neon-green/10 bg-dark-800/60">
                <div className="relative w-full aspect-video">
                  <Image
                    src={img.src}
                    alt={img.alt ?? project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {img.caption && (
                  <figcaption className="px-3 py-2 text-xs text-slate-500">{img.caption}</figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      )}

      {project.codeSnippet && (
        <div className="mb-10">
          <h2 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">snippet</h2>
          <div className="bg-dark-800/80 border border-neon-green/10 rounded-lg overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-neon-green/10 bg-dark-700/50">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs text-slate-600">{project.codeSnippet.lang}</span>
            </div>
            <pre className="p-5 text-sm text-neon-cyan/80 overflow-x-auto leading-relaxed">
              <code>{project.codeSnippet.code}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
