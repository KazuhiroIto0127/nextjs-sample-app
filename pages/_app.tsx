import '/styles/globals.css';
import { AppProps } from 'next/app';
import { Zen_Maru_Gothic } from '@next/font/google';
import { GlobalProvider } from '@/context/global-state-provider';

const zenMaruGothic = Zen_Maru_Gothic({ weight: ["400","700","900"],
                                  subsets: ["japanese",'latin'],
                                  display: "swap" })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${zenMaruGothic.className}`}>
      <GlobalProvider>
          <Component {...pageProps} />
      </GlobalProvider>
    </div>
  )
}
