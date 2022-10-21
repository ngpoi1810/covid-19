import Head from "next/head";
import { useEffect, useState } from "react";
import { getCountries, getReportByCountry } from "../apis";
import CountrySelector from "../components/CountrySelector";
import Highlight from "../components/Highlight";
import Summary from "../components/Summary";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCountries().then((res) => {
      console.log({ res });
      setCountries(res.data);

      setSelectedCountryId('vn');
    });
  }, []);

  const handleOnchange = (e) => {
    setSelectedCountryId(e.target.value);
  };

  useEffect(() => {
    if(selectedCountryId) {
      const { Slug } = countries.find(
        (country) => country.ISO2.toLowerCase() === selectedCountryId
      );
  
      getReportByCountry(Slug).then((res) => {
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [countries, selectedCountryId]);

  return (
    <>
      <Head>
        <title>COVID-19</title>
      </Head>
      <CountrySelector countries={countries} handleOnChange={handleOnchange} value={selectedCountryId}/>
      <Highlight report={report} />
      <Summary report={report} />
    </>
  );
}
