document.getElementById('generateQR').addEventListener('click', function() {
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const direccion = document.getElementById('direccion').value || '';
    const empresa = document.getElementById('empresa').value || '';

    // Validar que todos los campos obligatorios estén completos
    if (nombre === '' || telefono === '' || email === '') {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }

    // Crear la vCard en formato texto
    const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:${nombre}
TEL:${telefono}
EMAIL:${email}
ORG:${empresa}
ADR:${direccion}
END:VCARD
    `.trim();

    // Limpiar el contenedor del QR antes de generar uno nuevo
    const qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = '';

    // Generar el código QR con los datos de la vCard
    new QRCode(qrContainer, {
        text: vCard,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
});
