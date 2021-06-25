/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);

// Create map instance
var chart = am4core.create("heatdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

//Set min/max fill color for each area
polygonSeries.heatRules.push({
    property: "fill",
    target: polygonSeries.mapPolygons.template,
    min: chart.colors.getIndex(1).brighten(1),
    max: chart.colors.getIndex(1).brighten(-0.3)
});
polygonSeries.data = [{
        "name": "Angola",
        "value": 100,
        "code3": "AGO",
        "id": "AO"
    }, {
        "name": "Uganda",
        "value": 59,
        "code3": "UGA",
        "id": "UG"
    }, {
        "name": "South Africa",
        "value": 54,
        "code3": "ZAF",
        "id": "ZA"
    }, {
        "name": "El Salvador",
        "value": 52,
        "code3": "SLV",
        "id": "SV"
    }, {
        "name": "Portugal",
        "value": 51,
        "code3": "PRT",
        "id": "PT"
    }, {
        "name": "Canada",
        "value": 50,
        "code3": "CAN",
        "id": "CA"
    }, {
        "name": "Singapore",
        "value": 42,
        "code3": "SGP",
        "id": "SG"
    }, {
        "name": "Ghana",
        "value": 41,
        "code3": "GHA",
        "id": "GH"
    }, {
        "name": "Nepal",
        "value": 41,
        "code3": "NPL",
        "id": "NP"
    }, {
        "name": "Philippines",
        "value": 40,
        "code3": "PHL",
        "id": "PH"
    }, {
        "name": "Panama",
        "value": 35,
        "code3": "PAN",
        "id": "PA"
    }, {
        "name": "Peru",
        "value": 35,
        "code3": "PER",
        "id": "PE"
    }, {
        "name": "Paraguay",
        "value": 35,
        "code3": "PRY",
        "id": "PY"
    }, {
        "name": "Qatar",
        "value": 35,
        "code3": "QAT",
        "id": "QA"
    }, {
        "name": "Malaysia",
        "value": 34,
        "code3": "MYS",
        "id": "MY"
    }, {
        "name": "Bolivia",
        "value": 32,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Nigeria",
        "value": 32,
        "code3": "NGA",
        "id": "NG"
    }, {
        "name": "New Zealand",
        "value": 31,
        "code3": "NZL",
        "id": "NZ"
    }, {
        "name": "Ireland",
        "value": 30,
        "code3": "IRL",
        "id": "IE"
    }, {
        "name": "India",
        "value": 30,
        "code3": "IND",
        "id": "IN"
    }, {
        "name": "United States",
        "value": 30,
        "code3": "USA",
        "id": "US"
    }, {
        "name": "Ecuador",
        "value": 30,
        "code3": "ECU",
        "id": "EC"
    }, {
        "name": "United Arab Emirates",
        "value": 29,
        "code3": "ARE",
        "id": "AE"
    }, {
        "name": "Bangladesh",
        "value": 28,
        "code3": "BGD",
        "id": "BD"
    }, {
        "name": "Guatemala",
        "value": 28,
        "code3": "GTM",
        "id": "GT"
    }, {
        "name": "Kenya",
        "value": 28,
        "code3": "KEN",
        "id": "KE"
    }, {
        "name": "Costa Rica",
        "value": 26,
        "code3": "CRI",
        "id": "CR"
    }, {
        "name": "Dominican Republic",
        "value": 26,
        "code3": "DOM",
        "id": "DO"
    }, {
        "name": "Colombia",
        "value": 25,
        "code3": "COL",
        "id": "CO"
    }, {
        "name": "Uruguay",
        "value": 24,
        "code3": "URY",
        "id": "UY"
    }, {
        "name": "Mexico",
        "value": 24,
        "code3": "MEX",
        "id": "MX"
    }, {
        "name": "Brazil",
        "value": 23,
        "code3": "BRA",
        "id": "BR"
    }, {
        "name": "Pakistan",
        "value": 20,
        "code3": "PAK",
        "id": "PK"
    }, {
        "name": "Indonesia",
        "value": 20,
        "code3": "IDN",
        "id": "ID"
    }, {
        "name": "Australia",
        "value": 20,
        "code3": "AUS",
        "id": "AU"
    }, {
        "name": "Venezuela",
        "value": 20,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Chile",
        "value": 20,
        "code3": "CHL",
        "id": "CL"
    }, {
        "name": "Romania",
        "value": 19,
        "code3": "ROU",
        "id": "RO"
    }, {
        "name": "Argentina",
        "value": 19,
        "code3": "ARG",
        "id": "AR"
    }, {
        "name": "United Kingdom",
        "value": 19,
        "code3": "GBR",
        "id": "GB"
    }, {
        "name": "Saudi Arabia",
        "value": 19,
        "code3": "SAU",
        "id": "SA"
    }, {
        "name": "Hong Kong",
        "value": 18,
        "code3": "HKG",
        "id": "HK"
    }, {
        "name": "Spain",
        "value": 17,
        "code3": "ESP",
        "id": "ES"
    }, {
        "name": "France",
        "value": 17,
        "code3": "FRA",
        "id": "FR"
    }, {
        "name": "Belgium",
        "value": 15,
        "code3": "BEL",
        "id": "BE"
    }, {
        "name": "Switzerland",
        "value": 14,
        "code3": "CHE",
        "id": "CH"
    }, {
        "name": "Greece",
        "value": 14,
        "code3": "GRC",
        "id": "GR"
    }, {
        "name": "Italy",
        "value": 14,
        "code3": "ITA",
        "id": "IT"
    }, {
        "name": "Morocco",
        "value": 13,
        "code3": "MAR",
        "id": "MA"
    }, {
        "name": "Norway",
        "value": 13,
        "code3": "NOR",
        "id": "NO"
    }, {
        "name": "Vietnam",
        "value": 13,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Sweden",
        "value": 13,
        "code3": "SWE",
        "id": "SE"
    }, {
        "name": "Austria",
        "value": 13,
        "code3": "AUT",
        "id": "AT"
    }, {
        "name": "Denmark",
        "value": 12,
        "code3": "DNK",
        "id": "DK"
    }, {
        "name": "Poland",
        "value": 10,
        "code3": "POL",
        "id": "PL"
    }, {
        "name": "Germany",
        "value": 10,
        "code3": "DEU",
        "id": "DE"
    }, {
        "name": "Thailand",
        "value": 10,
        "code3": "THA",
        "id": "TH"
    }, {
        "name": "Netherlands",
        "value": 10,
        "code3": "NLD",
        "id": "NL"
    }, {
        "name": "Ukraine",
        "value": 9,
        "code3": "UKR",
        "id": "UA"
    }, {
        "name": "Czechia",
        "value": 9,
        "code3": "CZE",
        "id": "CZ"
    }, {
        "name": "Belarus",
        "value": 9,
        "code3": "BLR",
        "id": "BY"
    }, {
        "name": "Turkey",
        "value": 9,
        "code3": "TUR",
        "id": "TR"
    }, {
        "name": "Finland",
        "value": 8,
        "code3": "FIN",
        "id": "FI"
    }, {
        "name": "Israel",
        "value": 7,
        "code3": "ISR",
        "id": "IL"
    }, {
        "name": "Egypt",
        "value": 7,
        "code3": "EGY",
        "id": "EG"
    }, {
        "name": "Hungary",
        "value": 6,
        "code3": "HUN",
        "id": "HU"
    }, {
        "name": "Russia",
        "value": 6,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Iran",
        "value": 4,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Japan",
        "value": 4,
        "code3": "JPN",
        "id": "JP"
    }, {
        "name": "South Korea",
        "value": 4,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Taiwan",
        "value": 4,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Pitcairn Islands",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Puerto Rico",
        "value": 0,
        "code3": "PRI",
        "id": "PR"
    }, {
        "name": "Afghanistan",
        "value": 0,
        "code3": "AFG",
        "id": "AF"
    }, {
        "name": "Papua New Guinea",
        "value": 0,
        "code3": "PNG",
        "id": "PG"
    }, {
        "name": "Nicaragua",
        "value": 0,
        "code3": "NIC",
        "id": "NI"
    }, {
        "name": "Montenegro",
        "value": 0,
        "code3": "MNE",
        "id": "ME"
    }, {
        "name": "Montserrat",
        "value": 0,
        "code3": "MSR",
        "id": "MS"
    }, {
        "name": "Mozambique",
        "value": 0,
        "code3": "MOZ",
        "id": "MZ"
    }, {
        "name": "Myanmar (Burma)",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Namibia",
        "value": 0,
        "code3": "NAM",
        "id": null
    }, {
        "name": "Nauru",
        "value": 0,
        "code3": "NRU",
        "id": "NR"
    }, {
        "name": "New Caledonia",
        "value": 0,
        "code3": "NCL",
        "id": "NC"
    }, {
        "name": "Niger",
        "value": 0,
        "code3": "NER",
        "id": "NE"
    }, {
        "name": "Palestine",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Niue",
        "value": 0,
        "code3": "NIU",
        "id": "NU"
    }, {
        "name": "Norfolk Island",
        "value": 0,
        "code3": "NFK",
        "id": "NF"
    }, {
        "name": "North Korea",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "North Macedonia",
        "value": 0,
        "code3": "MKD",
        "id": "MK"
    }, {
        "name": "Northern Mariana Islands",
        "value": 0,
        "code3": "MNP",
        "id": "MP"
    }, {
        "name": "Rwanda",
        "value": 0,
        "code3": "RWA",
        "id": "RW"
    }, {
        "name": "Palau",
        "value": 0,
        "code3": "PLW",
        "id": "PW"
    }, {
        "name": "Oman",
        "value": 0,
        "code3": "OMN",
        "id": "OM"
    }, {
        "name": "South Georgia & South Sandwich Islands",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "R\u00e9union",
        "value": 0,
        "code3": "REU",
        "id": "RE"
    }, {
        "name": "Syria",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Tajikistan",
        "value": 0,
        "code3": "TJK",
        "id": "TJ"
    }, {
        "name": "Tanzania",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Timor-Leste",
        "value": 0,
        "code3": "TLS",
        "id": "TL"
    }, {
        "name": "Togo",
        "value": 0,
        "code3": "TGO",
        "id": "TG"
    }, {
        "name": "Tokelau",
        "value": 0,
        "code3": "TKL",
        "id": "TK"
    }, {
        "name": "Tonga",
        "value": 0,
        "code3": "TON",
        "id": "TO"
    }, {
        "name": "Trinidad & Tobago",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Tunisia",
        "value": 0,
        "code3": "TUN",
        "id": "TN"
    }, {
        "name": "Turkmenistan",
        "value": 0,
        "code3": "TKM",
        "id": "TM"
    }, {
        "name": "Turks & Caicos Islands",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Tuvalu",
        "value": 0,
        "code3": "TUV",
        "id": "TV"
    }, {
        "name": "U.S. Outlying Islands",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "U.S. Virgin Islands",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Uzbekistan",
        "value": 0,
        "code3": "UZB",
        "id": "UZ"
    }, {
        "name": "Vanuatu",
        "value": 0,
        "code3": "VUT",
        "id": "VU"
    }, {
        "name": "Vatican City",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Wallis & Futuna",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Western Sahara",
        "value": 0,
        "code3": "ESH",
        "id": "EH"
    }, {
        "name": "Yemen",
        "value": 0,
        "code3": "YEM",
        "id": "YE"
    }, {
        "name": "Zambia",
        "value": 0,
        "code3": "ZMB",
        "id": "ZM"
    }, {
        "name": "Zimbabwe",
        "value": 0,
        "code3": "ZWE",
        "id": "ZW"
    }, {
        "name": "S\u00e3o Tom\u00e9 & Pr\u00edncipe",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Svalbard & Jan Mayen",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Samoa",
        "value": 0,
        "code3": "WSM",
        "id": "WS"
    }, {
        "name": "Suriname",
        "value": 0,
        "code3": "SUR",
        "id": "SR"
    }, {
        "name": "San Marino",
        "value": 0,
        "code3": "SMR",
        "id": "SM"
    }, {
        "name": "Senegal",
        "value": 0,
        "code3": "SEN",
        "id": "SN"
    }, {
        "name": "Serbia",
        "value": 0,
        "code3": "SRB",
        "id": "RS"
    }, {
        "name": "Seychelles",
        "value": 0,
        "code3": "SYC",
        "id": "SC"
    }, {
        "name": "Sierra Leone",
        "value": 0,
        "code3": "SLE",
        "id": "SL"
    }, {
        "name": "Sint Maarten",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Slovakia",
        "value": 0,
        "code3": "SVK",
        "id": "SK"
    }, {
        "name": "Slovenia",
        "value": 0,
        "code3": "SVN",
        "id": "SI"
    }, {
        "name": "Solomon Islands",
        "value": 0,
        "code3": "SLB",
        "id": "SB"
    }, {
        "name": "Somalia",
        "value": 0,
        "code3": "SOM",
        "id": "SO"
    }, {
        "name": "Monaco",
        "value": 0,
        "code3": "MCO",
        "id": "MC"
    }, {
        "name": "South Sudan",
        "value": 0,
        "code3": "SSD",
        "id": "SS"
    }, {
        "name": "Sri Lanka",
        "value": 0,
        "code3": "LKA",
        "id": "LK"
    }, {
        "name": "St. Barth\u00e9lemy",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "St. Helena",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "St. Kitts & Nevis",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "St. Lucia",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "St. Martin",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "St. Pierre & Miquelon",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "St. Vincent & Grenadines",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Sudan",
        "value": 0,
        "code3": "SDN",
        "id": "SD"
    }, {
        "name": "Mongolia",
        "value": 0,
        "code3": "MNG",
        "id": "MN"
    }, {
        "name": "Libya",
        "value": 0,
        "code3": "LBY",
        "id": "LY"
    }, {
        "name": "Moldova",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Cambodia",
        "value": 0,
        "code3": "KHM",
        "id": "KH"
    }, {
        "name": "Cape Verde",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Caribbean Netherlands",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Cayman Islands",
        "value": 0,
        "code3": "CYM",
        "id": "KY"
    }, {
        "name": "Central African Republic",
        "value": 0,
        "code3": "CAF",
        "id": "CF"
    }, {
        "name": "Chad",
        "value": 0,
        "code3": "TCD",
        "id": "TD"
    }, {
        "name": "China",
        "value": 0,
        "code3": "CHN",
        "id": "CN"
    }, {
        "name": "Christmas Island",
        "value": 0,
        "code3": "CXR",
        "id": "CX"
    }, {
        "name": "Cocos (Keeling) Islands",
        "value": 0,
        "code3": "CCK",
        "id": "CC"
    }, {
        "name": "Comoros",
        "value": 0,
        "code3": "COM",
        "id": "KM"
    }, {
        "name": "Congo - Brazzaville",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Congo - Kinshasa",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Cook Islands",
        "value": 0,
        "code3": "COK",
        "id": "CK"
    }, {
        "name": "Croatia",
        "value": 0,
        "code3": "HRV",
        "id": "HR"
    }, {
        "name": "Cuba",
        "value": 0,
        "code3": "CUB",
        "id": "CU"
    }, {
        "name": "Cura\u00e7ao",
        "value": 0,
        "code3": "CUW",
        "id": "CW"
    }, {
        "name": "Cyprus",
        "value": 0,
        "code3": "CYP",
        "id": "CY"
    }, {
        "name": "C\u00f4te d\u2019Ivoire",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Djibouti",
        "value": 0,
        "code3": "DJI",
        "id": "DJ"
    }, {
        "name": "Dominica",
        "value": 0,
        "code3": "DMA",
        "id": "DM"
    }, {
        "name": "Equatorial Guinea",
        "value": 0,
        "code3": "GNQ",
        "id": "GQ"
    }, {
        "name": "Eritrea",
        "value": 0,
        "code3": "ERI",
        "id": "ER"
    }, {
        "name": "Estonia",
        "value": 0,
        "code3": "EST",
        "id": "EE"
    }, {
        "name": "Eswatini",
        "value": 0,
        "code3": "SWZ",
        "id": "SZ"
    }, {
        "name": "Cameroon",
        "value": 0,
        "code3": "CMR",
        "id": "CM"
    }, {
        "name": "Burundi",
        "value": 0,
        "code3": "BDI",
        "id": "BI"
    }, {
        "name": "Micronesia",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Burkina Faso",
        "value": 0,
        "code3": "BFA",
        "id": "BF"
    }, {
        "name": "Algeria",
        "value": 0,
        "code3": "DZA",
        "id": "DZ"
    }, {
        "name": "American Samoa",
        "value": 0,
        "code3": "ASM",
        "id": "AS"
    }, {
        "name": "Andorra",
        "value": 0,
        "code3": "AND",
        "id": "AD"
    }, {
        "name": "Anguilla",
        "value": 0,
        "code3": "AIA",
        "id": "AI"
    }, {
        "name": "Antarctica",
        "value": 0,
        "code3": "ATA",
        "id": "AQ"
    }, {
        "name": "Antigua & Barbuda",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Armenia",
        "value": 0,
        "code3": "ARM",
        "id": "AM"
    }, {
        "name": "Aruba",
        "value": 0,
        "code3": "ABW",
        "id": "AW"
    }, {
        "name": "Azerbaijan",
        "value": 0,
        "code3": "AZE",
        "id": "AZ"
    }, {
        "name": "Bahamas",
        "value": 0,
        "code3": "BHS",
        "id": "BS"
    }, {
        "name": "Bahrain",
        "value": 0,
        "code3": "BHR",
        "id": "BH"
    }, {
        "name": "Barbados",
        "value": 0,
        "code3": "BRB",
        "id": "BB"
    }, {
        "name": "Belize",
        "value": 0,
        "code3": "BLZ",
        "id": "BZ"
    }, {
        "name": "Benin",
        "value": 0,
        "code3": "BEN",
        "id": "BJ"
    }, {
        "name": "Bermuda",
        "value": 0,
        "code3": "BMU",
        "id": "BM"
    }, {
        "name": "Bhutan",
        "value": 0,
        "code3": "BTN",
        "id": "BT"
    }, {
        "name": "Bosnia & Herzegovina",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Botswana",
        "value": 0,
        "code3": "BWA",
        "id": "BW"
    }, {
        "name": "Bouvet Island",
        "value": 0,
        "code3": "BVT",
        "id": "BV"
    }, {
        "name": "British Indian Ocean Territory",
        "value": 0,
        "code3": "IOT",
        "id": "IO"
    }, {
        "name": "British Virgin Islands",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Brunei",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Bulgaria",
        "value": 0,
        "code3": "BGR",
        "id": "BG"
    }, {
        "name": "Ethiopia",
        "value": 0,
        "code3": "ETH",
        "id": "ET"
    }, {
        "name": "Falkland Islands (Islas Malvinas)",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Faroe Islands",
        "value": 0,
        "code3": "FRO",
        "id": "FO"
    }, {
        "name": "Fiji",
        "value": 0,
        "code3": "FJI",
        "id": "FJ"
    }, {
        "name": "Kosovo",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Kuwait",
        "value": 0,
        "code3": "KWT",
        "id": "KW"
    }, {
        "name": "Kyrgyzstan",
        "value": 0,
        "code3": "KGZ",
        "id": "KG"
    }, {
        "name": "Laos",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Latvia",
        "value": 0,
        "code3": "LVA",
        "id": "LV"
    }, {
        "name": "Lebanon",
        "value": 0,
        "code3": "LBN",
        "id": "LB"
    }, {
        "name": "Lesotho",
        "value": 0,
        "code3": "LSO",
        "id": "LS"
    }, {
        "name": "Liberia",
        "value": 0,
        "code3": "LBR",
        "id": "LR"
    }, {
        "name": "Albania",
        "value": 0,
        "code3": "ALB",
        "id": "AL"
    }, {
        "name": "Liechtenstein",
        "value": 0,
        "code3": "LIE",
        "id": "LI"
    }, {
        "name": "Lithuania",
        "value": 0,
        "code3": "LTU",
        "id": "LT"
    }, {
        "name": "Luxembourg",
        "value": 0,
        "code3": "LUX",
        "id": "LU"
    }, {
        "name": "Macao",
        "value": 0,
        "code3": "MAC",
        "id": "MO"
    }, {
        "name": "Madagascar",
        "value": 0,
        "code3": "MDG",
        "id": "MG"
    }, {
        "name": "Malawi",
        "value": 0,
        "code3": "MWI",
        "id": "MW"
    }, {
        "name": "Maldives",
        "value": 0,
        "code3": "MDV",
        "id": "MV"
    }, {
        "name": "Mali",
        "value": 0,
        "code3": "MLI",
        "id": "ML"
    }, {
        "name": "Malta",
        "value": 0,
        "code3": "MLT",
        "id": "MT"
    }, {
        "name": "Marshall Islands",
        "value": 0,
        "code3": "MHL",
        "id": "MH"
    }, {
        "name": "Martinique",
        "value": 0,
        "code3": "MTQ",
        "id": "MQ"
    }, {
        "name": "Mauritania",
        "value": 0,
        "code3": "MRT",
        "id": "MR"
    }, {
        "name": "Mauritius",
        "value": 0,
        "code3": "MUS",
        "id": "MU"
    }, {
        "name": "Mayotte",
        "value": 0,
        "code3": "MYT",
        "id": "YT"
    }, {
        "name": "Kiribati",
        "value": 0,
        "code3": "KIR",
        "id": "KI"
    }, {
        "name": "Kazakhstan",
        "value": 0,
        "code3": "KAZ",
        "id": "KZ"
    }, {
        "name": "Jordan",
        "value": 0,
        "code3": "JOR",
        "id": "JO"
    }, {
        "name": "Guam",
        "value": 0,
        "code3": "GUM",
        "id": "GU"
    }, {
        "name": "French Guiana",
        "value": 0,
        "code3": "GUF",
        "id": "GF"
    }, {
        "name": "French Polynesia",
        "value": 0,
        "code3": "PYF",
        "id": "PF"
    }, {
        "name": "French Southern Territories",
        "value": 0,
        "code3": "ATF",
        "id": "TF"
    }, {
        "name": "Gabon",
        "value": 0,
        "code3": "GAB",
        "id": "GA"
    }, {
        "name": "Gambia",
        "value": 0,
        "code3": "GMB",
        "id": "GM"
    }, {
        "name": "Georgia",
        "value": 0,
        "code3": "GEO",
        "id": "GE"
    }, {
        "name": "Gibraltar",
        "value": 0,
        "code3": "GIB",
        "id": "GI"
    }, {
        "name": "Greenland",
        "value": 0,
        "code3": "GRL",
        "id": "GL"
    }, {
        "name": "Grenada",
        "value": 0,
        "code3": "GRD",
        "id": "GD"
    }, {
        "name": "Guadeloupe",
        "value": 0,
        "code3": "GLP",
        "id": "GP"
    }, {
        "name": "Guernsey",
        "value": 0,
        "code3": "GGY",
        "id": "GG"
    }, {
        "name": "Jersey",
        "value": 0,
        "code3": "JEY",
        "id": "JE"
    }, {
        "name": "Guinea",
        "value": 0,
        "code3": "GIN",
        "id": "GN"
    }, {
        "name": "Guinea-Bissau",
        "value": 0,
        "code3": "GNB",
        "id": "GW"
    }, {
        "name": "Guyana",
        "value": 0,
        "code3": "GUY",
        "id": "GY"
    }, {
        "name": "Haiti",
        "value": 0,
        "code3": "HTI",
        "id": "HT"
    }, {
        "name": "Heard & McDonald Islands",
        "value": 0,
        "code3": "Unknown code",
        "id": "Unknown code"
    }, {
        "name": "Honduras",
        "value": 0,
        "code3": "HND",
        "id": "HN"
    }, {
        "name": "Iceland",
        "value": 0,
        "code3": "ISL",
        "id": "IS"
    }, {
        "name": "Iraq",
        "value": 0,
        "code3": "IRQ",
        "id": "IQ"
    }, {
        "name": "Isle of Man",
        "value": 0,
        "code3": "IMN",
        "id": "IM"
    }, {
        "name": "Jamaica",
        "value": 0,
        "code3": "JAM",
        "id": "JM"
    }, {
        "name": "land Islands",
        "value": 0,
        "code3": "ALA",
        "id": "AX"
    }]
    // Make map load polygon data (state shapes and names) from GeoJSON
polygonSeries.useGeodata = true;

// Set heatmap values for each state

// Set up heat legend
var heatLegend = chart.createChild(am4maps.HeatLegend);
heatLegend.id = "heatLegend";
heatLegend.series = polygonSeries;
heatLegend.align = "right";
heatLegend.valign = "bottom";
heatLegend.width = am4core.percent(35);
heatLegend.marginRight = am4core.percent(4);
heatLegend.background.fill = am4core.color("#000");
heatLegend.background.fillOpacity = 0.05;
heatLegend.padding(5, 5, 5, 5);

// Set up custom heat map legend labels using axis ranges
var minRange = heatLegend.valueAxis.axisRanges.create();
minRange.label.horizontalCenter = "left";

var maxRange = heatLegend.valueAxis.axisRanges.create();
maxRange.label.horizontalCenter = "right";

// Blank out internal heat legend value axis labels
heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function(labelText) {
    return "";
});

// Update heat legend value labels
polygonSeries.events.on("datavalidated", function(ev) {
    var heatLegend = ev.target.map.getKey("heatLegend");
    var min = heatLegend.series.dataItem.values.value.low;
    var minRange = heatLegend.valueAxis.axisRanges.getIndex(0);
    minRange.value = min;
    minRange.label.text = "" + heatLegend.numberFormatter.format(min);

    var max = heatLegend.series.dataItem.values.value.high;
    var maxRange = heatLegend.valueAxis.axisRanges.getIndex(1);
    maxRange.value = max;
    maxRange.label.text = "" + heatLegend.numberFormatter.format(max);
});

// Configure series tooltip
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}: {value}";
polygonTemplate.nonScalingStroke = true;
polygonTemplate.strokeWidth = 0.5;

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#3c5bdc");