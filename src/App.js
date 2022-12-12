import Navbar from "./components/NavAnimeBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "./Config";
import NewsContent from "./components/NewsContent";
import Footer from "./components/Footer";

function App() {
  const [category, setcategory] = useState("Politics");
  const [data, setdata] = useState([]);
  const [totalData, settTotalData] = useState(0);
  let [page, setPage] = useState(1);

  useEffect(() => {
    const fetchNewsData = async () => {
      const news = await axios.get(
        `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=en,hi&category=${category}&page=${page}`
      );
      // setdata(news.data.results.filter((item)=>{
      //   return item.image_url !== null;
      // }));
      setdata(news.data.results);
      settTotalData(news.data.totalResults);
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
    fetchNewsData().catch((e) => {
      console.log(e);
    });
  }, [category, totalData, page]);

  return (
    <div className="App">
      <Navbar setcategory={setcategory} />
      <NewsContent
        data={data}
        totalData={totalData}
        page={page}
        setPage={setPage}
      />
      <Footer />
    </div>
  );
}

export default App;
