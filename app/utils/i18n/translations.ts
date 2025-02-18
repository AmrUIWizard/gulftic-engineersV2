const enModules = import.meta.glob("./locales/en/*.json", { eager: true });
const arModules = import.meta.glob("./locales/ar/*.json", { eager: true });

const processModules = (modules: Record<string, any>) => {
  const translations: { [key: string]: any } = {};
  Object.keys(modules).forEach((key) => {
    const filename = key.split("/").pop()?.replace(".json", "");
    if (filename) translations[filename] = modules[key];
  });
  return translations;
};

const resources = {
  en: processModules(enModules),
  ar: processModules(arModules),
};

export default resources;
