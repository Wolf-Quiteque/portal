const nodemailer = require("nodemailer");
import clientPromise from "../../lib/mongodb";
import { ObjectId } from "bson";
import makeid from "../../lib/random";
export default async function handler(req, res) {
  const senha = makeid();
  var id = req.body._id;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "cumbisik@gmail.com",
      pass: "itxiuznnjwxwgsza",
    },
  });

  const Approved = async () => {
    const cliente = await clientPromise;
    const db = cliente.db("glab_admin");

    await db
      .collection("cumbigroup")
      .updateOne(
        { _id: new ObjectId(req.body._id) },
        { $set: { emailSent: true, senha: senha } }
      );
  };

  async function sendMail() {
    try {
      await transporter.sendMail({
        from: "Cumbi Group",
        to: req.body.email,
        subject: "Parabéns! Você foi aprovado para participar do evento",
        html: `
        <!DOCTYPE html>
        <html
          lang="en"
          xmlns="http://www.w3.org/1999/xhtml"
          xmlns:v="urn:schemas-microsoft-com:vml"
          xmlns:o="urn:schemas-microsoft-com:office:office"
        >
          <head>
            <title>Welcome to [Coded Mails]</title>
            <!--[if !mso]><!-- -->
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <!--<![endif]-->
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <style type="text/css">
              #outlook a {
                padding: 0;
              }
        
              body {
                margin: 0;
                padding: 0;
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
              }
        
              table,
              td {
                border-collapse: collapse;
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
              }
        
              img {
                border: 0;
                height: auto;
                line-height: 100%;
                outline: none;
                text-decoration: none;
                -ms-interpolation-mode: bicubic;
              }
        
              p {
                display: block;
                margin: 13px 0;
              }
            </style>
            <!--[if mso]>
              <xml>
                <o:OfficeDocumentSettings>
                  <o:AllowPNG />
                  <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
              </xml>
            <![endif]-->
            <!--[if lte mso 11]>
              <style type="text/css">
                .mj-outlook-group-fix {
                  width: 100% !important;
                }
              </style>
            <![endif]-->
            <!--[if !mso]><!-->
            <link
              href="https://fonts.googleapis.com/css?family=Nunito:100,400,700"
              rel="stylesheet"
              type="text/css"
            />
            <style type="text/css">
              @import url(https://fonts.googleapis.com/css?family=Nunito:100,400,700);
            </style>
            <!--<![endif]-->
            <style type="text/css">
              @media only screen and (min-width: 480px) {
                .mj-column-per-100 {
                  width: 100% !important;
                  max-width: 100%;
                }
              }
            </style>
            <style type="text/css">
              @media only screen and (max-width: 480px) {
                table.mj-full-width-mobile {
                  width: 100% !important;
                }
        
                td.mj-full-width-mobile {
                  width: auto !important;
                }
              }
            </style>
            <style type="text/css">
              a,
              span,
              td,
              th {
                -webkit-font-smoothing: antialiased !important;
                -moz-osx-font-smoothing: grayscale !important;
              }
            </style>
          </head>
        
          <body style="background-color: #eaeaea">
            <div
              style="
                display: none;
                font-size: 1px;
                color: #ffffff;
                line-height: 1px;
                max-height: 0px;
                max-width: 0px;
                opacity: 0;
                overflow: hidden;
              "
            >
              Preview - Welcome to Coded Mails
            </div>
            <div style="background-color: #eaeaea">
              <!--[if mso | IE]>
                <table
                   align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
                >
                  <tr>
                    <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                <![endif]-->
              <div style="margin: 0px auto; max-width: 600px">
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="width: 100%"
                >
                  <tbody>
                    <tr>
                      <td
                        style="
                          direction: ltr;
                          font-size: 0px;
                          padding: 20px 0;
                          text-align: center;
                        "
                      >
                        <!--[if mso | IE]>
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                          
                  <tr>
                
                      <td
                         class="" style="vertical-align:top;width:600px;"
                      >
                    <![endif]-->
                        <div
                          class="mj-column-per-100 mj-outlook-group-fix"
                          style="
                            font-size: 0px;
                            text-align: left;
                            direction: ltr;
                            display: inline-block;
                            vertical-align: top;
                            width: 100%;
                          "
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="vertical-align: top"
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td style="font-size: 0px; word-break: break-word">
                                  <!--[if mso | IE]>
              
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="20" style="vertical-align:top;height:20px;">
                
              <![endif]-->
                                  <div style="height: 20px"> </div>
                                  <!--[if mso | IE]>
              
                  </td></tr></table>
                
              <![endif]-->
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!--[if mso | IE]>
                      </td>
                    
                  </tr>
                
                            </table>
                          <![endif]-->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]>
                    </td>
                  </tr>
                </table>
                
                <table
                   align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
                >
                  <tr>
                    <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                
                  <v:rect  style="width:600px;" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
                  <v:fill  origin="0.5, 0" position="0.5, 0" src="https://images.unsplash.com/photo-1596146828437-d845f3b3235b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" type="tile" />
                  <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
                <![endif]-->
              <div
                style="
                  background: url(https://www.cumbigroup.com/images/BG-3.1.png) top
                    center / cover no-repeat;
                  margin: 0px auto;
                  border-radius: 20px 20px 0 0;
                  max-width: 600px;
                "
              >
                <div style="line-height: 0; font-size: 0">
                  <table
                    align="center"
                    background="https://www.cumbigroup.com/images/BG-3.1.png"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="
                      background: url(https://www.cumbigroup.com/images/BG-3.1.png) top
                        center / cover no-repeat;
                      width: 100%;
                      border-radius: 20px 20px 0 0;
                    "
                  >
                    <tbody>
                      <tr>
                        <td
                          style="
                            direction: ltr;
                            font-size: 0px;
                            padding: 20px 0;
                            text-align: center;
                          "
                        >
                          <!--[if mso | IE]>
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                          
                  <tr>
                
                      <td
                         class="" style="vertical-align:top;width:600px;"
                      >
                    <![endif]-->
                          <div
                            class="mj-column-per-100 mj-outlook-group-fix"
                            style="
                              font-size: 0px;
                              text-align: left;
                              direction: ltr;
                              display: inline-block;
                              vertical-align: top;
                              width: 100%;
                            "
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="vertical-align: top"
                              width="100%"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      font-size: 0px;
                                      padding: 8px 0;
                                      word-break: break-word;
                                    "
                                  >
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      style="
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tbody>
                                        <tr>
                                          <td style="width: 150px">
                                            <img
                                              height="auto"
                                              src="https://www.cumbigroup.com/images/cumbi.png"
                                              style="
                                                border: 0;
                                                display: block;
                                                outline: none;
                                                text-decoration: none;
                                                height: auto;
                                                width: 100%;
                                                font-size: 16px;
                                              "
                                              width="150"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="font-size: 0px; word-break: break-word">
                                    <!--[if mso | IE]>
              
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="250" style="vertical-align:top;height:250px;">
                
              <![endif]-->
                                    <div style="height: 250px"> </div>
                                    <!--[if mso | IE]>
              
                  </td></tr></table>
                
              <![endif]-->
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if mso | IE]>
                      </td>
                    
                  </tr>
                
                            </table>
                          <![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!--[if mso | IE]>
                  </v:textbox>
                </v:rect>
              
                    </td>
                  </tr>
                </table>
                
                <table
                   align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
                >
                  <tr>
                    <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                <![endif]-->
              <div
                style="
                  background: #ffffff;
                  background-color: #ffffff;
                  margin: 0px auto;
                  border-radius: 0 0 20px 20px;
                  max-width: 600px;
                "
              >
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="
                    background: #ffffff;
                    background-color: #ffffff;
                    width: 100%;
                    border-radius: 0 0 20px 20px;
                  "
                >
                  <tbody>
                    <tr>
                      <td
                        style="
                          direction: ltr;
                          font-size: 0px;
                          padding: 20px 0;
                          text-align: center;
                        "
                      >
                        <!--[if mso | IE]>
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                          
                  <tr>
                
                      <td
                         class="" style="vertical-align:top;width:600px;"
                      >
                    <![endif]-->
                        <div
                          class="mj-column-per-100 mj-outlook-group-fix"
                          style="
                            font-size: 0px;
                            text-align: left;
                            direction: ltr;
                            display: inline-block;
                            vertical-align: top;
                            width: 100%;
                          "
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="vertical-align: top"
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td
                                  align="left"
                                  style="
                                    font-size: 0px;
                                    padding: 10px 25px;
                                    word-break: break-word;
                                  "
                                >
                                  <div
                                    style="
                                      font-family: Nunito, Helvetica, Arial, sans-serif;
                                      font-size: 18px;
                                      font-weight: 400;
                                      line-height: 30px;
                                      text-align: left;
                                      color: #54595f;
                                    "
                                  >
                                    <h2
                                      style="
                                        margin: 0;
                                        line-height: normal;
                                        font-weight: bold;
                                        font-size: 20px;
                                      "
                                    >
                                      Saudações ${
                                        req.body.firstName +
                                        " " +
                                        req.body.lastName
                                      }
                                    </h2>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  align="left"
                                  style="
                                    font-size: 0px;
                                    padding: 10px 25px;
                                    word-break: break-word;
                                  "
                                >
                                  <div
                                    style="
                                      font-family: Nunito, Helvetica, Arial, sans-serif;
                                      font-size: 16px;
                                      font-weight: 400;
                                      line-height: 22px;
                                      text-align: left;
                                      color: #54595f;
                                    "
                                  ></div>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  align="left"
                                  style="
                                    font-size: 0px;
                                    padding: 10px 25px;
                                    word-break: break-word;
                                  "
                                >
                                  <div
                                    style="
                                      font-family: Nunito, Helvetica, Arial, sans-serif;
                                      font-size: 16px;
                                      font-style: italic;
                                      font-weight: 400;
                                      line-height: 22px;
                                      text-align: left;
                                      color: #54595f;
                                    "
                                  >
                                    <p style="margin: 0">
                                      <strong>
                                        É com grande satisfação que informamos que a empresa ${
                                          req.body.companyName
                                        }
                                        foi aprovado para participar da Conferência 
                                        "Todo sonho tem um preço" com direito a ${
                                          req.body.numParticipants
                                        } membro(s) nos dias 1 e 2 de
                                        junho. Parabéns!</strong
                                      >

                                    </p>
                                    <p style="color: #d4af37;"> CODIGO:<strong> ${senha} </strong></p>
                                    <p style="color:red"> <strong> certifique-se de ter este código com você, 
                                    ele será necessário para acessar a conferência.
                                     este código permitirá apenas o acesso de ${
                                       req.body.numParticipants
                                     } membro(s). </strong></p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  align="center"
                                  vertical-align="middle"
                                  style="
                                    font-size: 0px;
                                    padding: 10px 25px;
                                    word-break: break-word;
                                  "
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    role="presentation"
                                    style="border-collapse: separate; line-height: 100%"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          align="center"
                                          bgcolor="#54595f"
                                          role="presentation"
                                          style="
                                            border: none;
                                            border-radius: 30px;
                                            cursor: auto;
                                            mso-padding-alt: 10px 25px;
                                            background: #54595f;
                                          "
                                          valign="middle"
                                        ></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  align="left"
                                  style="
                                    font-size: 0px;
                                    padding: 10px 25px;
                                    word-break: break-word;
                                  "
                                >
                                  <div
                                    style="
                                      font-family: Nunito, Helvetica, Arial, sans-serif;
                                      font-size: 16px;
                                      font-weight: 400;
                                      line-height: 22px;
                                      text-align: left;
                                      color: #54595f;
                                    "
                                  >
                                    Se você tiver alguma dúvida, basta responder a este
                                    e-mail e teremos o maior prazer em responder. 
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!--[if mso | IE]>
                      </td>
                    
                  </tr>
                
                            </table>
                          <![endif]-->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]>
                    </td>
                  </tr>
                </table>
                
                <table
                   align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
                >
                  <tr>
                    <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                <![endif]-->
              <div style="margin: 0px auto; max-width: 600px">
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="width: 100%"
                >
                  <tbody>
                    <tr>
                      <td
                        style="
                          direction: ltr;
                          font-size: 0px;
                          padding: 20px 0;
                          padding-bottom: 0px;
                          text-align: center;
                        "
                      >
                        <!--[if mso | IE]>
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                          
                  <tr>
                
                      <td
                         class="" style="vertical-align:top;width:600px;"
                      >
                    <![endif]-->
                        <div
                          class="mj-column-per-100 mj-outlook-group-fix"
                          style="
                            font-size: 0px;
                            text-align: left;
                            direction: ltr;
                            display: inline-block;
                            vertical-align: top;
                            width: 100%;
                          "
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="vertical-align: top"
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td
                                  align="center"
                                  style="
                                    font-size: 0px;
                                    padding: 10px 25px;
                                    word-break: break-word;
                                  "
                                >
                                  <div
                                    style="
                                      font-family: Nunito, Helvetica, Arial, sans-serif;
                                      font-size: 16px;
                                      font-weight: 400;
                                      line-height: 22px;
                                      text-align: center;
                                      color: #54595f;
                                    "
                                  ></div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!--[if mso | IE]>
                      </td>
                    
                  </tr>
                
                            </table>
                          <![endif]-->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]>
                    </td>
                  </tr>
                </table>
                
                <table
                   align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
                >
                  <tr>
                    <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                <![endif]-->
              <div style="margin: 0px auto; max-width: 600px">
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="width: 100%"
                >
                  <tbody>
                    <tr>
                      <td
                        style="
                          direction: ltr;
                          font-size: 0px;
                          padding: 20px 0;
                          padding-top: 0px;
                          text-align: center;
                        "
                      >
                        <!--[if mso | IE]>
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                          
                  <tr>
                
                      <td
                         class="" style="vertical-align:top;width:600px;"
                      >
                    <![endif]-->
                        <div
                          class="mj-column-per-100 mj-outlook-group-fix"
                          style="
                            font-size: 0px;
                            text-align: left;
                            direction: ltr;
                            display: inline-block;
                            vertical-align: top;
                            width: 100%;
                          "
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="vertical-align: top"
                            width="100%"
                          >
                            <tbody></tbody>
                          </table>
                        </div>
                        <!--[if mso | IE]>
                      </td>
                    
                  </tr>
                
                            </table>
                          <![endif]-->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]>
                    </td>
                  </tr>
                </table>
                
                <table
                   align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
                >
                  <tr>
                    <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                <![endif]-->
              <div style="margin: 0px auto; max-width: 600px">
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="width: 100%"
                >
                  <tbody>
                    <tr>
                      <td
                        style="
                          direction: ltr;
                          font-size: 0px;
                          padding: 20px 0;
                          text-align: center;
                        "
                      >
                        <!--[if mso | IE]>
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                          
                  <tr>
                
                      <td
                         class="" style="vertical-align:top;width:600px;"
                      >
                    <![endif]-->
                        <div
                          class="mj-column-per-100 mj-outlook-group-fix"
                          style="
                            font-size: 0px;
                            text-align: left;
                            direction: ltr;
                            display: inline-block;
                            vertical-align: top;
                            width: 100%;
                          "
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="vertical-align: top"
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td style="font-size: 0px; word-break: break-word">
                                  <!--[if mso | IE]>
              
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="1" style="vertical-align:top;height:1px;">
                
              <![endif]-->
                                  <div style="height: 1px"> </div>
                                  <!--[if mso | IE]>
              
                  </td></tr></table>
                
              <![endif]-->
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!--[if mso | IE]>
                      </td>
                    
                  </tr>
                
                            </table>
                          <![endif]-->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]>
                    </td>
                  </tr>
                </table>
                <![endif]-->
            </div>
          </body>
        </html>
        
        `,
      });

      const message = await Approved();
      res.json(message);
    } catch (error) {
      console.error(error);
      res.json("error");
    }
  }

  sendMail();
}

// cumbisik@gmail.com
// r.kizey@gsmart.solutions
// j.patricio@gsmart.solutions
