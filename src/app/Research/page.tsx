import ArticlePublications from "@/components/Article";
import ResearchPublications from "@/components/Research";
import ResearchPapers from "@/components/Research-Papers";
import Sidebar from "@/components/sidebar/sidebar";

export default function page() {
  return (
    <div>
      <Sidebar/>
      <ResearchPublications/>
    </div>
  )
}
