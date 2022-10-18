import Head from 'next/head'
import { useEffect, useState } from 'react'
import { getCountries } from '../apis'
import CountrySelector from '../components/CountrySelector'
import Highlight from '../components/Highlight'
import Summary from '../components/Summary'


export default function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then((res) => {
        console.log({res});
        setCountries(res.data);
      });
  }, [])

  return (
   <>
   <Head>
    <title>COVID-19</title>
   </Head>
    <CountrySelector countries={countries}/>
    <Highlight />
    <Summary />
   </>
  )
}

