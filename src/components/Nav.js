import { Menubar } from "primereact/menubar";
import { Button } from 'primereact/button';
import "../App.css";

const Navigation = () => {
 
  const navlist = [
    { label: "Home", icon: "pi pi-fw pi-home", url: "/" },
    { label: "Policyholders", icon: "pi pi-fw pi-plus-circle", url: "/policyholder" },
    { label: "Doctors", icon: "pi pi-fw pi-user", url: "/doctor" },
    { label: "Claim", icon: "pi pi-fw pi-paypal", url: "/claim" },
    { label: "Reports", icon: "pi pi-fw pi-map", url: "/report"},

  ];

  return (
    <div>
      <header>
        <nav>
          <ul className="header">
            <Menubar model={navlist}  end={<Button label="Connect Metamask" className="header-button" />}/>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Navigation;
