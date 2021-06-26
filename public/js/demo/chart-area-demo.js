am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);


    // Create map instance
    var chart = am4core.create("chartdiv", am4maps.MapChart);
    chart.geodata = am4geodata_worldLow;


    // Set projection
    chart.projection = new am4maps.projections.Miller();
    var title = chart.titles.create();

    title.textAlign = "middle";
    var mapData = [{
        "id": "AF",
        "name": "Afghanistan",
        "value": 32358260,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "AL",
        "name": "Albania",
        "value": 3215988,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "DZ",
        "name": "Algeria",
        "value": 35980193,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "AO",
        "name": "Angola",
        "value": 19618432,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "AR",
        "name": "Argentina",
        "value": 40764561,
        "color": chart.colors.getIndex(3),
        "domain": "value",
        "code": "value"
    }, {
        "id": "AM",
        "name": "Armenia",
        "value": 3100236,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "AU",
        "name": "Australia",
        "value": 22605732,
        "color": "#8aabb0"
    }, {
        "id": "AT",
        "name": "Austria",
        "value": 8413429,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "AZ",
        "name": "Azerbaijan",
        "value": 9306023,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "BH",
        "name": "Bahrain",
        "value": 1323535,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "BD",
        "name": "Bangladesh",
        "value": 150493658,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "BY",
        "name": "Belarus",
        "value": 9559441,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "BE",
        "name": "Belgium",
        "value": 10754056,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "BJ",
        "name": "Benin",
        "value": 9099922,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "BT",
        "name": "Bhutan",
        "value": "Bosnia and Herzegovina",
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "BO",
        "name": "Bolivia",
        "value": 10088108,
        "color": chart.colors.getIndex(3),
        "domain": "value",
        "code": "value"
    }, {
        "id": "BA",
        "name": "Bosnia and Herzegovina",
        "value": "abs asas <br> 12121 12",
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "BW",
        "name": "Botswana",
        "value": 2030738,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "BR",
        "name": "Brazil",
        "value": 196655014,
        "color": chart.colors.getIndex(3),
        "domain": "value",
        "code": "value"
    }, {
        "id": "BN",
        "name": "Brunei",
        "value": 405938,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "BG",
        "name": "Bulgaria",
        "value": 7446135,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "BF",
        "name": "Burkina Faso",
        "value": 16967845,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "BI",
        "name": "Burundi",
        "value": 8575172,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "KH",
        "name": "Cambodia",
        "value": 14305183,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "CM",
        "name": "Cameroon",
        "value": 20030362,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "CA",
        "name": "Canada",
        "value": 34349561,
        "color": chart.colors.getIndex(4),
        "domain": "value",
        "code": "value"
    }, {
        "id": "CV",
        "name": "Cape Verde",
        "value": 500585,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "CF",
        "name": "Central African Rep.",
        "value": 4486837,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "TD",
        "name": "Chad",
        "value": 11525496,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "CL",
        "name": "Chile",
        "value": 17269525,
        "color": chart.colors.getIndex(3),
        "domain": "value",
        "code": "value"
    }, {
        "id": "CN",
        "name": "China",
        "value": 1347565324,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "CO",
        "name": "Colombia",
        "value": 46927125,
        "color": chart.colors.getIndex(3),
        "domain": "value",
        "code": "value"
    }, {
        "id": "KM",
        "name": "Comoros",
        "value": 753943,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "CD",
        "name": "Congo, Dem. Rep.",
        "value": 67757577,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "CG",
        "name": "Congo, Rep.",
        "value": 4139748,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "CR",
        "name": "Costa Rica",
        "value": 4726575,
        "color": chart.colors.getIndex(4),
        "domain": "value",
        "code": "value"
    }, {
        "id": "CI",
        "name": "Cote d'Ivoire",
        "value": 20152894,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "HR",
        "name": "Croatia",
        "value": 4395560,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "CU",
        "name": "Cuba",
        "value": 11253665,
        "color": chart.colors.getIndex(4),
        "domain": "value",
        "code": "value"
    }, {
        "id": "CY",
        "name": "Cyprus",
        "value": 1116564,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "CZ",
        "name": "Czech Rep.",
        "value": 10534293,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "DK",
        "name": "Denmark",
        "value": 5572594,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "DJ",
        "name": "Djibouti",
        "value": 905564,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "DO",
        "name": "Dominican Rep.",
        "value": 10056181,
        "color": chart.colors.getIndex(4),
        "domain": "value",
        "code": "value"
    }, {
        "id": "EC",
        "name": "Ecuador",
        "value": 14666055,
        "color": chart.colors.getIndex(3),
        "domain": "value",
        "code": "value"
    }, {
        "id": "EG",
        "name": "Egypt",
        "value": 82536770,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "SV",
        "name": "El Salvador",
        "value": 6227491,
        "color": chart.colors.getIndex(4),
        "domain": "value",
        "code": "value"
    }, {
        "id": "GQ",
        "name": "Equatorial Guinea",
        "value": 720213,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "ER",
        "name": "Eritrea",
        "value": 5415280,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "EE",
        "name": "Estonia",
        "value": 1340537,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "ET",
        "name": "Ethiopia",
        "value": 84734262,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "FJ",
        "name": "Fiji",
        "value": 868406,
        "color": "#8aabb0"
    }, {
        "id": "FI",
        "name": "Finland",
        "value": 5384770,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "FR",
        "name": "France",
        "value": 63125894,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "GA",
        "name": "Gabon",
        "value": 1534262,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "GM",
        "name": "Gambia",
        "value": 1776103,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "GE",
        "name": "Georgia",
        "value": 4329026,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "DE",
        "name": "Germany",
        "value": 82162512,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "GH",
        "name": "Ghana",
        "value": 24965816,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "GR",
        "name": "Greece",
        "value": 11390031,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "GT",
        "name": "Guatemala",
        "value": 14757316,
        "color": chart.colors.getIndex(4),
        "domain": "value",
        "code": "value"
    }, {
        "id": "GN",
        "name": "Guinea",
        "value": 10221808,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "GW",
        "name": "Guinea-Bissau",
        "value": 1547061,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "GY",
        "name": "Guyana",
        "value": 756040,
        "color": chart.colors.getIndex(3),
        "domain": "value",
        "code": "value"
    }, {
        "id": "HT",
        "name": "Haiti",
        "value": 10123787,
        "color": chart.colors.getIndex(4),
        "domain": "value",
        "code": "value"
    }, {
        "id": "HN",
        "name": "Honduras",
        "value": 7754687,
        "color": chart.colors.getIndex(4),
        "domain": "value",
        "code": "value"
    }, {
        "id": "HK",
        "name": "Hong Kong, China",
        "value": 7122187,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "HU",
        "name": "Hungary",
        "value": 9966116,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "IS",
        "name": "Iceland",
        "value": 324366,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "IN",
        "name": "India",
        "values": 324,

        "color": chart.colors.getIndex(3),
        "domain": "value",
        "code": "value"
    }, {
        "id": "ID",
        "name": "Indonesia",
        "value": 242325638,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "IR",
        "name": "Iran",
        "value": 74798599,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "IQ",
        "name": "Iraq",
        "value": 32664942,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "IE",
        "name": "Ireland",
        "value": 4525802,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "IL",
        "name": "Israel",
        "value": 7562194,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "IT",
        "name": "Italy",
        "value": 60788694,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "JM",
        "name": "Jamaica",
        "value": 2751273,
        "color": chart.colors.getIndex(4),
        "domain": "value",
        "code": "value"
    }, {
        "id": "JP",
        "name": "Japan",
        "value": 126497241,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "JO",
        "name": "Jordan",
        "value": 6330169,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "KZ",
        "name": "Kazakhstan",
        "value": 16206750,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "KE",
        "name": "Kenya",
        "value": 41609728,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "KP",
        "name": "Korea, Dem. Rep.",
        "value": 24451285,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "KR",
        "name": "Korea, Rep.",
        "value": 48391343,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "KW",
        "name": "Kuwait",
        "value": 2818042,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "KG",
        "name": "Kyrgyzstan",
        "value": 5392580,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "LA",
        "name": "Laos",
        "value": 6288037,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "LV",
        "name": "Latvia",
        "value": 2243142,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "LB",
        "name": "Lebanon",
        "value": 4259405,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "LS",
        "name": "Lesotho",
        "value": 2193843,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "LR",
        "name": "Liberia",
        "value": 4128572,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "LY",
        "name": "Libya",
        "value": 6422772,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "LT",
        "name": "Lithuania",
        "value": 3307481,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "LU",
        "name": "Luxembourg",
        "value": 515941,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "MK",
        "name": "Macedonia, FYR",
        "value": 2063893,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "MG",
        "name": "Madagascar",
        "value": 21315135,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "MW",
        "name": "Malawi",
        "value": 15380888,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "MY",
        "name": "Malaysia",
        "value": 28859154,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "ML",
        "name": "Mali",
        "value": 15839538,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "MR",
        "name": "Mauritania",
        "value": 3541540,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "MU",
        "name": "Mauritius",
        "value": 1306593,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "MX",
        "name": "Mexico",
        "value": 114793341,
        "color": chart.colors.getIndex(4),
        "domain": "value",
        "code": "value"
    }, {
        "id": "MD",
        "name": "Moldova",
        "value": 3544864,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "MN",
        "name": "Mongolia",
        "value": 2800114,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "ME",
        "name": "Montenegro",
        "value": 632261,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "MA",
        "name": "Morocco",
        "value": 32272974,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "MZ",
        "name": "Mozambique",
        "value": 23929708,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "MM",
        "name": "Myanmar",
        "value": 48336763,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "NA",
        "name": "Namibia",
        "value": 2324004,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "NP",
        "name": "Nepal",
        "value": 30485798,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "NL",
        "name": "Netherlands",
        "value": 16664746,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "NZ",
        "name": "New Zealand",
        "value": 4414509,
        "color": "#8aabb0"
    }, {
        "id": "NI",
        "name": "Nicaragua",
        "value": 5869859,
        "color": chart.colors.getIndex(4),
        "domain": "value",
        "code": "value"
    }, {
        "id": "NE",
        "name": "Niger",
        "value": 16068994,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "NG",
        "name": "Nigeria",
        "value": 162470737,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "NO",
        "name": "Norway",
        "value": 4924848,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "OM",
        "name": "Oman",
        "value": 2846145,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "PK",
        "name": "Pakistan",
        "value": 176745364,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "PA",
        "name": "Panama",
        "value": 3571185,
        "color": chart.colors.getIndex(4),
        "domain": "value",
        "code": "value"
    }, {
        "id": "PG",
        "name": "Papua New Guinea",
        "value": 7013829,
        "color": "#8aabb0"
    }, {
        "id": "PY",
        "name": "Paraguay",
        "value": 6568290,
        "color": chart.colors.getIndex(3),
        "domain": "value",
        "code": "value"
    }, {
        "id": "PE",
        "name": "Peru",
        "value": 29399817,
        "color": chart.colors.getIndex(3),
        "domain": "value",
        "code": "value"
    }, {
        "id": "PH",
        "name": "Philippines",
        "value": 94852030,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "PL",
        "name": "Poland",
        "value": 38298949,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "PT",
        "name": "Portugal",
        "value": 10689663,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "PR",
        "name": "Puerto Rico",
        "value": 3745526,
        "color": chart.colors.getIndex(4),
        "domain": "value",
        "code": "value"
    }, {
        "id": "QA",
        "name": "Qatar",
        "value": 1870041,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "RO",
        "name": "Romania",
        "value": 21436495,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "RU",
        "name": "Russia",
        "value": 142835555,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "RW",
        "name": "Rwanda",
        "value": 10942950,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "SA",
        "name": "Saudi Arabia",
        "value": 28082541,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "SN",
        "name": "Senegal",
        "value": 12767556,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "RS",
        "name": "Serbia",
        "value": 9853969,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "SL",
        "name": "Sierra Leone",
        "value": 5997486,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "SG",
        "name": "Singapore",
        "value": 5187933,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "SK",
        "name": "Slovak Republic",
        "value": 5471502,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "SI",
        "name": "Slovenia",
        "value": 2035012,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "SB",
        "name": "Solomon Islands",
        "value": 552267,
        "color": "#8aabb0"
    }, {
        "id": "SO",
        "name": "Somalia",
        "value": 9556873,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "ZA",
        "name": "South Africa",
        "value": 50459978,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "ES",
        "name": "Spain",
        "value": 46454895,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "LK",
        "name": "Sri Lanka",
        "value": 21045394,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "SD",
        "name": "Sudan",
        "value": 34735288,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "SR",
        "name": "Suriname",
        "value": 529419,
        "color": chart.colors.getIndex(3),
        "domain": "value",
        "code": "value"
    }, {
        "id": "SZ",
        "name": "Swaziland",
        "value": 1203330,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "SE",
        "name": "Sweden",
        "value": 9440747,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "CH",
        "name": "Switzerland",
        "value": 7701690,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "SY",
        "name": "Syria",
        "value": 20766037,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "TW",
        "name": "Taiwan",
        "value": 23072000,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "TJ",
        "name": "Tajikistan",
        "value": 6976958,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "TZ",
        "name": "Tanzania",
        "value": 46218486,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "TH",
        "name": "Thailand",
        "value": 69518555,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "TG",
        "name": "Togo",
        "value": 6154813,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "TT",
        "name": "Trinidad and Tobago",
        "value": 1346350,
        "color": chart.colors.getIndex(4),
        "domain": "value",
        "code": "value"
    }, {
        "id": "TN",
        "name": "Tunisia",
        "value": 10594057,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "TR",
        "name": "Turkey",
        "value": 73639596,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "TM",
        "name": "Turkmenistan",
        "value": 5105301,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value",
    }, {
        "id": "UG",
        "name": "Uganda",
        "value": 34509205,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "UA",
        "name": "Ukraine",
        "value": 45190180,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "AE",
        "name": "United Arab Emirates",
        "value": 7890924,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "GB",
        "name": "United Kingdom",
        "value": 62417431,
        "color": chart.colors.getIndex(1),
        "domain": "value",
        "code": "value"
    }, {
        "id": "US",
        "name": "United States",
        "value": 313085380,
        "color": chart.colors.getIndex(4),
        "domain": "value",
        "code": "value"
    }, {
        "id": "UY",
        "name": "Uruguay",
        "value": 3380008,
        "color": chart.colors.getIndex(3),
        "domain": "value",
        "code": "value"
    }, {
        "id": "UZ",
        "name": "Uzbekistan",
        "value": 27760267,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "VE",
        "name": "Venezuela",
        "value": 29436891,
        "color": chart.colors.getIndex(3),
        "domain": "value",
        "code": "value"
    }, {
        "id": "PS",
        "name": "West Bank and Gaza",
        "value": 4152369,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "VN",
        "name": "Vietnam",
        "value": 88791996,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "YE",
        "name": "Yemen, Rep.",
        "value": 24799880,
        "color": chart.colors.getIndex(0),
        "domain": "value",
        "code": "value"
    }, {
        "id": "ZM",
        "name": "Zambia",
        "value": 13474959,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "ZW",
        "name": "Zimbabwe",
        "value": 12754378,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }, {
        "id": "AQ",
        "name": "Antartica",

        "value": 12754378,
        "color": chart.colors.getIndex(2),
        "domain": "value",
        "code": "value"
    }];

    chart.data = mapData;
    // Create pattern
    /*var pattern = new am4core.CirclePattern();
    pattern.rectWidth = 5;
    pattern.rectHeight = 5;
    pattern.width = 10;
    pattern.height = 10;
    pattern.fill = am4core.color("#40E0D0");
    pattern.strokeWidth = 0;
*/
    // Create pattern

    var pattern = new am4core.Pattern();
    pattern.width = 300;
    pattern.height = 300;

    var image = new am4core.Image();
    image.href = "image.jpg";
    image.width = 450;
    image.height = 290;
    pattern.addElement(image.element);

    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    polygonSeries.nonScalingStroke = true;
    polygonSeries.strokeWidth = 0.5;
    polygonSeries.calculateVisualCenter = true;
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = pattern;
    polygonTemplate.fillOpacity = 10;
    polygonTemplate.stroke = am4core.color("#fff");
    polygonTemplate.realStroke = am4core.color("#000");
    polygonTemplate.strokeLinecap = "round"


    polygonTemplate.strokeOpacity = 0.4;
    //polygonTemplate.strokeDasharray = "3,3";
    var imageSeries = chart.series.push(new am4maps.MapImageSeries());


    //imageSeries.dataSource.url = "./js/demo/data.json";

    //imageSeries.dataSource.parser = new am4core.JSONParser();
    //imageSeries.dataSource.parser.options.emptyAs = 0;
    imageSeries.data = mapData;
    imageSeries.dataFields.value = "value";

    imageSeries.mapImages.template.events.on("hit", function(ev) {
        window.open( /*directing page*/ google.com, '_blank');

    }, this);
    var imageTemplate = imageSeries.mapImages.template;
    imageTemplate.nonScaling = true

    var circle = imageTemplate.createChild(am4core.Circle);
    circle.clickable = true;
    circle.fillOpacity = .8;
    circle.propertyFields.fill = "color";


    circle.tooltipHTML = `<center><strong> {name}</strong></center>
<hr />
<table>
<tr>
<th align="left">value</th>
<td>{value}</td>
</tr>
<tr>
<th align="left">code3</th>
<td>{code3}</td>
<th align="left">Domain</th>
<td>{domain}</td>
</tr>
<tr>

</tr>

</table>
<hr />
`;


    imageSeries.heatRules.push({
        "target": circle,
        "property": "radius",
        "min": 4,
        "max": 30,
        "dataField": "value"

    })

    imageTemplate.adapter.add("latitude", function(latitude, target) {
        var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
        if (polygon) {
            return polygon.visualLatitude;
        }
        return latitude;
    })

    imageTemplate.adapter.add("longitude", function(longitude, target) {
            var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
            if (polygon) {
                return polygon.visualLongitude;
            }
            return longitude;
        })
        /* Set projection */
    var legend = new am4charts.Legend();
    legend.parent = chart.chartContainer;
    legend.background.fill = am4core.color("#fff");
    legend.background.fillOpacity = 0.8;
    legend.width = 150;
    legend.valign = "middle";
    legend.align = "left";
    legend.data = [{
        "name": "Blue",
        "fill": "#3358FF"
    }, {
        "name": "yellow",
        "fill": "#F0FF33"
    }, {
        "name": "green",
        "fill": "#42FF33"
    }];
    var legendTitle = legend.createChild(am4core.Label);
    legendTitle.text = "Colours represent";
    chart.legend.itemContainers.template.events.on("hit", function(ev) {
        alert("Clicked on " + ev.target.dataItem.dataContext.name);
    });

}); // end am4core.ready()