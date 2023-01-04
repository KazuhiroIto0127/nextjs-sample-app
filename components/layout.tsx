import Head from '@/components/Head'
import React, { useState } from 'react';
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import styles from '@/components/layout.module.css';

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)
  const [isOpenPcSidebar, setIsOpenPcSidebar] = useState(true)

  return (
    <>
      <Head />

      <div className={`w-full h-full min-h-screen
                      dark:text-white dark:bg-gray-700
      `} >
        <Header setIsOpenSidebar={setIsOpenSidebar} setIsOpenPcSidebar={setIsOpenPcSidebar} />
        <div className="flex">
        <Sidebar isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar}
                 isOpenPcSidebar={isOpenPcSidebar} setIsOpenPcSidebar={setIsOpenPcSidebar}
         />
        <main className={`p-3 ${styles.main}`} >
          {children}
          <Footer />
        </main>
        </div>
      </div>
    </>
  )
}
