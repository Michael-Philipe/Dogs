import React from 'react';
import Feed from "./Feed/index"
import Head from './Helper/Head';

function Home() {
  return (
    <section className='container mainContainer'>
      <Head title="Fotos" description="Home do site Dogs, com o feed de fotos"/>
      <Feed/>
    </section>
  )
}

export default Home;
