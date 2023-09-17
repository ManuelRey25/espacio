import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        producto = request.form['producto']
        cantidad = request.form['cantidad']

        # Configurar los detalles del correo electrónico
        sender_email = 'lic.manuelrey@gmail.com'  # Cambia esto a tu dirección de correo
        sender_password = '3cmdqq24d'  # Cambia esto a tu contraseña de correo
        receiver_email = 'ch.r87@hotmail.com'  # Cambia esto al destinatario deseado
        subject = 'Nuevo pedido recibido'

        # Crear un mensaje de correo electrónico
        message = MIMEMultipart()
        message['From'] = sender_email
        message['To'] = receiver_email
        message['Subject'] = subject

        # Cuerpo del mensaje
        body = f'Producto: {producto}\nCantidad: {cantidad}'
        message.attach(MIMEText(body, 'plain'))

        # Enviar el correo electrónico
        try:
            server = smtplib.SMTP('smtp.gmail.com', 587)
            server.starttls()
            server.login(sender_email, sender_password)
            server.sendmail(sender_email, receiver_email, message.as_string())
            server.quit()
            return 'Pedido enviado con éxito'
        except Exception as e:
            return f'Error al enviar el pedido: {str(e)}'

    return render_template('formulario_pedido.html')

if __name__ == '__main__':
    app.run()
