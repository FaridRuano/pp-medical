import HomeHero from "@app/_components/home/hero/HomeHero";
import HomeWhyChooseUs from "@app/_components/home/why-choose-us/HomeWhyChooseUs";
import HomeBrands from "@app/_components/home/brands/HomeBrands";
import HomeClients from "@app/_components/home/clients/HomeClients";
import HomeEquipments from "@app/_components/home/equipments/HomeEquipments";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeWhyChooseUs />
      <HomeEquipments />
      <HomeBrands />
      <HomeClients />
    </>
  );
}
