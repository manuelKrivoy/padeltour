# Padel Tour - Inscripción al Torneo

Esta es una landing page para inscripciones a un torneo de padel. La página está desarrollada en React y utiliza un formulario para registrar a los participantes. Los datos enviados se guardan en una hoja de cálculo de Google Sheets.

## Uso

### 1. Crear script de Google Sheets

1. Crea una nueva hoja de cálculo en Google Sheets.
2. Agrega el siguiente script en el editor de scripts:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.teamName,
    data.participant1,
    data.participant2,
    data.phone,
    data.email,
    new Date().toLocaleString(),
  ]);

  return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Headers": "Content-Type",
    });
}
```

3. Guarda el script y publícalo como una aplicación web.
4. Copia la URL generada y pégala en el archivo `.env` en la variable `REACT_APP_GOOGLE_SHEETS_URL`.

### 2. Clonar el repositorio y correr el proyecto

```bash
git clone https://github.com/manuelKrivoy/padeltour
cd padeltour
npm install
npm run dev
```

¡Listo! Ahora puedes acceder a la página y comenzar a registrar inscripciones para el torneo de padel.
