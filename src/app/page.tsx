import Image from 'next/image'
// import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <main className='min-h-dvh w-full'>
      <div
        id='hero'
        className='absolute relative z-0 h-full w-full bg-black'
        style={{
          height: 'calc(100dvh - 68px)',
        }}
      >
        <div
          className="absolute z-0 w-full bg-[url('../public/bg-main.png')] bg-cover bg-center bg-origin-border opacity-60"
          style={{
            height: 'calc(100dvh - 68px)',
          }}
        />
        <div
          className='absolute z-10 flex w-full flex-col items-center justify-center'
          style={{
            height: 'calc(100dvh - 68px)',
          }}
        >
          <Image
            src='/shieldlg2x.png'
            alt='Spectre Shield'
            width={450}
            height={453}
          />
          <h1 className='pt-4 pb-2 text-5xl font-bold text-[#ffd35a]'>
            "QUO NEMO AUDET"
          </h1>
          <h1 className='text-2xl text-white'>WHERE NO ELSE DARES</h1>
          <h1 className='pt-4 text-xl text-neutral-300 opacity-50'>
            DISCIPLINE • BROTHERHOOD • DESIRE TO IMPROVE
          </h1>
        </div>
      </div>
      <div className='flex h-full w-full flex-col items-center justify-center bg-neutral-900 py-12 text-white'>
        <div className='container max-w-screen-xl'>
          {/* <h1 className='pb-4 text-4xl'>What is the SPECTRE Task Force?</h1> */}
          <p className='text-2xl'>
            Where others retreat, we advance. Where others hesitate, we strike.
            Spectre Task Force was born in 1952 from a coalition of rogue
            operatives, forged to defend freedom in the Green Sea when the world
            looked away. We have fought every silent war since — across jungles,
            deserts, cities, and mountains — without recognition and without
            limits. Officially reorganized in 2017 by callsign "STAR", Spectre
            today is a global clandestine strike force, recruiting the best
            warfighters, operatives, and specialists the world has to offer. We
            work outside borders, politics, and public sight. Our missions are
            real, our enemies are lethal, and our success is measured in
            silence. 2024 marked our expansion into Eastern Europe, Southern
            Europe, and Central Asia. The battlefield has changed, but the
            mission remains: neutralize threats before they reach the innocent.
            We are the first in and the last out. No questions. No glory. No
            second chances.
          </p>
          {/* <p className='pb-4'>
            
            The SPECTRE Task Force is a small, covert task force comprised of
            special forces operatives from around the world that specializes in
            global anti-crisis operations under no sanction. Its' Operatives are
            hand-picked for their unique combat expertise and overwhelming
            adaptability to succeed in adverse conditions, and are extremely
            well-trained using a plethora of global doctrine.
          </p>
          <p className='pb-4'>
            The SPECTRE Task Force is capable of executing operations that
            others would consider suicide, and with stride. They strike when
            least expected, and their presence guarantees death to anyone in
            their sights. When no one else is willing to take the plunge, the
            SPECTRE Task Force dives in head first, and makes it happen under
            the most unforgiving of circumstances.{' '}
          </p> */}

          <div className='flex h-full w-full flex-col items-center justify-center bg-neutral-900 py-6'>
            <h1 className='pb-4 text-2xl'>
              Do you think you have what it takes?
            </h1>
            <div className='relative'>
              <div className='absolute -inset-5'>
                <div className='mx-auto h-full w-full max-w-sm opacity-30 lg:mx-0'></div>
              </div>
              <a
                href='https://www.spectretaskforce.com/discord'
                title='discord button'
                className='font-pj relative z-2 inline-flex w-full items-center justify-center rounded-sm border-2 border-transparent bg-[#ffd35a] px-8 py-3 text-lg font-bold text-black transition-all duration-200 hover:bg-neutral-600 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:outline-none sm:w-auto'
                role='button'
                target='_blank'
              >
                Join our Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
