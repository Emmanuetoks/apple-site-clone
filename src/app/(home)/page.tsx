import Main from "@/components/_ui_/Main";
import ContentModule from "./ContentModule";
// import NavBar from './Navbar/index.tsx'
// import NavBar from "../../components/Navbar"
// import NavBar from "@/components/Navbar";
const Home = () => {
  return (
    <Main page="home">
      <section className="section">
        <ContentModule contentName="iphone14__pro" />
      </section>
      <section className="py-2">
        <ContentModule contentName="iphone14" />
      </section>
      <section className="py-2">
        <ContentModule contentName="macbook_air_15" />
      </section>
      <section className="section section--grid gap-2 grid grid-cols-1 mobileX:grid-cols-2">
        <ContentModule contentName="ipad" />
        <ContentModule contentName="macStudio" />
        <ContentModule contentName="macbook_pro" />
        <ContentModule contentName="ipad_pro" />
      </section>
    </Main>
  );
};

export default Home;