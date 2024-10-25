
import NotFound from "@/components/pages/Blog/NotFound/NotFound.page";
import Header from "@/components/pages/Header/Header.component";

function notFound() {
  return (
    <>
      <Header/>
      <NotFound link={"/"} />
    </>
  );
}

export default notFound;
