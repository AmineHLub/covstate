/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCountry } from '../../Redux/State/countrySelection';
import '../../styles/main-style/viewmain.css';
import '../../styles/main-style/selectormain.css';
import asia from '../../assets/asia.png';
import africa from '../../assets/africa.png';
import europe from '../../assets/europe.png';
import australia from '../../assets/australia.png';
import northAmerica from '../../assets/north-america.png';
import southAmerica from '../../assets/south-america.png';

const Continent = ({ selectedContinent, navSearch }) => {
  const dispatch = useDispatch();
  const countries = {
    africa: {
      ZW: 'Zimbabwe',
      ZM: 'Zambia',
      UG: 'Uganda',
      TN: 'Tunisia',
      TG: 'Togo',
      TZ: 'Tanzania',
      SZ: 'Swaziland',
      SD: 'Sudan',
      ZA: 'South Africa',
      SO: 'Somalia',
      SL: 'Sierra Leone',
      SC: 'Seychelles',
      SN: 'Senegal',
      RW: 'Rwanda',
      NG: 'Nigeria',
      NE: 'Niger',
      NA: 'Namibia',
      MZ: 'Mozambique',
      MA: 'Morocco',
      MR: 'Mauritania',
      ML: 'Mali',
      MW: 'Malawi',
      MG: 'Madagascar',
      LY: 'Libya',
      LR: 'Liberia',
      LS: 'Lesotho',
      KE: 'Kenya',
      GW: 'Guinea-Bissau',
      GN: 'Guinea',
      GH: 'Ghana',
      GM: 'Gambia',
      GA: 'Gabon',
      ET: 'Ethiopia',
      ER: 'Eritrea',
      GQ: 'Equatorial Guinea',
      CF: 'Central African Republic',
      EG: 'Egypt',
      DJ: 'Djibouti',
      CI: 'Ivory Coast',
      KM: 'Comoros',
      CG: 'Congo',
      CD: 'Congo, Democratic Republic',
      TD: 'Chad',
      CV: 'Cape Verde',
      CM: 'Cameroon',
      BI: 'Burundi',
      BF: 'Burkina Faso',
      BW: 'Botswana',
      DZ: 'Algeria',
      AO: 'Angola',
      BJ: 'Benin',
    },
    samerica: {
      VE: 'Venezuela',
      UY: 'Uruguay',
      PE: 'Peru',
      PY: 'Paraguay',
      EC: 'Ecuador',
      CO: 'Colombia',
      CL: 'Chile',
      BR: 'Brazil',
      BO: 'Bolivia',
      AR: 'Argentina',
    },
    namerica: {
      VI: 'Virgin Islands, U.S.',
      US: 'United States',
      PR: 'Puerto Rico',
      PA: 'Panama',
      MX: 'Mexico',
      JM: 'Jamaica',
      HN: 'Honduras',
      HT: 'Haiti',
      GT: 'Guatemala',
      GP: 'Guadeloupe',
      GD: 'Grenada',
      DO: 'Dominican Republic',
      CU: 'Cuba',
      CA: 'Canada',
      BM: 'Bermuda',
      BZ: 'Belize',
      BB: 'Barbados',
      AI: 'Anguilla',
      AG: 'Antigua And Barbuda',
      BS: 'Bahamas',
    },
    europe: {
      GB: 'United Kingdom',
      UA: 'Ukraine',
      CH: 'Switzerland',
      SE: 'Sweden',
      ES: 'Spain',
      SI: 'Slovenia',
      SK: 'Slovakia',
      RS: 'Serbia',
      SM: 'San Marino',
      RO: 'Romania',
      PT: 'Portugal',
      TR: 'Turkey',
      RU: 'Russian Federation',
      PL: 'Poland',
      NO: 'Norway',
      NL: 'Netherlands',
      ME: 'Montenegro',
      MC: 'Monaco',
      MD: 'Moldova',
      MT: 'Malta',
      MK: 'Macedonia',
      LU: 'Luxembourg',
      LT: 'Lithuania',
      LI: 'Liechtenstein',
      LV: 'Latvia',
      IT: 'Italy',
      IE: 'Ireland',
      IS: 'Iceland',
      HU: 'Hungary',
      VA: 'Vatican City State',
      GR: 'Greece',
      GI: 'Gibraltar',
      DE: 'Germany',
      FR: 'France',
      FI: 'Finland',
      EE: 'Estonia',
      CZ: 'Czech Republic',
      DK: 'Denmark',
      HR: 'Croatia',
      BG: 'Bulgaria',
      BA: 'Bosnia And Herzegovina',
      BE: 'Belgium',
      BY: 'Belarus',
      AL: 'Albania',
      AD: 'Andorra',
      AT: 'Austria',
    },
    asia: {
      YE: 'Yemen',
      VN: 'Viet Nam',
      UZ: 'Uzbekistan',
      TM: 'Turkmenistan',
      TH: 'Thailand',
      TJ: 'Tajikistan',
      TW: 'Taiwan',
      SY: 'Syria',
      LK: 'Sri Lanka',
      SG: 'Singapore',
      SA: 'Saudi Arabia',
      QA: 'Qatar',
      PH: 'Philippines',
      IL: 'Palestina',
      PK: 'Pakistan',
      OM: 'Oman',
      NP: 'Nepal',
      MM: 'Myanmar',
      MN: 'Mongolia',
      MV: 'Maldives',
      MY: 'Malaysia',
      LB: 'Lebanon',
      KG: 'Kyrgyzstan',
      KW: 'Kuwait',
      KR: 'Korea',
      JO: 'Jordan',
      KZ: 'Kazakhstan',
      JP: 'Japan',
      IQ: 'Iraq',
      IR: 'Iran',
      ID: 'Indonesia',
      IN: 'India',
      HK: 'Hong Kong',
      KH: 'Cambodia',
      CN: 'China',
      BN: 'Brunei Darussalam',
      BT: 'Bhutan',
      AF: 'Afghanistan',
      BH: 'Bahrain',
      BD: 'Bangladesh',
    },
    oceania: {
      WS: 'Samoa',
      PG: 'Papua New Guinea',
      NZ: 'New Zealand',
      AU: 'Australia',
      FJ: 'Fiji',
    },

  };
  let displayImg;
  let stringName;
  if (selectedContinent.selected === 'asia') {
    displayImg = asia;
    stringName = 'Asia';
  }
  if (selectedContinent.selected === 'europe') {
    displayImg = europe;
    stringName = 'Europe';
  }
  if (selectedContinent.selected === 'africa') {
    displayImg = africa;
    stringName = 'Africa';
  }
  if (selectedContinent.selected === 'oceania') {
    displayImg = australia;
    stringName = 'Oceania';
  }
  if (selectedContinent.selected === 'samerica') {
    displayImg = southAmerica;
    stringName = 'South America';
  }
  if (selectedContinent.selected === 'namerica') {
    displayImg = northAmerica;
    stringName = 'North America';
  }
  const countriesByName = Object.values(countries[selectedContinent.selected]);
  const CountriesByCode = Object.keys(countries[selectedContinent.selected]);
  return (
    <>
      <div className="upper-container">
        <div className="view-main-container">
          <img src={displayImg} alt="map-world" />
          <h2>{stringName}</h2>
        </div>
      </div>
      <div className="lower-container">
        <div className="stat-tag">{stringName}</div>
        <div className="selector-main-container d-flex">
          { countriesByName.filter((searched) => {
            if (navSearch === '') { return searched; }
            if (searched.toLowerCase().includes(navSearch.toLowerCase())) { return searched; }
            return null;
          }).map((el) => {
            const key = CountriesByCode
              .find((key) => countries[selectedContinent.selected][key] === el);
            return (
              <NavLink
                className="cont-container"
                key={el}
                exact
                to="/Details"
                onClick={() => dispatch(setCountry({
                  selected: el.toLowerCase().replace(/ /g, '_'),
                  link: `https://raw.githubusercontent.com/djaiss/mapsicon/master/all/${key.toLowerCase()}/128.png`,
                }))}
              >
                <img
                  src={`https://raw.githubusercontent.com/djaiss/mapsicon/master/all/${key.toLowerCase()}/128.png`}
                  alt="selectedContinent-shape"
                />
                <p className="cont-name">{el}</p>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Continent;
