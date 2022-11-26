import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export async function getStaticProps() {
  console.log('server')
  return {
    props: { time: new Date().toISOString() }, // 형식에 맞ㅝㅓ props 라는 것으로 내보내야함
    revalidate: 1, // 초단위
  }
}

export default function ISR({ time }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{time}</h1>
      </main>
    </div>
  )
}
