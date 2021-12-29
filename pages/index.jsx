import useSWR from 'swr';
import { SiSpotify } from 'react-icons/si';
import Image from 'next/image';

export default function Home() {
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const { data } = useSWR('/api/spotify', fetcher);
    return (
        <>
            <section className=''>
                <main className='flex flex-col items-center justify-center min-h-screen space-y-3 bg-gray-900'>
                    <div>
                        <h1 className='text-center text-5xl font-bold text-gray-100'>Spotify Now Playing using Next.js</h1>
                        <p className='text-center mt-4'>
                            <a
                                target='_blank'
                                rel='noreferrer noopener'
                                href='https://theodorusclarence.com/blog/spotify-now-playing'
                                className='underline hover:text-blue-500 text-gray-200 font-sans'
                            >
                                Source
                            </a>
                        </p>
                    </div>
                    <a
                        target='_blank'
                        rel='noreferrer noopener'
                        href={
                            data?.isPlaying
                                ? data.songUrl
                                : 'https://open.spotify.com/user/erence21?si=yTsrZT5JSHOp7tn3ist7Ig'
                        }
                        className='relative flex items-center p-5 space-x-4 transition-shadow border rounded-md hover:shadow-md w-72'
                    >
                        <div className='w-16'>
                            {data?.isPlaying ? (
                                <img
                                    className='w-16 shadow-sm'
                                    src={data?.albumImageUrl}
                                    alt={data?.album}
                                />
                            ) : (
                                <SiSpotify size={64} color={'#1ED760'} />
                            )}
                        </div>

                        <div className='flex-1'>
                            <p className='font-bold component text-gray-200	'>
                                {data?.isPlaying ? data.title : 'Not Listening'}
                            </p>
                            <p className='text-xs font-dark text-gray-200	'>
                                {data?.isPlaying ? data.artist : 'Spotify'}
                            </p>
                        </div>
                        <div className='absolute bottom-1.5 right-1.5'>
                            <SiSpotify size={20} color={'#1ED760'} />
                        </div>
                    </a>
                </main>
            </section>
        </>
    );
}