export interface Settings {
  field1: string;
  field2: string[];
  field3: string;
  field4: string[];
  field5: string;
  field6: string;
  field7: string[];
  field8: string;
  field9: string[];
  field10: string;
  field11: string;
  field12: string;
  field13: string;
  field14: string;
  field15: string;
  field16: string;
  field17: string;
  field18: string;
  field19: string;
  field20: string;
  field21: string;
  field22: string;
  field23: string;
  field24: string;
  field25: string;
  field26: string;
  field27: string;
  field28: string;
  field29: string;
  field30: string;
  field31: string;
  field32: string;
  field33: string;
  field34: string;
  field35: string;
  field36: string;
  field37: string;
  field38: string;
  field39: string;
  field40: string;
}

export const getSettings = async (): Promise<Settings> => {
  const result = await fetch("/api/settings");
  const settings = await result.json();
  return settings;
};
