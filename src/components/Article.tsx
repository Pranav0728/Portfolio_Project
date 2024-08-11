"use client"
import type { NextPage } from "next";

const ArticlePublications: NextPage = () => {
  const articles = [
    {
      srNo: 1,
      author: "Dr. Narayan Laxman Jadhav",
      title: "ींउधारक डॉ. बाबासाहेब आंबेडकर",
      publishedIn: "Dnyanganga Gharoghari Pradyana Vart (आवता) Kalmnoori",
      pageNo: "Pg.03",
      dateOfPublication: "April 14, 2016",
      level: "State level",
    },
    {
      srNo: 2,
      author: "Dr. Narayan Laxman Jadhav",
      title: "वाचनाने ानाचे संमण होते",
      publishedIn: "Daily Lokmat Newspaper and Daily Punyanagari Newspaper",
      pageNo: "Pg.08",
      dateOfPublication: "Oct. 17, 2016",
      level: "State level",
    },
  ];

  return (
    <main>
      <section className="article-publications section" id="article-publications">
        <div className="container">
          <div className="section-title padd-15">
            <h2>Article Publications in Magazines/Newspapers</h2>
          </div>
          <div className="articles-content padd-15">
            {articles.map((article) => (
              <div key={article.srNo} className="article-item">
                <h3>{article.title}</h3>
                <p><strong>Author:</strong> {article.author}</p>
                <p><strong>Published In:</strong> {article.publishedIn}</p>
                <p><strong>Page No:</strong> {article.pageNo}</p>
                <p><strong>Date of Publication:</strong> {article.dateOfPublication}</p>
                <p><strong>Level:</strong> {article.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ArticlePublications;
