import Head from '@/components/Head'
import React from 'react';
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import styles from '@/components/layout.module.css';

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head />

      <div className={`grid w-full h-full min-h-screen ${styles.container}
                      dark:text-white dark:bg-gray-700
      `} >
        <Header />
        <Sidebar />
        <main className={`p-3 ${styles.main}`} >
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
