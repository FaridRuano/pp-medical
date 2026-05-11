import { notFound } from "next/navigation";
import EquipmentCatalog from "@app/_components/equipments/catalog/EquipmentCatalog";
import { audienceLabels, categoryAudienceGroups, categoryLabels } from "@app/_data/catalog";

export function generateStaticParams() {
  return Object.keys(categoryLabels).map((category) => ({ category }));
}

export default async function Page({ params, searchParams }) {
  const { category } = await params;
  const resolvedSearchParams = await searchParams;
  const requestedAudience = resolvedSearchParams?.audience;

  if (!categoryLabels[category]) {
    notFound();
  }

  const validAudiences = categoryAudienceGroups[category] ?? [];
  const initialAudienceSlug =
    typeof requestedAudience === "string" &&
    validAudiences.includes(requestedAudience) &&
    audienceLabels[requestedAudience]
      ? requestedAudience
      : null;

  return (
    <EquipmentCatalog
      initialCategorySlug={category}
      initialAudienceSlug={initialAudienceSlug}
    />
  );
}
