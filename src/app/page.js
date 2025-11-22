import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HeroSection = () => {
  return (
    <div className="px-4 sm:px-6">
      <h1 className="my-8 sm:my-12 md:my-16 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight sm:leading-tight md:leading-none max-w-screen-md text-black">
        Sustainovate
      </h1>

      <p className="my-4 sm:my-5 max-w-1xl mx-auto font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed sm:leading-normal text-black">
        Sustainovate is a student collective focused on reimagining sustainability by uniting passionate learners to spark meaningful change and build a campus culture that cares for the planet
      </p>

      <div aria-hidden="true" className="clear-both h-16 sm:h-24 md:h-32"></div>
    </div>
  );
};

const Goal = () => {
  return (
    <div className="px-4 sm:px-6">
      <h2 className="my-8 sm:my-10 md:my-11 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight max-w-2xl mx-auto text-black">
        Our Goal
      </h2>
      <p className="my-4 sm:my-5 max-w-2xl mx-auto font-sans text-lg sm:text-xl md:text-2xl leading-relaxed sm:leading-normal text-black">
        To drive campus-wide sustainable transformation through <strong>innovation, research, and collective action</strong> empowering students to design real-world solutions for a <strong>cleaner, greener, and more equitable future.</strong>
      </p>
      <div className="text-black flex-col flex mt-12 sm:mt-24 md:mt-32 lg:mt-52 mb-12 sm:mb-16 md:mb-24 gap-6 sm:gap-8 md:gap-0">
        <div className="text-center bg-teal-400 flex-col justify-center items-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-96 lg:h-96 flex p-8 sm:p-10 md:p-12 rounded-full mx-auto md:mx-0 md:self-start min-h-[280px] sm:min-h-[320px]">
          <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none">4th</h1>
          <p className="my-3 sm:my-4 md:my-5 font-mono text-base sm:text-lg md:text-xl lg:text-2xl leading-normal">
            Communications tech will emit more carbon by 2025 than any country except China, India, and the U.S.
          </p>
          <Link href="#" className="p-1.5 text-sm sm:text-base focus:text-white focus:bg-sky-800 hover:text-white hover:bg-sky-800">View Source</Link>
        </div>
        <div className="text-center bg-teal-400 flex-col justify-center items-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-96 lg:h-96 flex p-8 sm:p-10 md:p-12 rounded-full mx-auto md:self-center md:-mt-10 min-h-[280px] sm:min-h-[320px]">
          <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none">29%</h1>
          <p className="my-3 sm:my-4 md:my-5 font-mono text-base sm:text-lg md:text-xl lg:text-2xl leading-normal">
            Renewables made up only 29% of global electricity generation in 2020.
          </p>
          <Link href="#" className="p-1.5 text-sm sm:text-base focus:text-white focus:bg-sky-800 hover:text-white hover:bg-sky-800">View Source</Link>
        </div>
        <div className="text-center bg-teal-400 flex-col justify-center items-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-96 lg:h-96 flex p-8 sm:p-10 md:p-12 rounded-full mx-auto md:mx-0 md:self-end md:-mt-10 min-h-[280px] sm:min-h-[320px]">
          <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none">19M</h1>
          <p className="my-3 sm:my-4 md:my-5 font-mono text-base sm:text-lg md:text-xl lg:text-2xl leading-normal">
            A typical data center can use between 11 and 19 million liters of water per day.
          </p>
          <Link href="#" className="p-1.5 text-sm sm:text-base focus:text-white focus:bg-sky-800 hover:text-white hover:bg-sky-800">View Source</Link>
        </div>
      </div>
    </div>
  );
};

const Domains = () => {
  return (
    <div className="px-4 sm:px-6">
      <div className="mb-8 gap-6 sm:gap-8 md:gap-9 flex-wrap md:flex-nowrap flex justify-center">
        <div className="break-words w-full md:basis-2/5 md:grow-0 text-center">
          <h2 className="my-8 sm:my-10 md:my-11 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-black">
            Discover our Domains
          </h2>
          <Link href="/domains" className="text-white whitespace-nowrap bg-green-700 font-bold text-lg sm:text-xl md:text-2xl no-underline inline-block mt-5 px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-3xl border-4 border-solid border-black focus:text-black focus:bg-yellow-400 focus:border-black hover:text-black hover:bg-yellow-400 hover:border-black">
            View our Domains
          </Link>
        </div>
      </div>
      <div className="max-w-2xl mx-auto text-center">
        <figure className="clear-both m-0 table mx-auto">
          <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/uploads/2021/01/arrows.svg" alt="" className="inline align-bottom object-contain w-64 sm:w-80 md:w-96 h-52 sm:h-64 md:h-80" />
        </figure>
      </div>
    </div>
  );
};

const Newsletter = () => {
  const books = [
    {
      src: "Sustainovate.jpg",
      alt: "Sustainable Web Design cover"
    }
  ];

  const booksSecond = [];

  return (
    <div className="mb-8 gap-6 sm:gap-8 md:gap-9 flex-wrap md:flex-nowrap flex px-4 sm:px-6">
      <div className="break-words w-full md:basis-1/3 lg:basis-0 lg:grow">
        <h2 className="my-8 sm:my-10 md:my-11 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-black">
          Newsletter
        </h2>
        <p className="my-4 sm:my-5 font-mono text-lg sm:text-xl md:text-2xl leading-normal text-left text-black">
          Check out our newsletter page for more information on sustainability and related topics.
        </p>
      </div>
      <div className="break-words w-full md:basis-2/3 lg:basis-0 lg:grow">
        <div className="flex mb-12 sm:mb-16 md:mb-24 overflow-x-auto sm:overflow-x-visible -mx-4 sm:mx-0 px-4 sm:px-0 gap-4 sm:gap-0">
          <div className="flex-row sm:flex-col flex shrink-0 sm:shrink basis-auto sm:basis-auto md:max-w-[50%] gap-4 sm:gap-0">
            {books.map((book, idx) => (
              <div key={idx} className="shrink-0 w-40 sm:w-auto flex-col justify-center items-center flex mb-0 sm:mb-16 md:mb-24 lg:mb-32">
                <img src={book.src} alt={book.alt} className="align-baseline inline w-full max-w-[160px] sm:max-w-none" />
                <p className="text-black font-bold text-sm sm:text-base md:text-lg text-center my-2 sm:my-3 px-2">
                  TIU Launches Sustainovate Club to Power Sustainable Innovation
                </p>
                <Link className="text-white whitespace-nowrap bg-black font-bold text-sm sm:text-base md:text-lg no-underline inline-block px-4 sm:px-5 md:px-6 py-1 sm:py-1.5 rounded-3xl border-2 sm:border-4 border-solid border-black focus:text-black focus:bg-white hover:text-black hover:bg-white mx-auto my-3 sm:my-4 md:my-5" href="https://technotimes.info/index.php/2025/10/18/tiu-launches-sustainovate-club-to-power-sustainable-innovation/" target="_blank" rel="noopener noreferrer">
                  Explore
                </Link>
              </div>
            ))}
          </div>
          <div className="flex-row sm:flex-col flex shrink-0 sm:shrink basis-auto sm:basis-auto md:max-w-[50%] md:ml-10 lg:ml-20 sm:mt-0 md:mt-24 lg:mt-44 gap-4 sm:gap-0">
            {booksSecond.map((book, idx) => (
              <div key={idx} className="shrink-0 w-40 sm:w-auto flex-col justify-center items-center flex mb-0 sm:mb-16 md:mb-24 lg:mb-32">
                <Link href="#" className="text-sky-800 focus:text-white focus:bg-sky-800 hover:text-white hover:bg-sky-800">
                  <img src={book.src} alt={book.alt} className="align-baseline inline w-full max-w-[160px] sm:max-w-none" />
                </Link>
                <Link className="text-white whitespace-nowrap bg-black font-bold text-sm sm:text-base md:text-lg no-underline inline-block px-4 sm:px-5 md:px-6 py-1 sm:py-1.5 rounded-3xl border-2 sm:border-4 border-solid border-transparent focus:text-black focus:bg-white focus:border-black hover:text-black hover:bg-white hover:border-black mx-auto my-3 sm:my-4 md:my-5" href="#">
                  Explore'
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CTA = () => {
  return (
    <div className="bg-lime-300 grow p-6 sm:p-10 md:p-16 lg:p-20">
      <h2 className="my-6 sm:my-8 md:my-11 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-black">
        Join the Movement. Build a Sustainable Future
      </h2>
      <p className="my-5 sm:my-6 md:my-7 text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono text-left text-black">
        Be part of <strong>Sustainovate</strong> where ideas evolve into impact.
      </p>
      <Link 
        className="text-white whitespace-nowrap bg-black font-bold text-base sm:text-lg no-underline inline-block mt-5 px-5 sm:px-6 py-1.5 rounded-3xl border-2 sm:border-4 border-solid border-transparent focus:text-black focus:bg-white focus:border-black hover:text-black hover:bg-white hover:border-black" 
        href="https://chat.whatsapp.com/EYCoXrUYYdGDvaPsrvhy3N"
        target="_blank" 
        rel="noopener noreferrer"
      >
        Become a Member
      </Link>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-full text-base relative bg-stone-50 font-sans overflow-x-hidden select-none">
      <div className="z-[1] w-screen h-full absolute overflow-hidden pointer-events-none">
        <div className="absolute -left-[530px] sm:-left-[400px] md:-left-96 top-[1200px] sm:top-[1500px] md:top-[1986px]">
          <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/blue-triangle.svg" alt="" className="w-32 sm:w-48 md:w-auto" />
        </div>
        <div className="absolute -left-96 sm:-left-72 md:-left-56 top-[-800px] sm:top-[-1000px] md:top-[-1160px]">
          <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/orange-square.svg" alt="" className="w-32 sm:w-48 md:w-auto" />
        </div>
        <div className="absolute -right-[1220px] sm:-right-[1200px] md:-right-[1180px] top-[600px] sm:top-[750px] md:top-[930px]">
          <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/orange-square.svg" alt="" className="w-32 sm:w-48 md:w-auto" />
        </div>
        <div className="absolute -right-[720px] sm:-right-[500px] md:-right-96 -top-32 sm:-top-40 md:-top-52">
          <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/yellow-triangle.svg" alt="" className="w-32 sm:w-48 md:w-auto" />
        </div>
        <div className="absolute -left-96 top-[3000px] sm:top-[3800px] md:top-[4870px]">
          <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/yellow-triangle.svg" alt="" className="w-32 sm:w-48 md:w-auto" />
        </div>
        <div className="absolute right-0 sm:right-6 md:right-12 top-[3200px] sm:top-[4000px] md:top-[5170px]">
          <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/blue-blob.svg" alt="" className="w-24 sm:w-32 md:w-auto" />
        </div>
        <div className="absolute -left-80 sm:-left-72 top-[600px] sm:top-[800px] md:top-[1000px]">
          <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/red-rectangle.svg" alt="" className="w-32 sm:w-48 md:w-auto" />
        </div>
        <div className="absolute -left-64 sm:-left-48 md:-left-24 top-[3500px] sm:top-[4500px] md:top-[5700px]">
          <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/red-rectangle.svg" alt="" className="w-32 sm:w-48 md:w-auto" />
        </div>
      </div>
      <aside aria-label="Skip to main content">
        <Link className="text-black w-px h-px no-underline absolute left-[-10000px] overflow-hidden focus:z-[100] focus:bg-white focus:w-auto focus:h-auto focus:underline focus:p-2.5 focus:border-none focus:left-0 focus:top-0 hover:z-[100] hover:bg-white hover:w-auto hover:h-auto hover:underline hover:p-2.5 hover:border-none hover:left-0 hover:top-0" href="#main">
          Skip to Main Content
        </Link>
      </aside>
      <div className="z-10 relative">
        <Header />
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row">
          <main id="main" tabIndex={-1} className="grow text-base sm:text-lg md:text-xl">
            <HeroSection />
            <Goal />
            < Domains/>
            <Newsletter />
          </main>
        </div>
        <div className="w-full">
          <div className="text-black items-stretch text-base sm:text-lg md:text-xl flex flex-col lg:flex-row">
            <CTA />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}