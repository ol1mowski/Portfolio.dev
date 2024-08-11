import Header from "@/components/UI/Header/Header.component";
import NotFound from "@/components/pages/Blog/NotFound/NotFound.page";

function notFound() {
  return (
    <>
      <Header type="out" />
      <NotFound link={"/"} />
    </>
  );
}

export default notFound;
