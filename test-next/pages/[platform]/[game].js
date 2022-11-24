import Head from 'next/head';
import React from 'react'
import { useRouter } from "next/router"

export default function game() {

  const router = useRouter();
  const { game, platform } = router.query;
  console.log(router)
  return (
    <div>
      <Head>
        <title>{game} | {platform}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Estamos en la plataforma: {platform}</h1>
      Estammos en un juego: {game}
    </div>
  )
}