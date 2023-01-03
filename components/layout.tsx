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

  return (
    <>
      <Head />

      <div className={`grid w-full h-full min-h-screen ${styles.container}
                      dark:text-white dark:bg-gray-700
      `} >
        <Header setIsOpenSidebar={setIsOpenSidebar} />
        <Sidebar isOpenSidebar={isOpenSidebar} />
        <main className={`p-3 ${styles.main}`} >
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
