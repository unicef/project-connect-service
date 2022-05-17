const db = require('../db');
const { v4: uuidv4 } = require('uuid');


(async () => {
  try {   
    
        await db('locations_country').insert({
          "id": 24,
          "code": "AF",
          "name": "Afghanistan",
          "flag": "images/7c7bd641-99e2-4657-beb4-c0a9ad471948.png"
        })

        await db('locations_country').insert({
          "id": 223,
          "code": "AX",
          "name": "Åland Islands",
          "flag": "images/52f6503a-70cb-4b2c-915f-3097bc128469.png"
        })
        await db('locations_country').insert({
          "id": 178,
          "code": "AL",
          "name": "Albania",
          "flag": "images/56cd7c07-dda5-4472-b74b-187ad58346e6.png"
        })
        await db('locations_country').insert({
          "id": 198,
          "code": "DZ",
          "name": "Algeria",
          "flag": "images/337c7ce2-5a73-42c0-a5ed-86140ebecbb5.png"
        })
        await db('locations_country').insert({
          "id": 236,
          "code": "AD",
          "name": "Andorra",
          "flag": "images/055e1d5a-5cda-47dd-aab7-1c60e02adbe8.png"
        })
        await db('locations_country').insert({
          "id": 89,
          "code": "AO",
          "name": "Angola",
          "flag": "images/9e5493bb-f867-4ef9-a842-a6715a8ef621.png"
        })
        await db('locations_country').insert({
          "id": 222,
          "code": "AI",
          "name": "Anguilla",
          "flag": "images/7962e7d2-ea1f-4571-a031-bb830fd575c6.png"
        })
        await db('locations_country').insert({
          "id": 226,
          "code": "AQ",
          "name": "Antarctica",
          "flag": "images/fc69cbbf-70f1-4662-8f91-4ca46319e1fb.png"
        })
        await db('locations_country').insert({
          "id": 238,
          "code": "AG",
          "name": "Antigua and Barbuda",
          "flag": "images/44fd9416-0606-45be-a0ec-3b5c726705d3.png"
        })
        await db('locations_country').insert({
          "id": 143,
          "code": "AR",
          "name": "Argentina",
          "flag": "images/254ae4d8-fec4-43c6-a3e6-b81a538e2644.png"
        })
        await db('locations_country').insert({
          "id": 187,
          "code": "AM",
          "name": "Armenia",
          "flag": "images/ceb4ed75-8c79-425e-8cf5-46ec0c4d61d8.png"
        })
        await db('locations_country').insert({
          "id": 220,
          "code": "AW",
          "name": "Aruba",
          "flag": "images/cb5d011c-8882-435f-89f4-3a92c020b572.png"
        })
        await db('locations_country').insert({
          "id": 239,
          "code": "AU",
          "name": "Australia",
          "flag": "images/6153aba3-d12e-4dbb-92df-c6c83ad315b7.png"
        })
        await db('locations_country').insert({
          "id": 240,
          "code": "AT",
          "name": "Austria",
          "flag": "images/9c9331f3-29cd-4d29-adc0-9b6151d961ce.png"
        })
        await db('locations_country').insert({
          "id": 188,
          "code": "AZ",
          "name": "Azerbaijan",
          "flag": "images/39f398dc-7b34-4580-bdff-1ee3458e7cc2.png"
        })
        await db('locations_country').insert({
          "id": 228,
          "code": "BS",
          "name": "Bahamas",
          "flag": "images/c6d29004-8db1-4d3a-8cc7-e8ea3e4798d4.png"
        })
        await db('locations_country').insert({
          "id": 243,
          "code": "BH",
          "name": "Bahrain",
          "flag": "images/220e9d30-059b-4a26-a228-9f7be050913c.png"
        })
        await db('locations_country').insert({
          "id": 53,
          "code": "BD",
          "name": "Bangladesh",
          "flag": "images/30634cc7-d619-4c6d-af96-a86553655969.png"
        })
        await db('locations_country').insert({
          "id": 134,
          "code": "BB",
          "name": "Barbados",
          "flag": "images/25db7f1c-5f2c-415d-bae6-cc1357f11bca.png"
        })
        await db('locations_country').insert({
          "id": 172,
          "code": "BY",
          "name": "Belarus",
          "flag": "images/77bd58f8-a9a1-46ff-9af2-62e42048c575.png"
        })
        await db('locations_country').insert({
          "id": 241,
          "code": "BE",
          "name": "Belgium",
          "flag": "images/c6d86e2b-ed61-4d8b-8aca-544f58bf6a2a.png"
        })
        await db('locations_country').insert({
          "id": 191,
          "code": "BZ",
          "name": "Belize",
          "flag": "images/c7d26687-a52f-41b0-96dd-de80231c13d0.png"
        })
        await db('locations_country').insert({
          "id": 152,
          "code": "BJ",
          "name": "Benin",
          "flag": "images/00c7dc80-5028-4de6-bcf6-10e7380c99e7.png"
        })
        await db('locations_country').insert({
          "id": 237,
          "code": "BM",
          "name": "Bermuda",
          "flag": "images/132432cb-7e5c-4f3e-82fc-abd1ffc5406c.png"
        })
        await db('locations_country').insert({
          "id": 176,
          "code": "BT",
          "name": "Bhutan",
          "flag": "images/38c89ea3-b30f-4cb2-a253-74c7c95926ab.png"
        })
        await db('locations_country').insert({
          "id": 40,
          "code": "BO",
          "name": "Bolivia (Plurinational State of)",
          "flag": "images/7e4d31fa-3a3d-4702-82c6-a31de76ffa19.png"
        })
        await db('locations_country').insert({
          "id": 242,
          "code": "BQ",
          "name": "Bonaire",
          "flag": "images/e7d776a8-8782-4111-b59e-c16167921923.png"
        })
        await db('locations_country').insert({
          "id": 200,
          "code": "BA",
          "name": "Bosnia and Herzegovina",
          "flag": "images/5d6530c7-5271-4114-ad88-2df6c6b9bac9.png"
        })
        await db('locations_country').insert({
          "id": 201,
          "code": "BW",
          "name": "Botswana",
          "flag": "images/a526f447-623a-4d61-a22b-5e959c6fe553.png"
        })
        await db('locations_country').insert({
          "id": 245,
          "code": "BV",
          "name": "Bouvet Island",
          "flag": "images/096934d5-d1de-4bdc-acb4-b5831a28d666.png"
        })
        await db('locations_country').insert({
          "id": 144,
          "code": "BR",
          "name": "Brazil",
          "flag": "images/fc029acd-297a-4fdc-bd2f-05d586f95106.png"
        })
        await db('locations_country').insert({
          "id": 332,
          "code": "VG",
          "name": "British Virgin Islands",
          "flag": "images/e35cc5b7-a0d3-4896-9648-43fd227f880c.png"
        })
        await db('locations_country').insert({
          "id": 221,
          "code": "BN",
          "name": "Brunei Darussalam",
          "flag": "images/d860f6d3-af40-4dbb-b28c-f10cddd775e8.png"
        })
        await db('locations_country').insert({
          "id": 167,
          "code": "BG",
          "name": "Bulgaria",
          "flag": "images/fe4a29be-87c1-4b2b-8022-8b609ce8e7fa.png"
        })
        await db('locations_country').insert({
          "id": 46,
          "code": "BF",
          "name": "Burkina Faso",
          "flag": "images/ed3bf4c2-e9f7-456c-8e8c-fa0e232ad5fb.png"
        })
        await db('locations_country').insert({
          "id": 141,
          "code": "BI",
          "name": "Burundi",
          "flag": "images/57311176-f8c9-499a-8775-84fb6da9f44a.png"
        })
        await db('locations_country').insert({
          "id": 159,
          "code": "CV",
          "name": "Cabo Verde",
          "flag": "images/7bb55eb1-bf38-46c7-970e-8266599cef0b.png"
        })
        await db('locations_country').insert({
          "id": 26,
          "code": "KH",
          "name": "Cambodia",
          "flag": "images/dc0698c9-1c3b-4320-a551-2ed02ad1aa6a.png"
        })
        await db('locations_country').insert({
          "id": 127,
          "code": "CM",
          "name": "Cameroon",
          "flag": "images/a738a385-039d-4bcd-82d9-44ff971f5fbe.png"
        })
        await db('locations_country').insert({
          "id": 229,
          "code": "CA",
          "name": "Canada",
          "flag": "images/81c85be3-0ad4-441a-b4cc-b24818948374.png"
        })
        await db('locations_country').insert({
          "id": 248,
          "code": "KY",
          "name": "Cayman Islands",
          "flag": "images/c12446b6-4aa6-4761-b5f1-10f8bceaa771.png"
        })
        await db('locations_country').insert({
          "id": 148,
          "code": "CF",
          "name": "Central African Republic",
          "flag": "images/af51676f-73b2-401f-ac2e-f7f064dd3c68.png"
        })
        await db('locations_country').insert({
          "id": 131,
          "code": "TD",
          "name": "Chad",
          "flag": "images/a6e8a5ed-e844-456b-ae1c-45fd7aecf762.png"
        })
        await db('locations_country').insert({
          "id": 294,
          "code": "IO",
          "name": "Chagos Archipelagio",
          "flag": "images/af11dcea-8f16-4126-b6b2-e02e254b8e0e.png"
        })
        await db('locations_country').insert({
          "id": 182,
          "code": "CL",
          "name": "Chile",
          "flag": "images/46b51004-a26d-4fad-a886-9bcec6c0757c.png"
        })
        await db('locations_country').insert({
          "id": 3,
          "code": "CN",
          "name": "China",
          "flag": "images/6e722ae5-a51f-4258-a0b1-ddcc650148df.png"
        })
        await db('locations_country').insert({
          "id": 232,
          "code": "CX",
          "name": "Christmas Island",
          "flag": "images/3a753040-ae66-495a-95b3-35e5a9b28893.png"
        })
        await db('locations_country').insert({
          "id": 246,
          "code": "CC",
          "name": "Cocos (Keeling) Islands",
          "flag": "images/e732cf9e-8d18-4ade-8dcc-92dcdcb9050f.png"
        })
        await db('locations_country').insert({
          "id": 147,
          "code": "CO",
          "name": "Colombia",
          "flag": "images/e0efafd5-3b64-46ec-b4d2-11ca966b6966.png"
        })
        await db('locations_country').insert({
          "id": 202,
          "code": "KM",
          "name": "Comoros",
          "flag": "images/138dd462-a2c0-4545-a1d8-cc0c2e539179.png"
        })
        await db('locations_country').insert({
          "id": 157,
          "code": "CG",
          "name": "Congo",
          "flag": "images/bde6e711-5ba4-4290-afa6-d7d921a450d0.png"
        })
        await db('locations_country').insert({
          "id": 231,
          "code": "CK",
          "name": "Cook Islands",
          "flag": "images/928d4d14-bc04-4ab3-8918-442a123ce04d.png"
        })
        await db('locations_country').insert({
          "id": 192,
          "code": "CR",
          "name": "Costa Rica",
          "flag": "images/5cd1e9f0-a2d4-4765-8c10-8fe76af8cc59.png"
        })
        await db('locations_country').insert({
          "id": 50,
          "code": "CI",
          "name": "Côte d'Ivoire",
          "flag": "images/2957029c-bf23-4d9f-8232-191beb8bb107.png"
        })
        await db('locations_country').insert({
          "id": 183,
          "code": "HR",
          "name": "Croatia",
          "flag": "images/0329ed82-26ee-4508-81ce-7a11cc9432e4.png"
        })
        await db('locations_country').insert({
          "id": 203,
          "code": "CU",
          "name": "Cuba",
          "flag": "images/2c50d218-32b6-422c-8afa-268c95868d28.png"
        })
        await db('locations_country').insert({
          "id": 247,
          "code": "CW",
          "name": "Curaçao",
          "flag": "images/200ebe00-0ecd-4c0e-ab09-13c050761ecf.png"
        })
        await db('locations_country').insert({
          "id": 233,
          "code": "CY",
          "name": "Cyprus",
          "flag": "images/f36006ea-d0ce-4e8d-bc8f-1b3e30d5f48b.png"
        })
        await db('locations_country').insert({
          "id": 213,
          "code": "CZ",
          "name": "Czechia",
          "flag": "images/b1f76abc-7384-4349-9c34-5aab1b384230.png"
        })
        await db('locations_country').insert({
          "id": 135,
          "code": "KP",
          "name": "Democratic People's Republic of Korea",
          "flag": "images/61942ad2-59de-444a-ba47-99b4a2b3da2d.png"
        })
        await db('locations_country').insert({
          "id": 28,
          "code": "CD",
          "name": "Democratic Republic of the Congo",
          "flag": "images/e3acf138-be08-40f9-9bdd-d143fc0f6783.png"
        })
        await db('locations_country').insert({
          "id": 234,
          "code": "DK",
          "name": "Denmark",
          "flag": "images/168fd071-49c3-46ca-b491-f4755760863e.png"
        })
        await db('locations_country').insert({
          "id": 129,
          "code": "DJ",
          "name": "Djibouti",
          "flag": "images/bb8da9b9-6f6f-4de2-842f-0a2dc2c7fc24.png"
        })
        await db('locations_country').insert({
          "id": 249,
          "code": "DM",
          "name": "Dominica",
          "flag": "images/12f82f33-57cf-4ac5-8632-83f5a1fa5eb3.png"
        })
        await db('locations_country').insert({
          "id": 185,
          "code": "DO",
          "name": "Dominican Republic",
          "flag": "images/ad915111-96a3-464d-a525-0edd144b9d2c.png"
        })
        await db('locations_country').insert({
          "id": 145,
          "code": "EC",
          "name": "Ecuador",
          "flag": "images/1e420227-4427-473c-bb11-d06bb6d68652.png"
        })
        await db('locations_country').insert({
          "id": 156,
          "code": "EG",
          "name": "Egypt",
          "flag": "images/e294a31d-c1a5-47d7-b1fc-c1b1da124549.png"
        })
        await db('locations_country').insert({
          "id": 184,
          "code": "SV",
          "name": "El Salvador",
          "flag": "images/c91c0d30-810b-40f9-9013-d7384900470f.png"
        })
        await db('locations_country').insert({
          "id": 158,
          "code": "GQ",
          "name": "Equatorial Guinea",
          "flag": "images/9517ea6f-3aab-4ad4-ba33-b6b10789633f.png"
        })
        await db('locations_country').insert({
          "id": 142,
          "code": "ER",
          "name": "Eritrea",
          "flag": "images/706c6614-4b9c-45fd-b41a-25a0ff6a571a.png"
        })
        await db('locations_country').insert({
          "id": 217,
          "code": "EE",
          "name": "Estonia",
          "flag": "images/7f99ab17-9b5c-4bd9-bb15-13584db3fbb7.png"
        })
        await db('locations_country').insert({
          "id": 165,
          "code": "SZ",
          "name": "Eswatini",
          "flag": "images/0058c4ad-881e-4000-a5f7-912af3c4861e.png"
        })
        await db('locations_country').insert({
          "id": 35,
          "code": "ET",
          "name": "Ethiopia",
          "flag": "images/c7ee8893-6cfd-473b-93b5-5712548022fa.png"
        })
        await db('locations_country').insert({
          "id": 251,
          "code": "FK",
          "name": "Falkland Islands (Malvinas)",
          "flag": "images/75882aef-8a97-4955-9fdb-11c9f203da0c.png"
        })
        await db('locations_country').insert({
          "id": 253,
          "code": "FO",
          "name": "Faroe Islands",
          "flag": "images/2b9852b1-243e-40ae-95ea-da317f257952.png"
        })
        await db('locations_country').insert({
          "id": 250,
          "code": "FJ",
          "name": "Fiji",
          "flag": "images/181400fc-6676-4d97-af6e-c33ae13fa998.png"
        })
        await db('locations_country').insert({
          "id": 218,
          "code": "FI",
          "name": "Finland",
          "flag": "images/18c71478-0828-4068-b228-547b7d0cae66.png"
        })
        await db('locations_country').insert({
          "id": 252,
          "code": "FR",
          "name": "France",
          "flag": "images/785a19e0-84ed-4d7a-9751-e51408adeae9.png"
        })
        await db('locations_country').insert({
          "id": 259,
          "code": "GF",
          "name": "French Guiana",
          "flag": "images/00568697-77ce-424e-97d2-3510ae792511.png"
        })
        await db('locations_country').insert({
          "id": 289,
          "code": "PF",
          "name": "French Polynesia",
          "flag": "images/918125da-a479-41a4-8281-35708b1a6715.png"
        })
        await db('locations_country').insert({
          "id": 227,
          "code": "TF",
          "name": "French Southern Territories",
          "flag": "images/eb2f4d22-c290-47b6-8422-167cf33486cb.png"
        })
        await db('locations_country').insert({
          "id": 160,
          "code": "GA",
          "name": "Gabon",
          "flag": "images/93193d75-5433-4779-9350-5a099f461cd9.png"
        })
        await db('locations_country').insert({
          "id": 162,
          "code": "GM",
          "name": "Gambia",
          "flag": "images/50f6bf89-b418-41fd-9eb4-818341a03eaf.png"
        })
        await db('locations_country').insert({
          "id": 205,
          "code": "GE",
          "name": "Georgia",
          "flag": "images/aed36865-cfdb-4b58-b759-c66ded591da9.png"
        })
        await db('locations_country').insert({
          "id": 214,
          "code": "DE",
          "name": "Germany",
          "flag": "images/95a324d1-8c97-4d41-8d51-849fbb5d478e.png"
        })
        await db('locations_country').insert({
          "id": 149,
          "code": "GH",
          "name": "Ghana",
          "flag": "images/ea695719-87b2-46b6-8fea-228b2ab90581.png"
        })
        await db('locations_country').insert({
          "id": 257,
          "code": "GI",
          "name": "Gibraltar",
          "flag": "images/d3a54ada-cfde-4bab-b3f3-681ecf881e9c.png"
        })
        await db('locations_country').insert({
          "id": 190,
          "code": "GR",
          "name": "Greece",
          "flag": "images/83f7d04d-f7b5-4fa5-80f3-d28e8dd07101.png"
        })
        await db('locations_country').insert({
          "id": 235,
          "code": "GL",
          "name": "Greenland",
          "flag": "images/4c25e648-37a7-4d40-8f76-2be43a9213ad.png"
        })
        await db('locations_country').insert({
          "id": 258,
          "code": "GD",
          "name": "Grenada",
          "flag": "images/9d59f9eb-4a4d-41ee-aa65-cdd93a2c340e.png"
        })
        await db('locations_country').insert({
          "id": 261,
          "code": "GP",
          "name": "Guadeloupe",
          "flag": "images/48ed42fb-1d7b-4463-bed9-b35dffa9f2b2.png"
        })
        await db('locations_country').insert({
          "id": 260,
          "code": "GU",
          "name": "Guam",
          "flag": "images/61199a06-71d5-4b22-8da8-2541c1431a31.png"
        })
        await db('locations_country').insert({
          "id": 193,
          "code": "GT",
          "name": "Guatemala",
          "flag": "images/ab32e6aa-8e77-4991-bcc2-39ba6fdcd532.png"
        })
        await db('locations_country').insert({
          "id": 256,
          "code": "GG",
          "name": "Guernsey",
          "flag": "images/4ae3dd5a-f6a8-4652-91ad-7738a5171978.png"
        })
        await db('locations_country').insert({
          "id": 54,
          "code": "GN",
          "name": "Guinea",
          "flag": "images/52cb042a-68ef-454d-a744-465e26269797.png"
        })
        await db('locations_country').insert({
          "id": 151,
          "code": "GW",
          "name": "Guinea-Bissau",
          "flag": "images/3d412c23-b703-46f5-9c86-1ce934d36d18.png"
        })
        await db('locations_country').insert({
          "id": 206,
          "code": "GY",
          "name": "Guyana",
          "flag": "images/74c72fdf-740d-4f3f-85e0-1c5b01f40dad.png"
        })
        await db('locations_country').insert({
          "id": 43,
          "code": "HT",
          "name": "Haiti",
          "flag": "images/8cbf7242-a067-47d2-8a64-36c56b1194c8.png"
        })
        await db('locations_country').insert({
          "id": 262,
          "code": "HM",
          "name": "Heard Island and McDonald Islands",
          "flag": "images/8628ab1a-6992-4db9-a504-e5f9895316c0.png"
        })
        await db('locations_country').insert({
          "id": 318,
          "code": "VA",
          "name": "Holy See",
          "flag": "images/1b2507e4-c04f-474f-a65a-84b1bf5e1f05.png"
        })
        await db('locations_country').insert({
          "id": 196,
          "code": "HN",
          "name": "Honduras",
          "flag": "images/1fcbf396-b41f-4561-b996-f3247bfd2d69.png"
        })
        await db('locations_country').insert({
          "id": 219,
          "code": "HK",
          "name": "Hong Kong",
          "flag": "images/03147c64-a1f1-4814-8c25-6d8ed0d184fb.png"
        })
        await db('locations_country').insert({
          "id": 291,
          "code": "HU",
          "name": "Hungary",
          "flag": "images/1cfc4d88-da51-4ce9-a1de-a1cfc5dfbd0a.png"
        })
        await db('locations_country').insert({
          "id": 295,
          "code": "IS",
          "name": "Iceland",
          "flag": "images/36c4f45a-be4f-4c81-af4f-21aa907c0741.png"
        })
        await db('locations_country').insert({
          "id": 45,
          "code": "IN",
          "name": "India",
          "flag": "images/11dc756b-1f3a-4924-aab1-63469ed74af1.png"
        })
        await db('locations_country').insert({
          "id": 27,
          "code": "ID",
          "name": "Indonesia",
          "flag": "images/b4563967-f331-4c15-8808-5bada993435b.png"
        })
        await db('locations_country').insert({
          "id": 155,
          "code": "IR",
          "name": "Iran (Islamic Republic of)",
          "flag": "images/05add5d5-9067-468a-8b9f-f975f9865243.png"
        })
        await db('locations_country').insert({
          "id": 13,
          "code": "IQ",
          "name": "Iraq",
          "flag": "images/b67b27a3-51ba-4681-925d-3ddcbd8ed407.png"
        })
        await db('locations_country').insert({
          "id": 267,
          "code": "IE",
          "name": "Ireland",
          "flag": "images/87f748e1-0172-4929-b6b8-9c1e8740e856.png"
        })
        await db('locations_country').insert({
          "id": 292,
          "code": "IM",
          "name": "Isle of Man",
          "flag": "images/08725f72-2df9-4336-a3dc-31c78d903d98.png"
        })
        await db('locations_country').insert({
          "id": 296,
          "code": "IL",
          "name": "Israel",
          "flag": "images/24ebc5c4-38a6-4b96-9fab-dac840528172.png"
        })
        await db('locations_country').insert({
          "id": 297,
          "code": "IT",
          "name": "Italy",
          "flag": "images/a4a3dbdb-524e-491c-8e8d-a6bc0e5e9a4f.png"
        })
        await db('locations_country').insert({
          "id": 132,
          "code": "JM",
          "name": "Jamaica",
          "flag": "images/7c7250ff-fec9-467a-8dc3-ba8932fcee8e.png"
        })
        await db('locations_country').insert({
          "id": 268,
          "code": "JP",
          "name": "Japan",
          "flag": "images/b6056a76-747e-4ed4-995b-67e72f48e164.png"
        })
        await db('locations_country').insert({
          "id": 298,
          "code": "JE",
          "name": "Jersey",
          "flag": "images/ce3959a5-d21e-4028-84a3-4b7a669ef675.png"
        })
        await db('locations_country').insert({
          "id": 18,
          "code": "JO",
          "name": "Jordan",
          "flag": "images/f0d76490-3386-4bfc-935b-7b59de3f85c5.png"
        })
        await db('locations_country').insert({
          "id": 29,
          "code": "KZ",
          "name": "Kazakhstan",
          "flag": "images/bbc08a17-9d17-4358-a23a-e5cf9e51457e.png"
        })
        await db('locations_country').insert({
          "id": 5,
          "code": "KE",
          "name": "Kenya",
          "flag": "images/b6640f74-4a97-4074-b6e4-b43b9d2e2239.png"
        })
        await db('locations_country').insert({
          "id": 269,
          "code": "KI",
          "name": "Kiribati",
          "flag": "images/3b539c45-b5f3-4e57-98a5-294acb44ccc7.png"
        })
        await db('locations_country').insert({
          "id": 163,
          "code": "XK",
          "name": "Kosovo",
          "flag": "images/88398d19-22cb-42ba-8c76-9efb2ca9a669.png"
        })
        await db('locations_country').insert({
          "id": 271,
          "code": "KW",
          "name": "Kuwait",
          "flag": "images/9dae3f4f-cee9-4a29-b05b-8473e042ab78.png"
        })
        await db('locations_country').insert({
          "id": 39,
          "code": "KG",
          "name": "Kyrgyzstan",
          "flag": "images/5ce26f62-e9be-41ae-888e-8f62ea52452b.png"
        })
        await db('locations_country').insert({
          "id": 123,
          "code": "LA",
          "name": "Lao People's Democratic Republic",
          "flag": "images/9842eb70-899d-4c1c-ad3e-9c08573bb22d.png"
        })
        await db('locations_country').insert({
          "id": 263,
          "code": "LV",
          "name": "Latvia",
          "flag": "images/ae05dced-d3c9-40b3-8917-78f647abb316.png"
        })
        await db('locations_country').insert({
          "id": 9,
          "code": "LB",
          "name": "Lebanon",
          "flag": "images/f4cad791-5121-4d60-ae70-50713f5989d1.png"
        })
        await db('locations_country').insert({
          "id": 173,
          "code": "LS",
          "name": "Lesotho",
          "flag": "images/fef19089-3b9e-4d03-9a9d-6622b7959e5f.png"
        })
        await db('locations_country').insert({
          "id": 37,
          "code": "LR",
          "name": "Liberia",
          "flag": "images/04325b39-3b41-45bf-8127-fce7d3cc6d70.png"
        })
        await db('locations_country').insert({
          "id": 48,
          "code": "LY",
          "name": "Libya",
          "flag": "images/f82fc11a-6cfc-4afc-889e-02fc99fcdd82.png"
        })
        await db('locations_country').insert({
          "id": 300,
          "code": "LI",
          "name": "Liechtenstein",
          "flag": "images/9e965fde-d104-493c-84fe-a943d928799e.png"
        })
        await db('locations_country').insert({
          "id": 272,
          "code": "LT",
          "name": "Lithuania",
          "flag": "images/2e5271b6-10ff-4ab3-b9a1-647a602957ec.png"
        })
        await db('locations_country').insert({
          "id": 273,
          "code": "LU",
          "name": "Luxembourg",
          "flag": "images/96bbb2c6-3144-45d9-aef2-a8bc865ef9c9.png"
        })
        await db('locations_country').insert({
          "id": 301,
          "code": "MO",
          "name": "Macao",
          "flag": "images/2905bca0-a93e-48b6-97f5-5be400e4dd3f.png"
        })
        await db('locations_country').insert({
          "id": 87,
          "code": "MG",
          "name": "Madagascar",
          "flag": "images/204dfe2e-2439-4dc3-a64b-a035f1f81f59.png"
        })
        await db('locations_country').insert({
          "id": 44,
          "code": "MW",
          "name": "Malawi",
          "flag": "images/4eb4c128-b75b-45d6-82fb-3215e0f0a9f7.png"
        })
        await db('locations_country').insert({
          "id": 154,
          "code": "MY",
          "name": "Malaysia",
          "flag": "images/ebf876f2-36f0-4ab4-9dd9-f6a8aae4719d.png"
        })
        await db('locations_country').insert({
          "id": 177,
          "code": "MV",
          "name": "Maldives",
          "flag": "images/104a6546-ca2e-4a7d-a950-10a908c20c44.png"
        })
        await db('locations_country').insert({
          "id": 125,
          "code": "ML",
          "name": "Mali",
          "flag": "images/30992f87-47a3-4385-8894-4a2f36e1f6ee.png"
        })
        await db('locations_country').insert({
          "id": 302,
          "code": "MT",
          "name": "Malta",
          "flag": "images/18dd2486-0e19-428e-b336-8fc86f0ac717.png"
        })
        await db('locations_country').insert({
          "id": 275,
          "code": "MH",
          "name": "Marshall Islands",
          "flag": "images/1105b745-8f82-4485-8be0-0eefb52c5ac9.png"
        })
        await db('locations_country').insert({
          "id": 306,
          "code": "MQ",
          "name": "Martinique",
          "flag": "images/f3210516-2f9d-44c8-afa3-61deaffee52d.png"
        })
        await db('locations_country').insert({
          "id": 153,
          "code": "MR",
          "name": "Mauritania",
          "flag": "images/4334d5d9-703e-42cb-8034-ba5a2a31f22b.png"
        })
        await db('locations_country').insert({
          "id": 277,
          "code": "MU",
          "name": "Mauritius",
          "flag": "images/7ee1ee53-9fcb-4cdf-a678-96082b2dbce8.png"
        })
        await db('locations_country').insert({
          "id": 307,
          "code": "YT",
          "name": "Mayotte",
          "flag": "images/6c23e838-10ff-41d8-bdb7-3f5501082fe6.png"
        })
        await db('locations_country').insert({
          "id": 146,
          "code": "MX",
          "name": "Mexico",
          "flag": "images/c723e17c-9dce-4673-8715-71d2fc008acb.png"
        })
        await db('locations_country').insert({
          "id": 254,
          "code": "FM",
          "name": "Micronesia (Federated States of)",
          "flag": "images/8fb162f6-0a91-4abe-835d-b7930ed03389.png"
        })
        await db('locations_country').insert({
          "id": 316,
          "code": "MI",
          "name": "Midway Islands",
          "flag": "images/66eec358-0b21-4544-be35-248c314a5e7c.png"
        })
        await db('locations_country').insert({
          "id": 274,
          "code": "MC",
          "name": "Monaco",
          "flag": "images/9029e54a-42f2-4173-8486-21d1bd75bd9c.png"
        })
        await db('locations_country').insert({
          "id": 175,
          "code": "MN",
          "name": "Mongolia",
          "flag": "images/8fe3f30b-2826-4e53-9e99-67da71f8061b.png"
        })
        await db('locations_country').insert({
          "id": 180,
          "code": "ME",
          "name": "Montenegro",
          "flag": "images/626a455c-86bc-4c7f-949f-fd9bfda56fa2.png"
        })
        await db('locations_country').insert({
          "id": 276,
          "code": "MS",
          "name": "Montserrat",
          "flag": "images/8aaa3eae-d7d3-4ca5-a74c-ff4af05d872c.png"
        })
        await db('locations_country').insert({
          "id": 197,
          "code": "MA",
          "name": "Morocco",
          "flag": "images/8958221a-f2a2-4304-8f30-983b81f0ac6a.png"
        })
        await db('locations_country').insert({
          "id": 52,
          "code": "MZ",
          "name": "Mozambique",
          "flag": "images/802b9844-bd01-48ab-8bcb-c7c1d9aaffae.png"
        })
        await db('locations_country').insert({
          "id": 8,
          "code": "MM",
          "name": "Myanmar",
          "flag": "images/ad0a3a61-77ad-4056-9771-29e2b5a3df5b.png"
        })
        await db('locations_country').insert({
          "id": 164,
          "code": "NA",
          "name": "Namibia",
          "flag": "images/247da71d-0325-4b5e-bfff-e3a3c4e41ead.png"
        })
        await db('locations_country').insert({
          "id": 278,
          "code": "NR",
          "name": "Nauru",
          "flag": "images/0b52e712-068b-4d35-8eb8-b8cfed7d7595.png"
        })
        await db('locations_country').insert({
          "id": 6,
          "code": "NP",
          "name": "Nepal",
          "flag": "images/99946daa-6fa2-45f8-b68b-8cee16beed3f.png"
        })
        await db('locations_country').insert({
          "id": 311,
          "code": "NL",
          "name": "Netherlands",
          "flag": "images/ca8c87ac-db3b-40b2-9b24-8da9950e73cd.png"
        })
        await db('locations_country').insert({
          "id": 308,
          "code": "NC",
          "name": "New Caledonia",
          "flag": "images/ee821930-192c-47a3-b537-6409d11ab434.png"
        })
        await db('locations_country').insert({
          "id": 279,
          "code": "NZ",
          "name": "New Zealand",
          "flag": "images/76158cbe-c3e7-4d85-87f0-6b9c2cc4bfe3.png"
        })
        await db('locations_country').insert({
          "id": 207,
          "code": "NI",
          "name": "Nicaragua",
          "flag": "images/3659bebe-e5c2-4588-a11d-cb9c621bbc24.png"
        })
        await db('locations_country').insert({
          "id": 126,
          "code": "NE",
          "name": "Niger",
          "flag": "images/9ad6c484-a1d2-4c69-8f6d-d65452ddd70c.png"
        })
        await db('locations_country').insert({
          "id": 23,
          "code": "NG",
          "name": "Nigeria",
          "flag": "images/c993c4c9-7b30-47cf-8a03-4b9ab28ff163.png"
        })
        await db('locations_country').insert({
          "id": 310,
          "code": "NU",
          "name": "Niue",
          "flag": "images/9a5545d1-ece0-41d3-b5e9-81c9718790cd.png"
        })
        await db('locations_country').insert({
          "id": 309,
          "code": "NF",
          "name": "Norfolk Island",
          "flag": "images/c1b452ae-da6c-489a-bd32-80dcb91257dd.png"
        })
        await db('locations_country').insert({
          "id": 305,
          "code": "MP",
          "name": "Northern Mariana Islands",
          "flag": "images/8352d51b-d7a2-479b-a488-8ef3cb48d42c.png"
        })
        await db('locations_country').insert({
          "id": 266,
          "code": "NO",
          "name": "Norway",
          "flag": "images/ad986c13-5ea1-45c4-8c89-92777d828a48.png"
        })
        await db('locations_country').insert({
          "id": 280,
          "code": "OM",
          "name": "Oman",
          "flag": "images/2ad0700c-c2c9-4b54-b832-7cd12892d580.png"
        })
        await db('locations_country').insert({
          "id": 25,
          "code": "PK",
          "name": "Pakistan",
          "flag": "images/a42e23f6-b9e6-4b36-8c8b-698328df04e8.png"
        })
        await db('locations_country').insert({
          "id": 287,
          "code": "PW",
          "name": "Palau",
          "flag": "images/6f04c411-449c-411b-b315-2c4f14fe4273.png"
        })
        await db('locations_country').insert({
          "id": 21,
          "code": "PS",
          "name": "Palestine",
          "flag": "images/7619ebb3-7dc7-40a7-b655-19fd7dc86225.png"
        })
        await db('locations_country').insert({
          "id": 194,
          "code": "PA",
          "name": "Panama",
          "flag": "images/72a1433b-2c24-4003-a3bb-2fc977081e13.png"
        })
        await db('locations_country').insert({
          "id": 136,
          "code": "PG",
          "name": "Papua New Guinea",
          "flag": "images/20c2b8f5-ea6e-4646-8b9b-433c417b5c27.png"
        })
        await db('locations_country').insert({
          "id": 195,
          "code": "PY",
          "name": "Paraguay",
          "flag": "images/d73d6ad1-33dc-4f3e-9013-797c0da2a7fa.png"
        })
        await db('locations_country').insert({
          "id": 186,
          "code": "PE",
          "name": "Peru",
          "flag": "images/aa6462dd-b523-440f-a9f3-4082d90b4f60.png"
        })
        await db('locations_country').insert({
          "id": 20,
          "code": "PH",
          "name": "Philippines",
          "flag": "images/1f475b4f-06a1-4c18-94af-4b395b8c815a.png"
        })
        await db('locations_country').insert({
          "id": 286,
          "code": "PN",
          "name": "Pitcairn",
          "flag": "images/0c5a81ac-ff20-4820-8fab-0d7479fb46b1.png"
        })
        await db('locations_country').insert({
          "id": 264,
          "code": "PL",
          "name": "Poland",
          "flag": "images/c34adea6-db86-4bf5-974f-6a99ec310466.png"
        })
        await db('locations_country').insert({
          "id": 288,
          "code": "PT",
          "name": "Portugal",
          "flag": "images/694869d3-0071-4b08-984d-9cf54ea93acb.png"
        })
        await db('locations_country').insert({
          "id": 265,
          "code": "PR",
          "name": "Puerto Rico",
          "flag": "images/32c06d6c-ec3b-45a5-bc3d-39c912478334.png"
        })
        await db('locations_country').insert({
          "id": 290,
          "code": "QA",
          "name": "Qatar",
          "flag": "images/06b86906-7724-4e1c-8485-96dabd8d2ab8.png"
        })
        await db('locations_country').insert({
          "id": 270,
          "code": "KP1",
          "name": "Republic of Korea",
          "flag": "images/fcca7feb-d378-48eb-ad64-6576d655540d.png"
        })
        await db('locations_country').insert({
          "id": 170,
          "code": "MD",
          "name": "Republic of Moldova",
          "flag": "images/3debc76c-69a7-48c9-ac7a-912a64f796e7.png"
        })
        await db('locations_country').insert({
          "id": 303,
          "code": "RE",
          "name": "Réunion",
          "flag": "images/a6baebd4-6050-401b-984c-5b4e1cf7fc6f.png"
        })
        await db('locations_country').insert({
          "id": 171,
          "code": "RO",
          "name": "Romania",
          "flag": "images/5b3e8b80-8aef-4cb9-bd7d-733ae47deb6c.png"
        })
        await db('locations_country').insert({
          "id": 304,
          "code": "RU",
          "name": "Russian Federation",
          "flag": "images/8ad4f17c-3291-4213-9ec0-5c7cca99eab7.png"
        })
        await db('locations_country').insert({
          "id": 32,
          "code": "RW",
          "name": "Rwanda",
          "flag": "images/31c528ae-acf0-4087-b04a-e101a4b1b875.png"
        })
        await db('locations_country').insert({
          "id": 244,
          "code": "BL",
          "name": "Saint Barthélemy",
          "flag": "images/83b71742-7d78-45d9-9564-418c5d953516.png"
        })
        await db('locations_country').insert({
          "id": 282,
          "code": "SH",
          "name": "Saint Helena",
          "flag": "images/26806007-4891-4832-9daa-6d9f3ffbc5c8.png"
        })
        await db('locations_country').insert({
          "id": 299,
          "code": "KN",
          "name": "Saint Kitts and Nevis",
          "flag": "images/f3633f1e-485b-43c0-af19-31b23ffa8e0b.png"
        })
        await db('locations_country').insert({
          "id": 285,
          "code": "LC",
          "name": "Saint Lucia",
          "flag": "images/1efec509-0ec4-47a6-bf3b-60bf11bfbb1a.png"
        })
        await db('locations_country').insert({
          "id": 293,
          "code": "MF",
          "name": "Saint Martin",
          "flag": "images/9eb01bc6-726e-4047-a8b5-2e6e467850cd.png"
        })
        await db('locations_country').insert({
          "id": 327,
          "code": "PM",
          "name": "Saint Pierre et Miquelon",
          "flag": "images/1ff25eba-bfcb-4147-9d47-0b2991305e51.png"
        })
        await db('locations_country').insert({
          "id": 331,
          "code": "VC",
          "name": "Saint Vincent and the Grenadines",
          "flag": "images/d5c9c7e3-c9e5-4405-9f27-967dede60556.png"
        })
        await db('locations_country').insert({
          "id": 335,
          "code": "WS",
          "name": "Samoa",
          "flag": "images/92ed21ed-5f40-46f9-b03f-967b5d57c27c.png"
        })
        await db('locations_country').insert({
          "id": 328,
          "code": "SM",
          "name": "San Marino",
          "flag": "images/2e8b5373-633e-4cdc-b466-0beb8c8273ca.png"
        })
        await db('locations_country').insert({
          "id": 161,
          "code": "ST",
          "name": "Sao Tome and Principe",
          "flag": "images/96103a6c-47ef-436a-bc9f-c57fd23a4c5b.png"
        })
        await db('locations_country').insert({
          "id": 209,
          "code": "SA",
          "name": "Saudi Arabia",
          "flag": "images/b6062124-088e-463e-a9d3-3183a230139f.png"
        })
        await db('locations_country').insert({
          "id": 124,
          "code": "SN",
          "name": "Senegal",
          "flag": "images/fc3a8eac-0d4a-45e4-b3cb-9121918b3af4.png"
        })
        await db('locations_country').insert({
          "id": 168,
          "code": "RS",
          "name": "Serbia",
          "flag": "images/d75afffb-f088-419a-b363-5d44f077c31a.png"
        })
        await db('locations_country').insert({
          "id": 325,
          "code": "SC",
          "name": "Seychelles",
          "flag": "images/46307e3f-794e-4fbc-9d64-657933044057.png"
        })
        await db('locations_country').insert({
          "id": 7,
          "code": "SL",
          "name": "Sierra Leone",
          "flag": "images/722ac86b-17cd-455a-8bb7-6c33a86ed9a4.png"
        })
        await db('locations_country').insert({
          "id": 312,
          "code": "SG",
          "name": "Singapore",
          "flag": "images/4c01dd47-5436-4470-99ff-4449788f28ae.png"
        })
        await db('locations_country').insert({
          "id": 324,
          "code": "SX",
          "name": "Sint Maarten",
          "flag": "images/1614bcd5-c8cd-485f-b352-12566ad84c0d.png"
        })
        await db('locations_country').insert({
          "id": 321,
          "code": "SK",
          "name": "Slovakia",
          "flag": "images/da32869c-d283-4f77-88c5-f80af4d2aa49.png"
        })
        await db('locations_country').insert({
          "id": 322,
          "code": "SI",
          "name": "Slovenia",
          "flag": "images/def9d15e-1720-4eac-911a-8ee04ba7449e.png"
        })
        await db('locations_country').insert({
          "id": 284,
          "code": "SB",
          "name": "Solomon Islands",
          "flag": "images/cf006aed-3a43-4bfd-b065-7dc51e4ccd61.png"
        })
        await db('locations_country').insert({
          "id": 30,
          "code": "SO",
          "name": "Somalia",
          "flag": "images/7c5fb144-e191-4702-85f6-9eba164a45dc.png"
        })
        await db('locations_country').insert({
          "id": 31,
          "code": "ZA",
          "name": "South Africa",
          "flag": "images/835b49aa-c5b8-47cf-a74a-a009d0b51213.png"
        })
        await db('locations_country').insert({
          "id": 281,
          "code": "GS",
          "name": "South Georgia and the South Sandwich Islands",
          "flag": "images/7c820f4c-8776-4076-8ce6-61003e4274b8.png"
        })
        await db('locations_country').insert({
          "id": 4,
          "code": "SS",
          "name": "South Sudan",
          "flag": "images/7af9c7db-53c4-4934-8410-ccf81e054f0a.png"
        })
        await db('locations_country').insert({
          "id": 216,
          "code": "ES",
          "name": "Spain",
          "flag": "images/0da012fa-b4d7-4fb9-b83d-84a686609a1d.png"
        })
        await db('locations_country').insert({
          "id": 49,
          "code": "LK",
          "name": "Sri Lanka",
          "flag": "images/5d817a2b-2707-4572-bfdc-ba4e7fd0b485.png"
        })
        await db('locations_country').insert({
          "id": 12,
          "code": "SD",
          "name": "Sudan",
          "flag": "images/0cba8f25-8c08-443c-a4f3-1b0a6570a3c3.png"
        })
        await db('locations_country').insert({
          "id": 320,
          "code": "SR",
          "name": "Suriname",
          "flag": "images/6c201c8b-8eee-4254-868d-ecc3046c0f8e.png"
        })
        await db('locations_country').insert({
          "id": 283,
          "code": "SJ",
          "name": "Svalbard and Jan Mayen Islands",
          "flag": "images/2db1b5f6-167d-433f-bf47-7906b6c2898f.png"
        })
        await db('locations_country').insert({
          "id": 323,
          "code": "SE",
          "name": "Sweden",
          "flag": "images/07dbd0ed-618f-4137-8008-dde337444f5c.png"
        })
        await db('locations_country').insert({
          "id": 230,
          "code": "CH",
          "name": "Switzerland",
          "flag": "images/b094dc69-a326-4701-8f52-681141e40012.png"
        })
        await db('locations_country').insert({
          "id": 11,
          "code": "SY",
          "name": "Syrian Arab Republic",
          "flag": "images/9f1c42a1-7741-4c50-8283-2a6df1e47552.png"
        })
        await db('locations_country').insert({
          "id": 169,
          "code": "TJ",
          "name": "Tadjikistan",
          "flag": "images/df5e6283-d490-4d1f-8117-cf10ab83abdd.png"
        })
        await db('locations_country').insert({
          "id": 315,
          "code": "TW",
          "name": "Taiwan",
          "flag": "images/65d67ef3-a3fa-44f6-b2a1-d98508dd19d2.png"
        })
        await db('locations_country').insert({
          "id": 137,
          "code": "TH",
          "name": "Thailand",
          "flag": "images/8537a7ae-dd88-4b6a-9580-4c53edb5b80b.png"
        })
        await db('locations_country').insert({
          "id": 179,
          "code": "MK",
          "name": "The former Yugoslav Republic of Macedonia",
          "flag": "images/d7fbafda-d1ca-4792-9f7f-1de747cbcaf4.png"
        })
        await db('locations_country').insert({
          "id": 210,
          "code": "TL",
          "name": "Timor-Leste",
          "flag": "images/743e22ba-0814-4ab4-869f-da99d0860efc.png"
        })
        await db('locations_country').insert({
          "id": 150,
          "code": "TG",
          "name": "Togo",
          "flag": "images/e0564d24-bb0c-47a9-aae4-6899540e1465.png"
        })
        await db('locations_country').insert({
          "id": 313,
          "code": "TK",
          "name": "Tokelau",
          "flag": "images/c2e6c932-d702-4f05-9602-6137d00ba101.png"
        })
        await db('locations_country').insert({
          "id": 314,
          "code": "TO",
          "name": "Tonga",
          "flag": "images/2f1f5c8a-6ae3-4716-8608-2faf8eba43be.png"
        })
        await db('locations_country').insert({
          "id": 329,
          "code": "TT",
          "name": "Trinidad and Tobago",
          "flag": "images/76c5a45c-6f74-4c55-83a9-9e59545ab717.png"
        })
        await db('locations_country').insert({
          "id": 128,
          "code": "TN",
          "name": "Tunisia",
          "flag": "images/e8331766-8aa9-40a7-8c27-9cd410e9b22d.png"
        })
        await db('locations_country').insert({
          "id": 15,
          "code": "TR",
          "name": "Turkey",
          "flag": "images/949eb4a0-1dec-455f-97d2-f6f46330c5bd.png"
        })
        await db('locations_country').insert({
          "id": 181,
          "code": "TM",
          "name": "Turkmenistan",
          "flag": "images/855579f1-89c1-4353-be1a-b6723d575cc4.png"
        })
        await db('locations_country').insert({
          "id": 326,
          "code": "TC",
          "name": "Turks and Caicos Islands",
          "flag": "images/77eafa5c-290b-4c5d-95f0-012bd9428a65.png"
        })
        await db('locations_country').insert({
          "id": 330,
          "code": "TV",
          "name": "Tuvalu",
          "flag": "images/2d461c1b-bc68-4ac4-b350-b776a816e237.png"
        })
        await db('locations_country').insert({
          "id": 55,
          "code": "UG",
          "name": "Uganda",
          "flag": "images/b9ca7a1f-96e7-49c2-9179-68cdd2c350dd.png"
        })
        await db('locations_country').insert({
          "id": 139,
          "code": "UA",
          "name": "Ukraine",
          "flag": "images/20d31cb5-1948-412f-ad32-ff4448140887.png"
        })
        await db('locations_country').insert({
          "id": 224,
          "code": "AE",
          "name": "United Arab Emirates",
          "flag": "images/eefc92c4-03df-4a68-aca2-fea0f095cde2.png"
        })
        await db('locations_country').insert({
          "id": 255,
          "code": "GB",
          "name": "United Kingdom of Great Britain & Northern Ireland",
          "flag": "images/3f6e4112-eea5-4012-b526-7b0cd2a4e9e2.png"
        })
        await db('locations_country').insert({
          "id": 88,
          "code": "TZ",
          "name": "United Republic of Tanzania",
          "flag": "images/29fb86e4-40ec-4da3-8462-a1ec39ab3fc3.png"
        })
        await db('locations_country').insert({
          "id": 317,
          "code": "US",
          "name": "United States of America",
          "flag": "images/204565e7-bd29-482a-be46-4695dafdc459.png"
        })
        await db('locations_country').insert({
          "id": 333,
          "code": "VI",
          "name": "United States Virgin Islands",
          "flag": "images/04ee539d-97b4-4d1b-9a29-c7b5b75e2569.png"
        })
        await db('locations_country').insert({
          "id": 211,
          "code": "UY",
          "name": "Uruguay",
          "flag": "images/41fb4687-7c7c-428f-8413-3f0c8c013fd5.png"
        })
        await db('locations_country').insert({
          "id": 174,
          "code": "UZ",
          "name": "Uzbekistan",
          "flag": "images/3070f034-9bf2-4ffc-a602-341b3e32cf90.png"
        })
        await db('locations_country').insert({
          "id": 319,
          "code": "VU",
          "name": "Vanuatu",
          "flag": "images/ceb46ae0-ea08-440d-bdfe-de68f84ec3ba.png"
        })
        await db('locations_country').insert({
          "id": 212,
          "code": "VE",
          "name": "Venezuela",
          "flag": "images/4ce2302d-0435-438a-8e25-37d6b6439337.png"
        })
        await db('locations_country').insert({
          "id": 138,
          "code": "VN",
          "name": "Viet Nam",
          "flag": "images/ca084e3a-b777-4a6e-8d81-3ac7d1b86fa8.png"
        })
        await db('locations_country').insert({
          "id": 334,
          "code": "WF",
          "name": "Wallis and Futuna",
          "flag": "images/6d365109-d812-4f1f-863c-979285d68543.png"
        })
        await db('locations_country').insert({
          "id": 215,
          "code": "EH",
          "name": "Western Sahara",
          "flag": "images/f8a2258d-4b87-40bc-85c0-0a9ba9a9205a.png"
        })
        await db('locations_country').insert({
          "id": 22,
          "code": "YE",
          "name": "Yemen",
          "flag": "images/0ef80667-2241-4e5a-8fca-612530dbd091.png"
        })
        await db('locations_country').insert({
          "id": 47,
          "code": "ZM",
          "name": "Zambia",
          "flag": "images/3193052e-a4fa-4c83-a9af-f358d06475ff.png"
        })
        await db('locations_country').insert({
          "id": 86,
          "code": "ZW",
          "name": "Zimbabwe",
          "flag": "images/3bb70319-76fc-4cb2-9bf5-aaeed77719cf.png"
        })

        //School data starts here

        console.log('Country Data is Added!')

      
    await db('schools_school').insert({
      "id": 2397399,
      "external_id": "37",
      "name": "ÐšÐ“Ð£ \"Ð’ÐµÑ‡ÐµÑ€Ð½ÑÑ ÑˆÐºÐ¾Ð»Ð°\" Ð¾Ñ‚Ð´ÐµÐ»Ð° Ð¾Ð±Ñ€Ð°Ð·Ð¾Ð²Ð°Ð½Ð¸Ñ Ð¢Ð¾Ð»ÐµÐ±Ð¸Ð¹ÑÐºÐ¾Ð³Ð¾ Ñ€Ð°Ð¹Ð¾Ð½Ð°",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 29,
      "location_id": "",
      "giga_id_school": "0b8455d8-a4aa-353c-85df-009a6bd99d16",
      "admin_2_name": "Ð¢Ð¾Ð»ÐµÐ±Ð¸Ð¹ÑÐºÐ¸Ð¹ Ñ€Ð°Ð¹Ð¾Ð½",
      "admin_3_name": "Ð³.Ð›ÐµÐ½Ð³ÐµÑ€",
      "admin_4_name": "",
      "admin_1_name": "Ð¢ÑƒÑ€ÐºÐµÑÑ‚Ð°Ð½ÑÐºÐ°Ñ Ð¾Ð±Ð»Ð°ÑÑ‚ÑŒ"
     })

    await db('schools_school').insert({
      "id": 2397429,
      "external_id": "68",
      "name": "ÐšÐ“Ð£ \"ÐÐºÑ‚Ð¾Ð³Ð°Ð½ÑÐºÐ°Ñ ÑÑ€ÐµÐ´Ð½ÑÑ ÑˆÐºÐ¾Ð»Ð° \"",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 29,
      "location_id": "",
      "giga_id_school": "2ef97916-ac1a-3e82-ad0e-10ca2a664383",
      "admin_2_name": "Ð•Ð½Ð±ÐµÐºÑˆÐ¸ÐºÐ°Ð·Ð°Ñ…ÑÐºÐ¸Ð¹ Ñ€Ð°Ð¹Ð¾Ð½",
      "admin_3_name": "Ñ.ÐÐºÑ‚Ð¾Ð³Ð°Ð¹",
      "admin_4_name": "",
      "admin_1_name": "ÐÐ»Ð¼Ð°Ñ‚Ð¸Ð½ÑÐºÐ°Ñ Ð¾Ð±Ð»Ð°ÑÑ‚ÑŒ"
     })
    await db('schools_school').insert({
      "id": 2397447,
      "external_id": "86",
      "name": "Ð§Ð°ÑÑ‚Ð½Ð°Ñ ÑˆÐºÐ¾Ð»Ð° Ð¸Ð¼ÐµÐ½Ð¸ Ð¥ÑƒÐ´Ð°Ð¹Ð±ÐµÑ€Ð³ÐµÐ½Ð° Ð¥Ð°Ð¹Ñ‚ÐµÐ½Ð¾Ð²Ð°\"\t\t\t\t\t\t\t29\t\ta5a0a1d3-65fd-3928-a5f8-978e4d801650\tÐ¡Ð°Ð¹Ñ€Ð°Ð¼ÑÐºÐ¸Ð¹ Ñ€Ð°Ð¹Ð¾Ð½\tÑ.ÐšÐ¾Ð¶Ð°ÐºÐ¾Ñ€Ð³Ð°Ð½\t\tÐ¢ÑƒÑ€ÐºÐµÑÑ‚Ð°Ð½ÑÐºÐ°Ñ Ð¾Ð±Ð»Ð°ÑÑ‚ÑŒ\n2397461\t101\tÐšÐ“Ð£ Â«ÐžÐ¨ Ð£ÑˆÑ‚Ð¾Ð±ÐµÂ»\t\t\t\t\t\t\t29\t\td98f228d-7397-3462-a730-5f4137d87460\tÐÐºÐ¶Ð°Ð¸ÐºÑÐºÐ¸Ð¹ Ñ€Ð°Ð¹Ð¾Ð½\tÑ.Â«Ð‡ÑˆÑ‚Ò‘Ð±ÐµÂ»\t\tÐ—Ð°Ð¿Ð°Ð´Ð½Ð¾-ÐšÐ°Ð·Ð°Ñ…ÑÑ‚Ð°Ð½ÑÐºÐ°Ñ Ð¾Ð±Ð»Ð°ÑÑ‚ÑŒ\n2397462\t102\tÐ¢ÐžÐž ",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 29,
      "location_id": "",
      "giga_id_school": "62b82f63-27e1-37f4-9543-92af59eaf38a",
      "admin_2_name": "Ð–Ð°Ð¼Ð±Ñ‹Ð»ÑÐºÐ¸Ð¹ Ñ€Ð°Ð¹Ð¾Ð½",
      "admin_3_name": "Ñ.ÐšÑ‹Ð·Ñ‹Ð»ÐºÐ°Ð¹Ð½Ð°Ñ€",
      "admin_4_name": "",
      "admin_1_name": "Ð–Ð°Ð¼Ð±Ñ‹Ð»ÑÐºÐ°Ñ Ð¾Ð±Ð»Ð°ÑÑ‚ÑŒ"
     })
    await db('schools_school').insert({
      "id": 2397463,
      "external_id": "103",
      "name": "ÐšÐ“Ð£ \"Ð¡Ð¿ÐµÑ†Ð¸Ð°Ð»ÑŒÐ½Ð°Ñ ÑˆÐºÐ¾Ð»Ð°-Ð¸Ð½Ñ‚ÐµÑ€Ð½Ð°Ñ‚ Ò®Ð¼Ñ–Ñ‚ Ð´Ð»Ñ Ð´ÐµÑ‚ÐµÐ¹ Ñ Ð½Ð°Ñ€ÑƒÑˆÐµÐ½Ð¸ÐµÐ¼ Ð¾Ð¿Ð¾Ñ€Ð½Ð¾-Ð´Ð²Ð¸Ð³Ð°Ñ‚ÐµÐ»ÑŒÐ½Ð¾Ð³Ð¾ Ð°Ð¿Ð¿Ð°Ñ€Ð°Ñ‚Ð°\"",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 29,
      "location_id": "",
      "giga_id_school": "106b35ca-affe-39e2-b7b7-bf5cdb9d6398",
      "admin_2_name": "Ð¢Ð°Ð»Ð°ÑÑÐºÐ¸Ð¹ Ñ€Ð°Ð¹Ð¾Ð½",
      "admin_3_name": "Ð³.ÐšÐ°Ñ€Ð°Ñ‚Ð°Ñƒ",
      "admin_4_name": "",
      "admin_1_name": "Ð–Ð°Ð¼Ð±Ñ‹Ð»ÑÐºÐ°Ñ Ð¾Ð±Ð»Ð°ÑÑ‚ÑŒ"
     })
    await db('schools_school').insert({
      "id": 2397443,
      "external_id": "82",
      "name": "ÐšÐ“Ð£ ÐœÐ°Ð»Ð¾ÐºÐ¾Ð¼Ð¿Ð»ÐµÐºÑ‚Ð½Ð°Ñ \"ÐžÐ±Ñ‰Ð°Ñ ÑÑ€ÐµÐ´Ð½ÑÑ ÑˆÐºÐ¾Ð»Ð° Ð‘Ð¸Ñ€Ð»Ð¸Ðº\"",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 29,
      "location_id": "",
      "giga_id_school": "17669e5e-d239-3d14-ba09-ffc5f4602b66",
      "admin_2_name": "ÐžÑ€Ð´Ð°Ð±Ð°ÑÑ‹Ð½ÑÐºÐ¸Ð¹ Ñ€Ð°Ð¹Ð¾Ð½",
      "admin_3_name": "Ñ.Ð‘Ð¸Ñ€Ð»Ð¸Ðº",
      "admin_4_name": "",
      "admin_1_name": "Ð¢ÑƒÑ€ÐºÐµÑÑ‚Ð°Ð½ÑÐºÐ°Ñ Ð¾Ð±Ð»Ð°ÑÑ‚ÑŒ"
     })
    await db('schools_school').insert({
      "id": 2397658,
      "external_id": "301",
      "name": "ÐšÐ“Ð£ \"ÐÐ°Ñ‡Ð°Ð»ÑŒÐ½Ð°Ñ Ð¾Ð±Ñ€Ð°Ð·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒÐ½Ð°Ñ ÑˆÐºÐ¾Ð»Ð° â„–56\"",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 29,
      "location_id": "",
      "giga_id_school": "f3ceca70-77b6-3f39-bb06-a44ae4d50249",
      "admin_2_name": "Ð¡Ð°Ñ€Ñ‹Ð°Ð³Ð°ÑˆÑÐºÐ¸Ð¹ Ñ€Ð°Ð¹Ð¾Ð½",
      "admin_3_name": "Ñ.Ð–Ð¸Ð»Ð³Ð°",
      "admin_4_name": "",
      "admin_1_name": "Ð¢ÑƒÑ€ÐºÐµÑÑ‚Ð°Ð½ÑÐºÐ°Ñ Ð¾Ð±Ð»Ð°ÑÑ‚ÑŒ"
     })
    await db('schools_school').insert({
      "id": 2398456,
      "external_id": "1111",
      "name": "ÐšÐ“Ð£ \"ÐÐ°Ñ‡Ð°Ð»ÑŒÐ½Ð°Ñ ÑˆÐºÐ¾Ð»Ð° â„–38\"",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 29,
      "location_id": "",
      "giga_id_school": "2c4e4348-d705-35ae-93a4-03a0623656b5",
      "admin_2_name": "ÐœÐµÑ€ÐºÐµÐ½ÑÐºÐ¸Ð¹ Ñ€Ð°Ð¹Ð¾Ð½",
      "admin_3_name": "Ñ.ÐšÑ‹Ð·Ñ‹Ð»ÑÐ°Ð¹",
      "admin_4_name": "",
      "admin_1_name": "Ð–Ð°Ð¼Ð±Ñ‹Ð»ÑÐºÐ°Ñ Ð¾Ð±Ð»Ð°ÑÑ‚ÑŒ"
     })
    await db('schools_school').insert({
      "id": 2461374,
      "external_id": "301",
      "name": "Name unknown",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 152,
      "location_id": "",
      "giga_id_school": "23a1cd6f-10fb-3e3d-ac5b-2978e6e9aab9",
      "admin_2_name": "PERERE",
      "admin_3_name": "CEG SONTOU",
      "admin_4_name": "",
      "admin_1_name": "BORGOU"
     })
    await db('schools_school').insert({
      "id": 2461118,
      "external_id": "37",
      "name": "Name unknown",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 152,
      "location_id": "",
      "giga_id_school": "25ab0c32-5677-34b8-908a-dcdf7fe08302",
      "admin_2_name": "MALANVILLE",
      "admin_3_name": "CEG GAROU",
      "admin_4_name": "",
      "admin_1_name": "ALIBORI"
     })
    await db('schools_school').insert({
      "id": 2461148,
      "external_id": "68",
      "name": "Name unknown",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 152,
      "location_id": "",
      "giga_id_school": "d66aa4a4-2013-310b-8f5e-0816a9ebf0b3",
      "admin_2_name": "KEROU",
      "admin_3_name": "CEG OUORE",
      "admin_4_name": "",
      "admin_1_name": "ATACORA"
     })
    await db('schools_school').insert({
      "id": 2461162,
      "external_id": "82",
      "name": "Name unknown",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 152,
      "location_id": "",
      "giga_id_school": "52e3ed7d-ba66-303a-94f0-6d9394223899",
      "admin_2_name": "KOUANDE",
      "admin_3_name": "CEG NIEKENE-BANSOU",
      "admin_4_name": "",
      "admin_1_name": "ATACORA"
     })
    await db('schools_school').insert({
      "id": 2461166,
      "external_id": "86",
      "name": "Name unknown",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 152,
      "location_id": "",
      "giga_id_school": "273b1c4d-9e04-36e0-919f-7395070ab324",
      "admin_2_name": "MATERI",
      "admin_3_name": "CEG DASSARI",
      "admin_4_name": "",
      "admin_1_name": "ATACORA"
     })
    await db('schools_school').insert({
      "id": 2461181,
      "external_id": "101",
      "name": "Name unknown",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 152,
      "location_id": "",
      "giga_id_school": "11614a72-2c5d-32e5-94f1-2638ce93e9fc",
      "admin_2_name": "NATITINGOU",
      "admin_3_name": "CEG KOUANDATA",
      "admin_4_name": "",
      "admin_1_name": "ATACORA"
     })
    await db('schools_school').insert({
      "id": 2461182,
      "external_id": "102",
      "name": "Name unknown",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 152,
      "location_id": "",
      "giga_id_school": "912b1dab-b36d-3e14-b08e-07e7256e14b9",
      "admin_2_name": "NATITINGOU",
      "admin_3_name": "CEG PEPORIYAKOU",
      "admin_4_name": "",
      "admin_1_name": "ATACORA"
     })
    await db('schools_school').insert({
      "id": 2461183,
      "external_id": "103",
      "name": "Name unknown",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 152,
      "location_id": "",
      "giga_id_school": "f699ef9e-9c58-34e2-a4f8-dae185d3bf7f",
      "admin_2_name": "NATITINGOU",
      "admin_3_name": "CEG PERMA",
      "admin_4_name": "",
      "admin_1_name": "ATACORA"
     })
    await db('schools_school').insert({
      "id": 2753310,
      "external_id": "37",
      "name": "Portsmouth Secondary School",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 249,
      "location_id": "",
      "giga_id_school": "e543f07d-e3c0-3c2d-a511-e8e24a717fa1",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2753338,
      "external_id": "68",
      "name": "St. Martin Secondary School",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "2 - Lower Secondary Education 3 -  Upper Secondary Education",
      "environment": "",
      "school_type": "",
      "country_id": 249,
      "location_id": "",
      "giga_id_school": "cd4a4194-19e6-3551-b1d7-0537e883169d",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2753352,
      "external_id": "82",
      "name": "Thibaud Primary School",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 249,
      "location_id": "",
      "giga_id_school": "95d38ab3-d768-3aa9-ae61-47510020479a",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2753356,
      "external_id": "86",
      "name": "Castle Bruce Primary School",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "1 - Primary Education",
      "environment": "",
      "school_type": "",
      "country_id": 249,
      "location_id": "",
      "giga_id_school": "37068baa-5539-31bf-aed9-53c71d4e1fc3",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2753371,
      "external_id": "101",
      "name": "Salybia Primary School",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "1 - Primary Education",
      "environment": "",
      "school_type": "",
      "country_id": 249,
      "location_id": "",
      "giga_id_school": "2e6feb37-94ff-340b-97b8-e935ae091ec6",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2753372,
      "external_id": "102",
      "name": "San Sauveur Primary School",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "1 - Primary Education",
      "environment": "",
      "school_type": "",
      "country_id": 249,
      "location_id": "",
      "giga_id_school": "88e55400-b305-3d4d-afb9-8e76f7bc874e",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2753373,
      "external_id": "103",
      "name": "Savanne Paille Primary School",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "1 - Primary Education",
      "environment": "",
      "school_type": "",
      "country_id": 249,
      "location_id": "",
      "giga_id_school": "d8b033d1-515c-3c60-a1ca-b95228bfb835",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 1675236,
      "external_id": "82",
      "name": "Anse La Raye Infant",
      "address": "Front Street, Anse La Raye",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 285,
      "location_id": "",
      "giga_id_school": "a6501da0-455b-3d94-a6ae-b8bdea6a9b6d",
      "admin_2_name": "Anse L ay Ray",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 1675250,
      "external_id": "68",
      "name": "Richfond Combined",
      "address": "Richfond, Mabouya Valley, Dennery",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 285,
      "location_id": "",
      "giga_id_school": "d378977e-9e30-3b0e-8aa2-2e95cf122adf",
      "admin_2_name": "Dennery",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 1675259,
      "external_id": "86",
      "name": "Vieux Fort Infant",
      "address": "Clarke Street Vieux-Fort",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 285,
      "location_id": "",
      "giga_id_school": "a6b0e3c7-025f-36cd-b016-9f1ef72e70d5",
      "admin_2_name": "Vieux Fort",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 1675276,
      "external_id": "37",
      "name": "Les Etangs Combined",
      "address": "Etangs, Soufriere",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 285,
      "location_id": "",
      "giga_id_school": "be8392cf-abe0-3818-9be3-f0ff2f125461",
      "admin_2_name": "Soufriere",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2450053,
      "external_id": "1111",
      "name": "M  O  E",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 21,
      "location_id": "",
      "giga_id_school": "c5e8de96-0c7e-39e5-88a6-c90220ce6416",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": "Gaza"
     })
    await db('schools_school').insert({
      "id": 2482404,
      "external_id": "301",
      "name": "MARIA INMACULADA",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 192,
      "location_id": "",
      "giga_id_school": "80ea47a7-8849-3e01-a326-7bfd9b3e1d8f",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2483177,
      "external_id": "1111",
      "name": "JACINTO PANIAGUA RODRIGUEZ",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "Primary",
      "environment": "",
      "school_type": "",
      "country_id": 192,
      "location_id": "",
      "giga_id_school": "5d804c94-a00d-36d5-9838-d215beba737a",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2506982,
      "external_id": "101",
      "name": "CHRISTIAN REFORM CHURCH  (KONGBLAFEH SECTION SECTION, FORIA TOWN (9.24929 ; -11.45394)",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "Primary",
      "environment": "",
      "school_type": "",
      "country_id": 7,
      "location_id": "",
      "giga_id_school": "bea95dd8-30d1-3089-835d-36af7e3c2c88",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2506983,
      "external_id": "102",
      "name": "CHRISTIAN REFORMED CHURCH PREPATRY NURSERY SCHOOL  (KONDEBAIA SECTION SECTION, KONDEMBAIA TOWN (9.385555 ; -11.56763)",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "Primary",
      "environment": "",
      "school_type": "",
      "country_id": 7,
      "location_id": "",
      "giga_id_school": "a9ed5dcc-9928-3bb5-ae33-59bd8b5a9458",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2506985,
      "external_id": "103",
      "name": "CRC NURSERY SCHOOL YARAH  (MANDEREFEH SECTION, YARAH TOWN (9.269761 ; -11.57989)",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "Primary",
      "environment": "",
      "school_type": "",
      "country_id": 7,
      "location_id": "",
      "giga_id_school": "63fabe2e-6a0e-3c69-8494-b34152f60403",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2508211,
      "external_id": "301",
      "name": "AL-NOOR ISLAMIC JUNIOR SECONDARY SCHOOL  (NEW ENGLAND VILLE SECTION SECTION, NEW ENGLAND VILLE TOWN (7.933617 ; -11.71841)",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "Secondary",
      "environment": "",
      "school_type": "",
      "country_id": 7,
      "location_id": "",
      "giga_id_school": "9c5536af-7d6b-3cd3-b340-7cdc033a3554",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2909592,
      "external_id": "301",
      "name": "ESC. RIO OESTE ABAJO",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 194,
      "location_id": "",
      "giga_id_school": "13acd38b-c73e-3981-9abe-b46c9fc27301",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2909603,
      "external_id": "102",
      "name": "ESC. QUEBRADA HUACA",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 194,
      "location_id": "",
      "giga_id_school": "a2b0e217-4c7d-3549-a3bc-6a9e74fc9f63",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2909731,
      "external_id": "101",
      "name": "ESC. BAHIA HONDA",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 194,
      "location_id": "",
      "giga_id_school": "cf04a62e-bfae-3f89-b9e8-4562f9cfa6fb",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2910286,
      "external_id": "103",
      "name": "ESC. VALLE DE GUACAMAYA",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 194,
      "location_id": "",
      "giga_id_school": "93dc221b-d976-33dc-9436-fe2707b34398",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2911557,
      "external_id": "1111",
      "name": "ESC. NUEVA ESPERANZA",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 194,
      "location_id": "",
      "giga_id_school": "b15ff123-bd07-3132-81e7-32e5c3f2818a",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2911973,
      "external_id": "37",
      "name": "ESC. MANDI YALA",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 194,
      "location_id": "",
      "giga_id_school": "8a8e774d-4d4c-35b4-a139-1c0ddbad3af0",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2912244,
      "external_id": "86",
      "name": "ESC. NABAGANDI",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 194,
      "location_id": "",
      "giga_id_school": "e6253168-2f87-3614-8cda-770ec0f2d7c3",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2912280,
      "external_id": "82",
      "name": "ESC. CARRETO",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 194,
      "location_id": "",
      "giga_id_school": "f91b2832-970b-336f-b24b-98b64a7025df",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2912283,
      "external_id": "68",
      "name": "ESC. ANACHUCUNA",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 194,
      "location_id": "",
      "giga_id_school": "588b7acb-3555-3589-b18a-fdb6e49731fc",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 1451774,
      "external_id": "1111",
      "name": "MAGUREKURE",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "Primary",
      "environment": "",
      "school_type": "",
      "country_id": 86,
      "location_id": "",
      "giga_id_school": "f3362a15-e267-32e4-99ff-5673e6fc3fcb",
      "admin_2_name": "Makonde",
      "admin_3_name": "",
      "admin_4_name": "Mashonaland West",
      "admin_1_name": "Mashonaland West"
     })
    await db('schools_school').insert({
      "id": 2246387,
      "external_id": "15526925",
      "name": "E M E F SANTO ANTONIO - RIO BEIJA FLOR",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "rural",
      "school_type": "",
      "country_id": 144,
      "location_id": "",
      "giga_id_school": "74cacb5f-59fb-3721-b584-85eb638e5d22",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 1500096,
      "external_id": "",
      "name": "Name unknown",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 23,
      "location_id": "",
      "giga_id_school": "1cac8be2-0568-3a0a-b313-394f75aa35b5",
      "admin_2_name": "25003",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": "LA"
     })
    await db('schools_school').insert({
      "id": 2247523,
      "external_id": "15572439",
      "name": "E M E I F MANOEL PEDRO SANTIAGO -EM BUCUQUARA",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "rural",
      "school_type": "",
      "country_id": 144,
      "location_id": "",
      "giga_id_school": "1e790d52-023c-3015-92cf-4e569dab9db0",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2897865,
      "external_id": "",
      "name": "Name unknown",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "Unknown",
      "environment": "",
      "school_type": "",
      "country_id": 198,
      "location_id": "",
      "giga_id_school": "a337829f-3148-361c-97d3-0bfe8c95ba2d",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2594881,
      "external_id": "",
      "name": "Name unknown",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 31,
      "location_id": "",
      "giga_id_school": "3e808a2e-d6b6-3efe-9ffb-a8f7d9d253e1",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2814267,
      "external_id": "t000006344",
      "name": "KOKOBEN D A PRIMARY SCHOOL",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 149,
      "location_id": "",
      "giga_id_school": "18b9db14-707f-3ad1-a7d4-2b6d172c949b",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2686434,
      "external_id": "1040051058",
      "name": "Name unknown",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 137,
      "location_id": "",
      "giga_id_school": "539b931d-4115-367f-9e42-d817d256d340",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 1330072,
      "external_id": "",
      "name": "INKA'S COLLEGE II",
      "address": "MZ B-1 LOTE 02",
      "postal_code": "",
      "email": "",
      "education_level": "Inicial - JardÃ­n",
      "environment": "",
      "school_type": "Privada - Particular",
      "country_id": 186,
      "location_id": "",
      "giga_id_school": "04f94d75-d6d9-38a8-88ca-e98392eed3b1",
      "admin_2_name": "LIMA",
      "admin_3_name": "SANTA ROSA",
      "admin_4_name": "",
      "admin_1_name": "LIMA"
     })
    await db('schools_school').insert({
      "id": 530218,
      "external_id": "",
      "name": "Name unknown",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 147,
      "location_id": "",
      "giga_id_school": "a6ada435-ecad-3329-8ba3-2315819ec735",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2142000,
      "external_id": "17djn0147z",
      "name": "ROSAURA ZAPATA",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 146,
      "location_id": "",
      "giga_id_school": "4c3b42ed-c8a9-3102-bf88-aa4ea24d8396",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 1226987,
      "external_id": "",
      "name": "BIBLIOTECA ESCOLAR POPULAR NÂº 15 SARMIENTO",
      "address": "AMEGHINO 465",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 143,
      "location_id": "",
      "giga_id_school": "7f7064f5-100f-33d6-a2da-47e25455b55c",
      "admin_2_name": "SAN FERNANDO",
      "admin_3_name": "RESISTENCIA",
      "admin_4_name": "",
      "admin_1_name": "Chaco"
     })
    await db('schools_school').insert({
      "id": 48022,
      "external_id": "41052633",
      "name": "SAGRADA FAMILIA C E E F M",
      "address": "RUA QUINTINO BOCAIUVA 01376",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "urban",
      "school_type": "",
      "country_id": 144,
      "location_id": "",
      "giga_id_school": "a060ce9b-8bdd-37f8-a310-304052039c9e",
      "admin_2_name": "",
      "admin_3_name": "Siqueira Campos",
      "admin_4_name": "SIQUEIRA CAMPOS",
      "admin_1_name": "PARANA"
     })
    await db('schools_school').insert({
      "id": 1381773,
      "external_id": "120100058",
      "name": "DR. DOROTEO VARELA MEJIA",
      "address": "YARUMELA",
      "postal_code": "",
      "email": "",
      "education_level": "Media",
      "environment": "",
      "school_type": "",
      "country_id": 196,
      "location_id": "",
      "giga_id_school": "d04f8721-ea93-3ef6-844a-f6f70f5f70c8",
      "admin_2_name": "La Paz",
      "admin_3_name": "La PÃƒÂ¡z",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 1468689,
      "external_id": "11424971544",
      "name": "Union Primary School Orukpa",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 23,
      "location_id": "",
      "giga_id_school": "f64bb731-1c85-31b5-8f1c-1bac5d075f51",
      "admin_2_name": "14008",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": "EN"
     })
    await db('schools_school').insert({
      "id": 2686440,
      "external_id": "1040050517",
      "name": "Name unknown",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 137,
      "location_id": "",
      "giga_id_school": "b01ab782-a67c-3a6b-a825-5bb82db6c224",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 1315653,
      "external_id": "",
      "name": "CASA DE NIÃ‘OS ASUNCION DE MARIA",
      "address": "PASAJE LAS AMERITAS S/N MZ T LOTE 7",
      "postal_code": "",
      "email": "",
      "education_level": "Inicial - JardÃ­n",
      "environment": "",
      "school_type": "Privada - Particular",
      "country_id": 186,
      "location_id": "",
      "giga_id_school": "ecb21795-a6fe-3e40-b6e4-8b660296ccdb",
      "admin_2_name": "LIMA",
      "admin_3_name": "COMAS",
      "admin_4_name": "",
      "admin_1_name": "LIMA"
     })
    await db('schools_school').insert({
      "id": 1252595,
      "external_id": "",
      "name": "ESCUELA NÂº514 SOR ANGELA DE LA CRUZ",
      "address": "PUNA PUNA",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 143,
      "location_id": "",
      "giga_id_school": "4e8c2a70-82b9-3a9a-b270-bbf1434051f9",
      "admin_2_name": "MORENO",
      "admin_3_name": "PUNA",
      "admin_4_name": "",
      "admin_1_name": "Santiago del Estero"
     })
    await db('schools_school').insert({
      "id": 1565701,
      "external_id": "",
      "name": "Heroesville Elementary School",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 20,
      "location_id": "",
      "giga_id_school": "81323eea-c128-34e8-9e8d-34acb3b931c3",
      "admin_2_name": "San Jose del Monte City",
      "admin_3_name": "San Jose Del Monte West",
      "admin_4_name": "",
      "admin_1_name": "Region III"
     })
    await db('schools_school').insert({
      "id": 2345822,
      "external_id": "",
      "name": "Name unknown",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 12,
      "location_id": "",
      "giga_id_school": "758afe1e-87b7-3876-9dbd-7de7d55555d8",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 1340082,
      "external_id": "",
      "name": "MANOS MAGICAS",
      "address": "CALLE 28 DE JULIO S/N",
      "postal_code": "",
      "email": "",
      "education_level": "Inicial No Escolarizado",
      "environment": "",
      "school_type": "PÃºblica - Sector EducaciÃ³n",
      "country_id": 186,
      "location_id": "",
      "giga_id_school": "3d315c56-6a8d-34c4-a65a-7b5304f896e4",
      "admin_2_name": "CHINCHA",
      "admin_3_name": "SUNAMPE",
      "admin_4_name": "",
      "admin_1_name": "ICA"
     })
    await db('schools_school').insert({
      "id": 2105138,
      "external_id": "07etk0153m",
      "name": "TELEBACHILLERATO COMUNITARIO NUMERO 153 GUADALUPE VICTORIA",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 146,
      "location_id": "",
      "giga_id_school": "f68884db-41e8-3d87-a919-98e924d6f221",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2327372,
      "external_id": "52038572",
      "name": "CENTRO DE ENSINO EM PERIODO INTEGRAL VALDIVINO SERAFIM",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "urban",
      "school_type": "",
      "country_id": 144,
      "location_id": "",
      "giga_id_school": "1a85f14d-4ae6-3445-b6b1-ad7df50bdefc",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "GUAPO",
      "admin_1_name": "GOIAS"
     })
    await db('schools_school').insert({
      "id": 2245579,
      "external_id": "15158713",
      "name": "E M E F IRMAOS FERNANDES",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "rural",
      "school_type": "",
      "country_id": 144,
      "location_id": "",
      "giga_id_school": "412e6fd3-6f5d-36e1-8895-44ff0c0a172c",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 54278,
      "external_id": "35203580",
      "name": "MARIA APARECIDA PINHEIRO VOLPE PROFA EM",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "urban",
      "school_type": "",
      "country_id": 144,
      "location_id": "",
      "giga_id_school": "1af8e602-9870-392b-99cc-d5ce81baddc2",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "MOGI DAS CRUZES",
      "admin_1_name": "SAO PAULO"
     })
    await db('schools_school').insert({
      "id": 510774,
      "external_id": "",
      "name": "ESC NVA EL JOBO",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "rural",
      "school_type": "",
      "country_id": 147,
      "location_id": "",
      "giga_id_school": "8271d005-328d-337f-93c6-4a3c5c947862",
      "admin_2_name": "Tierralta",
      "admin_3_name": "",
      "admin_4_name": "VDA. EL JOBO CALLEJAS",
      "admin_1_name": "CÃ³rdoba"
     })
    await db('schools_school').insert({
      "id": 1505733,
      "external_id": "12531677214",
      "name": "Kingdom Of God School",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 23,
      "location_id": "",
      "giga_id_school": "c04f4de6-3eaf-3c11-aea3-19ffc6895e29",
      "admin_2_name": "25016",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": "LA"
     })
    await db('schools_school').insert({
      "id": 2655158,
      "external_id": "1070480368",
      "name": "Name unknown",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 137,
      "location_id": "",
      "giga_id_school": "760d06e1-f131-3973-bafb-98864c68461c",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 1565626,
      "external_id": "",
      "name": "Gabaldon ES",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 20,
      "location_id": "",
      "giga_id_school": "9c32b259-c895-33eb-a8f8-461405fdcd2b",
      "admin_2_name": "Tarlac",
      "admin_3_name": "Gerona North",
      "admin_4_name": "",
      "admin_1_name": "Region III"
     })
    await db('schools_school').insert({
      "id": 1428381,
      "external_id": "",
      "name": "INST LOLONGO",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 28,
      "location_id": "",
      "giga_id_school": "559b27e3-b5bb-3561-a3d5-0ef7363ea788",
      "admin_2_name": "KasaÃ¯",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2810375,
      "external_id": "t000002444",
      "name": "KYASE M/A BASIC SCHOOL",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "secondary",
      "environment": "",
      "school_type": "",
      "country_id": 149,
      "location_id": "",
      "giga_id_school": "da3f44e2-05a8-37b3-a79f-2b50091ff622",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2300565,
      "external_id": "35005600",
      "name": "ESCOLA MUNICIPAL DE PERIODO INTEGRAL PROFESSOR FLAMMARION CORREA",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "urban",
      "school_type": "",
      "country_id": 144,
      "location_id": "",
      "giga_id_school": "c9cc3783-78c6-3700-ba11-adb2c0a8a39a",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2840364,
      "external_id": "206908837",
      "name": "24",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "secondary",
      "environment": "",
      "school_type": "",
      "country_id": 174,
      "location_id": "",
      "giga_id_school": "c1bde93b-7556-3824-bcfd-6d08b859e8b6",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2485076,
      "external_id": "3086",
      "name": "LA MANCHURIA",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "Primary",
      "environment": "",
      "school_type": "",
      "country_id": 192,
      "location_id": "",
      "giga_id_school": "985e1239-d4d8-33a8-8420-7b8fcb7884af",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2889775,
      "external_id": "",
      "name": "Name unknown",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "Unknown",
      "environment": "",
      "school_type": "",
      "country_id": 198,
      "location_id": "",
      "giga_id_school": "2e5a6592-40c3-3621-abb5-9fbdcf547413",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 1240183,
      "external_id": "",
      "name": "Escuela de Adultos NÂº 5",
      "address": "Luther King 1785 Colonia Escalante Escuela NÂ° 37",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 143,
      "location_id": "",
      "giga_id_school": "991b0032-c512-3bf1-b3dc-d1b3ac301a83",
      "admin_2_name": "CAPITAL",
      "admin_3_name": "SANTA ROSA",
      "admin_4_name": "",
      "admin_1_name": "La Pampa"
     })
    await db('schools_school').insert({
      "id": 1481545,
      "external_id": "11911371729",
      "name": "Local Government Education Primary School",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 23,
      "location_id": "",
      "giga_id_school": "c03e7c0e-58d6-35bf-9d97-dcf83ba0d20f",
      "admin_2_name": "19007",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": "KD"
     })
    await db('schools_school').insert({
      "id": 1466424,
      "external_id": "1133571341",
      "name": "Christ Victorious Nursery and Primary School Ikere Ekiti",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 23,
      "location_id": "",
      "giga_id_school": "01fa7605-b29b-39a8-95b6-2efbb84dfd41",
      "admin_2_name": "13010",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": "EK"
     })
    await db('schools_school').insert({
      "id": 2750020,
      "external_id": "",
      "name": "TrÆ°á»ng Tiá»ƒu há»c Nguyá»…n VÄƒn BÃ¡",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "Unknown",
      "environment": "",
      "school_type": "",
      "country_id": 138,
      "location_id": "",
      "giga_id_school": "7c900760-4fe2-3a86-9c8a-c9b4e5c07caa",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2063856,
      "external_id": "16dpr4102w",
      "name": "JOSE MA MORELOS",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 146,
      "location_id": "",
      "giga_id_school": "36ba161f-e44f-34a3-91a4-ac41d60f736a",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2155657,
      "external_id": "29ejn0044h",
      "name": "MIGUEL N. LIRA",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 146,
      "location_id": "",
      "giga_id_school": "75fef256-592c-38bf-95d0-6bd7397a47eb",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2062728,
      "external_id": "16dpr1808p",
      "name": "LUIS G MONZON",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 146,
      "location_id": "",
      "giga_id_school": "2c228c86-3be5-38da-ae53-1f73ff501bc7",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2344217,
      "external_id": "",
      "name": "Name unknown",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 12,
      "location_id": "",
      "giga_id_school": "7f8f2b58-901b-3463-899b-91a53234d2da",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2266044,
      "external_id": "24031003",
      "name": "UNIDADE LII TENENTE JOSE DUARTE TORRES",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "rural",
      "school_type": "",
      "country_id": 144,
      "location_id": "",
      "giga_id_school": "d7bdf90e-b15f-312f-a1c9-7097e16e1dd1",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2052631,
      "external_id": "14dpr2459i",
      "name": "JOSE MA LUIS MORA",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 146,
      "location_id": "",
      "giga_id_school": "e2feecae-5117-3baf-ae99-7af9de16253b",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 1999464,
      "external_id": "15ees0095v",
      "name": "OFIC NO 0102 \"LIC. JUAN FERNANDEZ ALBARRAN\"",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 146,
      "location_id": "",
      "giga_id_school": "9b05d242-45d5-347e-b031-7f324e1eb442",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 1486110,
      "external_id": "12011075499",
      "name": "Unguwar Zanko Primary School",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 23,
      "location_id": "",
      "giga_id_school": "5b45cf69-67d1-3424-8643-9beb3e30ca3a",
      "admin_2_name": "20008",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": "KN"
     })
    await db('schools_school').insert({
      "id": 2346419,
      "external_id": "",
      "name": "Name unknown",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 12,
      "location_id": "",
      "giga_id_school": "d004c7b5-49bc-37db-83fa-4d88b46eba22",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 1325852,
      "external_id": "",
      "name": "ESTRELLITAS LUMINOSAS",
      "address": "PALTAICO",
      "postal_code": "",
      "email": "",
      "education_level": "Inicial No Escolarizado",
      "environment": "",
      "school_type": "PÃºblica - Sector EducaciÃ³n",
      "country_id": 186,
      "location_id": "",
      "giga_id_school": "36920b73-4b2c-39af-bd3b-ed80266c680d",
      "admin_2_name": "PICOTA",
      "admin_3_name": "TRES UNIDOS",
      "admin_4_name": "",
      "admin_1_name": "SAN MARTIN"
     })
    await db('schools_school').insert({
      "id": 1477589,
      "external_id": "1186770133",
      "name": "Kyambo Primary School",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 23,
      "location_id": "",
      "giga_id_school": "436c7113-6e74-3a5a-bba5-0247751f7fd9",
      "admin_2_name": "18004",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": "JI"
     })
    await db('schools_school').insert({
      "id": 1462267,
      "external_id": "1111573137",
      "name": "Amaeze Community Primary School Isu Umuifi",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 23,
      "location_id": "",
      "giga_id_school": "577c953a-2dd0-3daf-99f2-c61fd9a4c1f3",
      "admin_2_name": "11013",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": "EB"
     })
    await db('schools_school').insert({
      "id": 2154405,
      "external_id": "27kjn0596v",
      "name": "PREESCOLAR COMUNITARIO",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 146,
      "location_id": "",
      "giga_id_school": "ef50e927-97a6-38c6-99f0-b57f3ddcf6a5",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 1480034,
      "external_id": "11917270172",
      "name": "Universal Basic Education Primary School Kiryoyi",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 23,
      "location_id": "",
      "giga_id_school": "6bd09b94-26ac-3bef-8b39-d18401142186",
      "admin_2_name": "19001",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": "KD"
     })
    await db('schools_school').insert({
      "id": 2070172,
      "external_id": "19kjn0577y",
      "name": "PREESCOLAR COMUNITARIO",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 146,
      "location_id": "",
      "giga_id_school": "33de7185-715f-346f-8b89-172593d6f298",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 1203891,
      "external_id": "",
      "name": "J. W. A. Richards",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 37,
      "location_id": "",
      "giga_id_school": "fbc5cccc-fffc-3601-a7d9-151daacf8a20",
      "admin_2_name": "",
      "admin_3_name": "Left Bank 2",
      "admin_4_name": "",
      "admin_1_name": ""
     })
    await db('schools_school').insert({
      "id": 2594681,
      "external_id": "",
      "name": "Name unknown",
      "address": "",
      "postal_code": "",
      "email": "",
      "education_level": "",
      "environment": "",
      "school_type": "",
      "country_id": 31,
      "location_id": "",
      "giga_id_school": "91927a1d-bfaf-34c5-9f83-5f05e265d763",
      "admin_2_name": "",
      "admin_3_name": "",
      "admin_4_name": "",
      "admin_1_name": ""
    })
   






 

    console.log('School Data is Added!')
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
})()