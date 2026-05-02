import { notFound } from "next/navigation";
import EquipmentCatalog from "@app/_components/equipments/catalog/EquipmentCatalog";
import { categoryLabels } from "@app/_data/catalog";

export function generateStaticParams() {
  return Object.keys(categoryLabels).map((category) => ({ category }));
}

export default async function Page({ params }) {
  const { category } = await params;

  if (!categoryLabels[category]) {
    notFound();
  }

  return <EquipmentCatalog initialCategorySlug={category} />;
}
