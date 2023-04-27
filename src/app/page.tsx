import Aside from "./components/structure/aside";
import Footer from "./components/structure/footer";
import Main from "./components/structure/main";

export default function HomePage() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Aside />
        <Main />
      </div>
      <Footer />
    </div>
  )
}
