'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "599caadd31d293eaa2f358a3fd392a66",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "04379d46182548e6c96f8c14fd8df04b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "95cbf1b9aa9dec0de90f5d9a180dd479",
".git/logs/refs/heads/main": "2a4e4129be3baccb3216fa7783baafd2",
".git/logs/refs/remotes/origin/main": "278a44172971ef86bc01ba48a8e84db2",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/05/e3bfe961ec902da6ff4eaf6e55572923c5de55": "ea7bf0d8dc0e968f6bbb7281853459f9",
".git/objects/09/4be9650628b8e18ce9bff3d160bc72991ac613": "e9a131d205928fea00388aae6fe35f68",
".git/objects/09/8ff83e8b3818e09cd7d969e41f3d368e6aa526": "f49a55af7d543ff3053d2e036f59ace7",
".git/objects/0a/9a693562366f60b67f95f9579e56b934e6742d": "19e69087300123059ddecc5efbb3b038",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/13/010c77a5f585357b6c8ed762674f19989575f0": "ddd44a6a9434dc7c328c17468d8a33b3",
".git/objects/18/cffdbdacabba79dfef2a8e56ce76be998f9c6b": "d20e74310c400896602de6c29de5050f",
".git/objects/18/ee0a5a1b34d17f0ee6607740c5e047269d3d8a": "5f03bb8078a91480129b90255183dc59",
".git/objects/19/51aaa8460a893bdd160a73ad52e8b55fcdfef4": "bc2b0bf05ed5d0bd1589023a30b955dd",
".git/objects/1a/459dcd39c7178e85881ab1e4ff1225d906c2f6": "f81f49234466d4cd5162ab60e5f27b7e",
".git/objects/1a/f93a7668cc2da849bcbecc9f78371af8ae10bb": "33b8668835a775b6a2b6171a0417d4a0",
".git/objects/1c/ed87aa9092a849a213975323ac5705b3649ec2": "4fc6918ebf8923a44e0965fb9b3b7aad",
".git/objects/20/61939a7de8d129a486d998de0196cad1e40277": "b189e754e7c9a90afdf53c4d6004b98c",
".git/objects/21/3b7da8b0eec674e73e8510cd01a94bb6842e90": "8efb6a8832aad3473bc2d6d0beff6b38",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/objects/23/759a94bc4a2636b6afe61d21792466532dcd60": "61ccc6c4100c5f1e124d10463783e1e1",
".git/objects/2a/6aa31026b69ffb9bdcd1446c4edfd6d8378efa": "511f12a5603a65234ebd2c8842cd86bc",
".git/objects/30/32cffff3832e468cf8b3137f1ec303d9313046": "c91984733d70c3cca4d1455fd0f4b764",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3b/11708e81a5aefaba9d3c3c5d5377c4d826b448": "41ea29cc6941c521bde37695a8d6745d",
".git/objects/3b/4be691563888904e934f52fd2e867c1ddc09de": "2e18afb213cb0ed3f654ad2d4463e766",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/267f775d6d97680c1f8236786738cf3a1efa0d": "642b0a1b63b58944aa57f573356eaa36",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/47/34ebdc3a390caee35b27b79f23abb70fd6a40e": "b2fdd944c222e60e8e3f5e9b807d2d1d",
".git/objects/47/7b104f29b93cb65c61ea0591fc3464c54f904d": "434340f5f46740757e352d041c49c2bd",
".git/objects/4e/498c9bef32e8739bca7ce40e209a5eca4434d2": "cb2bf4e118b9e306745a5dc0dc74216a",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/50/2dbaef3e437197b1e5e686ba873e1c485198bf": "6c1810525e67bdfa4a661ef994824e9e",
".git/objects/53/c15e761c3e3cfb0f65323a7adb1bbb9d8ba464": "db4939159a84cedb65dde56119f0ea3c",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/a070ef9d2b65f93b06afc917da126d5c97b3dc": "b16705186f5c7fa304c15cc501778074",
".git/objects/59/ace9c07790b88a167a8c53080559c0ef60aad4": "1a6b49314795894f1e8e98f6c8714b0f",
".git/objects/5b/34ea9ea3bee51c6ec0a65c86003f85e1bf65b9": "df79c6b73df2905998e3a800269d199c",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/1de7f1b89f21faa485e0bdb97c38994a527c11": "4ebc4bbede44c73e69bfb0a3fd2d35a4",
".git/objects/61/31b9a020fc03d2788a2c7ebd0cfba6a20aa8bf": "44a526f21aaf2fef4ba3a231af5370f8",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/67/e673d56d589f5299c711513320788cec020f12": "7329173d64e0b5aafda7f430fb07ab06",
".git/objects/67/fbdfb7afa3827d3f809067f99e20758e3c5d8f": "03f343b9aea8621c31b7b7a4a16769a3",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6d/0a6cbcabe1e1097c794e23c5f757c100f59cde": "39be01a2991aa64b3224f9bd1c9e96dc",
".git/objects/6f/2743d9f13bd8252a49aa1e8a1c4261a821cb7e": "8c3fb036a2fceeb318621bc324680dd7",
".git/objects/70/b6f7e525c440ffbb9b30d1f3ab05951e7f2e09": "121d3847d9782576131478c683a88af1",
".git/objects/71/eab8e1d8888dba5e711431f2ddcadfa9c52c54": "5c62661dbc40e1ab105ea72c203050ac",
".git/objects/72/b6acdc0cc5bf9670bb177bfaedf8b8c35a1a96": "e2bdaa892369b00d5ddbb1723b8d3f62",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/73/b1fb0455b75343bd89e535b879f557c5ae46a7": "062f1978da82161cc4364be669b31390",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/76/98aad8337c841bc98f6c17e4667258bbd5093b": "6d57de125b590801181ed565dc554e11",
".git/objects/79/96fe53da986c168fd313c66956180ed9c460a1": "442772851b397ec8aff8a3efb4dcb12c",
".git/objects/7f/ea138feb1fd73687c4cad10bbb2cc29f4bf8b0": "7251a84ddb465fe319dba98cf8e88118",
".git/objects/80/3b59ce01657a82e8ffd28ffb8d334c89dd7357": "b88da8ee740066ce89e57f6471e67a35",
".git/objects/81/27cdcf29a9202710ed2b875583b48518b56f08": "82c7c332aeb8743b678af5864b756819",
".git/objects/82/a4ce9ffe604588d3658fa650d9dbfeedb914bc": "ccfc8167d78e21fe55a61ad285cfb29f",
".git/objects/82/dcd05fde787f469f2fb93c65270ec3cc37bd6a": "2c08744682cee9c593b1caf6c91ae73b",
".git/objects/83/db39959f00ef3279ab9009a34c05d5a902d4ea": "d139048da5f98e87fd4996e556beb7bd",
".git/objects/87/889f37e43cf08e77608403b2efd61355a988c5": "ce28b834ad7f3e7577871ddf0ed01f1f",
".git/objects/89/7ca792728005db755f30a78054a9186ee6ad66": "d48f1450b0a79ca8ecb1895bebe18663",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8c/a766425e280c3aa3b49008d307e501a485ed5b": "2b852b26ed0e343c84cbab868d764288",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/95/686ffd70a1acc57703ea95c437072e1a5d333c": "3f7ff1babd896f6efbf03623eeaf1e1d",
".git/objects/98/56d99891e73c766bbdad006e4b4649974733b8": "5414731ea80917e5303b939e2c16da4b",
".git/objects/99/d70956833a18ddab490a9a69696fb82fd58d7c": "e1f6909018891d20c6eff2c64221b0b5",
".git/objects/9a/b92e1fcce1509cb429d4da170f25d9cfd18094": "2a08acd81e3efacad01d1351e77b9551",
".git/objects/a1/1a8ec525acd16fde990792463085aa334344cb": "7fb51f118668a26804ffa4d9fa43b9e3",
".git/objects/a4/3180d74b49010ce1d7c030f85e0c9b54f1ff6e": "f98b804ee7341322e7e19e389d908edc",
".git/objects/a5/49c72f4fb34812983cee8bbe9002b4648422aa": "0d0426e7747d06b01396091ae2e5c3b6",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/a0bb8d4128a5f9c4965153aaa0f5e2a5be9fb8": "c54e170c12258560d7d927f71d884605",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ac/76eefbe972bf276e2c5319e8483413e3093b0f": "4d62f5e28a0ed39f6e9122be5a92cd31",
".git/objects/ac/817f30d468dd8f2666b6f5b539fcf4b9671d86": "f4cf397543f26a81d49f8b3fcf3c04fd",
".git/objects/ae/70c274dc8af0b18b102762b7ddd621dcef09ea": "ca2245145d4bd779bf848edb027772c2",
".git/objects/bb/4d2c79c99aa00e4f344c1a3b95d6c4df647370": "b8020443b6466b94d926ad6c6edb486c",
".git/objects/bc/b388128d128ffdf9272ed0f1038088bf41b3ca": "550cbea51b06549ace2da687010f843d",
".git/objects/bd/64abe9c72f56d9e6483d6973bcc8436e9600ab": "dd111fdc5251ef4404ee71bbcb7eb23e",
".git/objects/bd/75cdb695dc3bf6c1c4853ed0f42e72cbac8b74": "1529fe669caab17ef57a04586964dd84",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c5/776654774dfa5d9242816d0b1b52881204d997": "e8d3366c5be7f0a1051e34862dd04afc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/d3eff4901dd6c231da739f8c49a6bfcf7cbbe0": "14088cf1cb3a94fd44cc51f17b4798ed",
".git/objects/d9/15e2346bd52c418dcee3c811336e99ea46a1de": "0de9363ad212b74765ca6eb6d6c1a38c",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/dd/e7ba4372517593f6a96837000b17f8b86f6ec3": "ef1d14cacdfebf8db4e1cce915326ff8",
".git/objects/de/5c728f27440508556ba481af991c821f46bab9": "729a56d261bb1b1b2cea2a1506cfc93e",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/e5/7d5d2a0ad96ef3292e428f5437548bc9806177": "1bb171badf828156f430abfc2c9757d4",
".git/objects/ee/4ebe0a65875b8cb775fe13f0e23f677c0d127a": "412416210e89e30823f6c55bbae20d64",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/bbc14e3bd7d886feef166ff43116082812477c": "881e3cbd4cf07b2c56d50df690c5011a",
".git/objects/f3/34478c2751b89a2b69d7137c65e5f13b4d112b": "58d8267e88ffadceb3a856e3b3dc10b3",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f9/2fbe9443e14fee6277dce3d8eee5e911e07503": "526074cf95f50e1fd5a5fc9e94e990c5",
".git/objects/fc/12f41370f5344b30524a6019c318a690f9ebfb": "66a779382a6db4b6882ed83a135245f7",
".git/refs/heads/main": "1ed0690fc12008a4ef5dff53ab500773",
".git/refs/remotes/origin/main": "1ed0690fc12008a4ef5dff53ab500773",
"assets/AssetManifest.bin": "e6397aacc0f0c25c86aeb2b1b9d5ef25",
"assets/AssetManifest.bin.json": "4e9ce8fd955571e7943cf4e8ef6f807d",
"assets/AssetManifest.json": "8354d6def098440110e1d737455016d0",
"assets/assets/banana.png": "b36cd49bf03647543a9b0308e3cc9689",
"assets/assets/banner.png": "415ec47b914b86211d42072a53532b0a",
"assets/assets/banner2023.png": "d9cdc9c3ecb9842344f15de6d0c895e3",
"assets/assets/comida-saudavel.png": "155ed53c3a45b40b65454b97344feb44",
"assets/assets/correndo.png": "880855fcdc18c02868428e1110c8511c",
"assets/assets/fundo.png": "1d35dc44e7ba1675f73ed52e92ccff58",
"assets/assets/fundomeioambiente.png": "c01a70a865efe3d3d5e599f16c22f937",
"assets/assets/fundoo.png": "e001b2bfac27cea9654d2440238b71c0",
"assets/assets/fundoplay.png": "3764e7fb3a3e6aa57319031514afc585",
"assets/assets/fundoprincipal.png": "f552f97936026e48a6505131d9ada8f0",
"assets/assets/icons/acao.png": "c85e13d05d0db704eebb8c9a2268c842",
"assets/assets/icons/cepon.png": "ca95c20ff14bfa92a6eb366f5da2e936",
"assets/assets/icons/health.png": "69f9dc54c18ca79cf3507061b64553ab",
"assets/assets/icons/home.png": "d2cb8074a9c3facb59a97ddea3547db3",
"assets/assets/icons/icon.png": "50d784463c360169a4db285f6a4072a2",
"assets/assets/icons/identify.png": "7aa9576790741984c87523ff77cd44c7",
"assets/assets/icons/inicio.png": "22aff17e83b8409cfebee0ef2e6a24e0",
"assets/assets/icons/meioambiente.png": "b90b2403aac73abe5df78f9f5363a9bd",
"assets/assets/icons/memory.png": "290057358264da66e6bda2251fdd26b2",
"assets/assets/icons/play.png": "47b24b6531657b5a8f85d689b20d6a97",
"assets/assets/icons/quiz.png": "df8f5c751b13e11a073e0ea053686f85",
"assets/assets/icons/sobre.png": "139a5810b5a5027a83f53f12a2f614bc",
"assets/assets/icons/sustentabilidade.png": "30499d6ac91cd21721e3c7808421eada",
"assets/assets/inicial/1.png": "2de5de6f894476e70dab52068972ad79",
"assets/assets/inicial/2.png": "ad2e4b5d7a6a8a48039a064ad252d234",
"assets/assets/inicial/3.jpg": "da03b06a53d08c069803717ead706871",
"assets/assets/inicial/4.jpg": "02d270ba5c076143ba731a85da98172b",
"assets/assets/inicial/5.jpg": "9055029b0dd9955566671f7bf9b483e6",
"assets/assets/inicial/6.jpg": "9055029b0dd9955566671f7bf9b483e6",
"assets/assets/inicial/7.jpg": "cb1ce9e2e2c3ff00822e3e911b3b733d",
"assets/assets/inicial/8.jpg": "33d8dcf1ea0a95552965f1b86d461d0c",
"assets/assets/jornal.png": "167abb857ffcc9ef20dafee515f9ea28",
"assets/assets/lixo.png": "4815d8601bb1223463b5ea01bcfc9a61",
"assets/assets/logoagrinho.png": "c4d22ee8fa5596dceb1e561d1923b88a",
"assets/assets/medica.png": "af353e3c2889f220f4064d4ffb3f6313",
"assets/assets/meninoagro.png": "92b46f675be4bdc915192afae92f155f",
"assets/assets/pet.png": "a8174888e19e131e532f56d720ff1781",
"assets/assets/saudavel/1.png": "245bb5998cb2cc8570a7e7eb0cc9329b",
"assets/assets/saudavel/2.png": "ff6c1ffe0907de8a8db2d55e50f96ed1",
"assets/assets/saudavel/3.png": "6c17d665bbafab65e1d433ed1f31e59f",
"assets/assets/saudavel/4.png": "405c6f8ed0a38a5205b23c02bc25c470",
"assets/assets/saudavel/5.png": "a6c58f243c4bbcb5dfe11d0ea02e8bf8",
"assets/assets/songs/correct.mp3": "bb81be530bec88972df97509c8df98ce",
"assets/assets/songs/final.wav": "fe765dbdcad2c66d6efb45682bd72189",
"assets/assets/songs/wrong.mp3": "63a8039f0a4fa086439ee5c950df38cd",
"assets/assets/terra.png": "80a2ff56fa78b36262c1e6cd095a278f",
"assets/assets/vidro.png": "650ee92bbe67205617db578f1ebe0734",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "ea400365abaa5a6b2f3eaba8818c693a",
"assets/NOTICES": "57c49c92feb61a68ae9bf968da1e9681",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "0f7ee642847384ca2b068f3585d4c4fc",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "0cbb4ea7a374e4277dea42ac9327fcbc",
"icons/Icon-192.png": "454d32c8d1b03366740cf4e34972a792",
"icons/Icon-512.png": "4ec8c0fd47fdbda9d2181bff00c2c086",
"icons/Icon-maskable-192.png": "454d32c8d1b03366740cf4e34972a792",
"icons/Icon-maskable-512.png": "4ec8c0fd47fdbda9d2181bff00c2c086",
"index.html": "5725ba319fa12784a4e5ce7850a18258",
"/": "5725ba319fa12784a4e5ce7850a18258",
"main.dart.js": "301244012d4ba192b295c1c922b17dc2",
"manifest.json": "3079d7d617632f4aabb514ce1657803e",
"README.md": "a0bf41a5ad5a30bd6e5158966f8852c1",
"version.json": "fad7a661368e6c2476d0ce2a9690bcb7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
