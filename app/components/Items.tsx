import { useTranslation } from "react-i18next";
import React from "react";

const Items = () => {
  const { t } = useTranslation();
  const itemsList = [
    { name: t("home"), id: 1 },
    { name: t("about"), id: 2 },
  ];
  return (
    <>
      {itemsList.map((item: any) => (
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
    </>
  );
};

export default Items;
