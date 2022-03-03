const config = ["frontend/config/constantesCdn"];

const componentes = [
  "frontend/components/Navbar",
  "frontend/components/ButtonTheme",
];

const helpers = ["frontend/helpers/theme"];

const redux = [];

const rutas = ["frontend/routes/Routes"];

const vistas = ["frontend/views/Inicio"];

const importaciones = [
  ...config,
  ...componentes,
  ...helpers,
  ...redux,
  ...rutas,
  ...vistas,
  "frontend/App",
];
