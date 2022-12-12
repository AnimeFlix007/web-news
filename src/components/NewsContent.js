import React from "react";
import { Container } from "@mui/system";
import "../assests/css/NewsContent.css";
import NewsCard from "./NewsCard";
import { Pagination } from "@mui/material";

const NewsContent = ({ data, totalData, page, setPage }) => {
  const totalPages = Math.ceil(totalData / 11);
  const NextPageHandler = (e, p) => {
    setPage(p);
  };
  return (
    <Container maxWidth="md" className="container">
      <div className="content">
        <div className="SubscribeMessage">
          <span className="subscribeText">
            For Better Experience Subscribe To Our Youtube Channel
          </span>
          <a
            href="https://www.youtube.com/channel/UCbjw_uml7UsUDax21VMH-tw"
            rel="noopener noreferrer"
            target="_blank"
          >
            Subscribe
          </a>
        </div>
        <div className="cardContainer">
          {data.map((item) => {
            return <NewsCard key={item.title} item={item} />;
          })}
        </div>
        <Pagination
          count={totalPages}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={NextPageHandler}
          style={{
            marginBottom: "30px"
          }}
        />
      </div>
    </Container>
  );
};

export default NewsContent;
