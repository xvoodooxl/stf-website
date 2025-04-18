import Image from "next/image";

export default function Page() {
  return (
    <main className="w-full min-h-dvh">
      <div
        className="bg-black h-full w-full absolute relative z-0"
        style={{
          height: "calc(100dvh - 68px)",
        }}
      >
        <div
          className="bg-[url('../public/bg-main.png')] z-0 bg-cover bg-center bg-origin-border opacity-60   absolute"
          style={{
            width: "100%",
            height: "calc(100dvh - 68px)",
          }}
        />
        <div
          className="w-full flex flex-col items-center justify-center z-10 absolute"
          style={{
            height: "calc(100dvh - 68px)",
          }}
        >
          <Image src="/shieldlg2x.png" alt="Hello" width={450} height={453} />
          <h1 className="pt-4 pb-2 text-5xl font-bold text-[#ffd35a]">
            "QUO NEMO AUDET"
          </h1>
          <h1 className="text-2xl">WHERE NO ELSE DARES</h1>
          <h1 className="pt-4 text-xl opacity-50">
            DISCIPLINE • BROTHERHOOD • DESIRE TO IMPROVE
          </h1>
        </div>
      </div>
      <div className="py-12 bg-neutral-900 h-full w-full flex flex-col justify-center items-center">
        <div className="container max-w-screen-xl">
          <h1 className="text-2xl pb-4">What is the SPECTRE Task Force?</h1>
          <p className="pb-4">
            The SPECTRE Task Force is a small, covert task force comprised of
            special forces operatives from around the world that specializes in
            global anti-crisis operations under no sanction. Its' Operatives are
            hand-picked for their unique combat expertise and overwhelming
            adaptability to succeed in adverse conditions, and are extremely
            well-trained using a plethora of global doctrine.
          </p>
          <p className="pb-4">
            The SPECTRE Task Force is capable of executing operations that
            others would consider suicide, and with stride. They strike when
            least expected, and their presence guarantees death to anyone in
            their sights. When no one else is willing to take the plunge, the
            SPECTRE Task Force dives in head first, and makes it happen under
            the most unforgiving of circumstances.{" "}
          </p>

          <div className="py-6 bg-neutral-900 h-full w-full flex flex-col justify-center items-center">
            <h1 className="text-2xl pb-4">
              Do you think you have what it takes?
            </h1>
            <div className="relative">
              <div className="absolute -inset-5">
                <div className="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30  "></div>
              </div>
              <a
                href="https://www.spectretaskforce.com/discord"
                title="discord button"
                className="relative z-20 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-black transition-all duration-200 bg-[#ffd35a] border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
                target="_blank"
              >
                Join our Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
