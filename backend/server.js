const doGet = () =>
  HtmlService.createTemplateFromFile("frontend/index.html")
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag(
      "viewport",
      'width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1"'
    )
    .setTitle("Titulo app");

const include = (ruta) =>
  HtmlService.createHtmlOutputFromFile(ruta).getContent();
