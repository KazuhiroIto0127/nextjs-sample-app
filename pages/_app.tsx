import '/styles/globals.css';
import { AppProps } from 'next/app';
import { Zen_Maru_Gothic } from '@next/font/google';

const zenMaruGothic = Zen_Maru_Gothic({ weight: ["400","700","900"],
                                  subsets: ["japanese",'latin'],
                                  display: "swap" })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${zenMaruGothic.className}`}>
      <Component {...pageProps} />;
    </div>
  )
}
