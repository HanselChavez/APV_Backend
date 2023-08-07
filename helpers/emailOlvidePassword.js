import nodemailer from 'nodemailer';

const emailOlvidePassword = async (datos) =>{
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
    });
    const {email,nombre,token} = datos;
    //Enviar email
    const info = await transport.sendMail({
        from:'APV - Administrador de Pacientes de Veterinaria',
        to:email,
        subject:'Restablece tu Contraseña',
        text: 'Restablece tu Contraseña',
        html: `<p>Hola ${nombre}, has solicitado restablecer tu password.</p>
            <p>Sigue el siguiente enlace para generar un nuevo password: 
                <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer Contraseña</a></p>
            <p>Si tu solicitaste restablecer tu contraseña, puedes ignorar este mensaje</p>
        `
    });
   
    console.log('Mensaje enviado: %s',info.messageId);
}
export default emailOlvidePassword;

