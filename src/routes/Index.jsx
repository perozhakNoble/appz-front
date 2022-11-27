import PageHeader from "../components/PageHeader";
import nezlam1 from "../images/nezlam1.png";
import nezlam2 from "../images/nezlam2.png";

export default function Index() {
  return (
    <>
      <div className="w-full flex-col flex items-center justify-center gap-5">
        <PageHeader text="Пункти Незламності" />
        <img src={nezlam1} alt="nezlam1" />
        <img src={nezlam2} alt="nezlam1" />
      </div>
    </>
  );
}
