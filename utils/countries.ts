import countries from "world-countries";

export const formattedCountries = countries.map((c) => {
  return {
    code: c.cca2,
    name: c.name.common,
    flag: c.flag,
    location: c.latlng,
    region: c.region,
  };
});

export const findCountryByCode = (code: string) => {
  return formattedCountries.find((c) => c.code === code);
};
