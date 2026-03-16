import { Github, Linkedin, Heart, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">

      {/* HERO */}
      <section className="h-screen snap-start flex items-center">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-6xl font-bold mb-3">
            Hey, I'm Janiek
          </h1>

          <div className="flex items-center gap-2 text-sm mb-8">
            <MapPin size={16}/>
            Netherlands
          </div>

          <p className="text-lg mb-6">
            I build full-stack web applications,
            specializing in <b>Next.js</b> and <b>C#</b>.
          </p>

          <p className="max-w-xl mb-8">
            I develop clean, performant solutions that solve real business
            problems.
          </p>

          <div className="flex gap-6">
            <Github />
            <Linkedin />
          </div>
        </div>
      </section>


      {/* PROJECTS */}
      <section className="h-screen snap-start flex items-center justify-center">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Projects</h2>

          <p className="text-lg">
            Here you can showcase your work.
          </p>
        </div>
      </section>


      {/* ABOUT */}
      <section className="h-screen snap-start flex items-center justify-center">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">About</h2>

          <p>
            Information about you.
          </p>
        </div>
      </section>


      {/* CONTACT */}
      <section className="h-screen snap-start flex items-center justify-center">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>

          <p>Get in touch.</p>
        </div>
      </section>

    </main>
  );
}