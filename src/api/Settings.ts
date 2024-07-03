interface Settings {
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
}

export const getSettings = async (): Promise<Settings> => {
  const result = await fetch("/api/settings");
  const settings = await result.json();
  return settings;
};
