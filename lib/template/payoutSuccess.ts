export const payoutSuccessTemplate = (
  amount: number
) => {
  const title = "Payout Successful!";
  
  const template = (`
    <!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <title>
      
    </title>
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
      #outlook a { padding:0; }
      body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
      table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
      img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
      p { display:block;margin:13px 0; }
    </style>
    <!--[if mso]>
    <noscript>
    <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    </noscript>
    <![endif]-->
    <!--[if lte mso 11]>
    <style type="text/css">
      .mj-outlook-group-fix { width:100% !important; }
    </style>
    <![endif]-->
    
      <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
        <style type="text/css">
          @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
        </style>
      <!--<![endif]-->

    
    
    <style type="text/css">
      @media only screen and (min-width:480px) {
        .mj-column-per-100 { width:100% !important; max-width: 100%; }
.mj-column-per-50 { width:50% !important; max-width: 50%; }
.mj-column-per-33-333333333333336 { width:33.333333333333336% !important; max-width: 33.333333333333336%; }
.mj-column-per-70 { width:70% !important; max-width: 70%; }
.mj-column-per-30 { width:30% !important; max-width: 30%; }
      }
    </style>
    <style media="screen and (min-width:480px)">
      .moz-text-html .mj-column-per-100 { width:100% !important; max-width: 100%; }
.moz-text-html .mj-column-per-50 { width:50% !important; max-width: 50%; }
.moz-text-html .mj-column-per-33-333333333333336 { width:33.333333333333336% !important; max-width: 33.333333333333336%; }
.moz-text-html .mj-column-per-70 { width:70% !important; max-width: 70%; }
.moz-text-html .mj-column-per-30 { width:30% !important; max-width: 30%; }
    </style>
    
  
    <style type="text/css">
    
    

    @media only screen and (max-width:480px) {
      table.mj-full-width-mobile { width: 100% !important; }
      td.mj-full-width-mobile { width: auto !important; }
    }
  
    </style>
    <style type="text/css">
    *{
      font-family:"Lexend" !important;;
      margin:0px auto !important;;
      }
      
      
       .wecome-live-img1{
      display:none !important;
      mso-hide: all !important;
      }
      
      .tranceperent-bg{
      background-image: url("https://res.cloudinary.com/unionwealthmanagement/image/upload/v1731854697/email%20images/Hunt%20Ground%20EMails/Hero%20Images/footer_backgroung_gredient_mygb7d.png") !important;;
      }
      
      .deear-section{
      	height:439px !important;
      }
      
      .footer-css{
      height:261px !important;
      
      }
      
      .footer-icon{
      align:center !important;
      padding:25px !important;
       width:150px !important;
      }
      .join-comunity-bg{
      margin-top:-10px !important;
      }
      
     
      .card-css{
      
      /* Frame 23 */

/* Auto layout */
display: flex !important;
flex-direction: row !important;
align-items: flex-start !important;
padding: 32px !important;
gap: 16px !important;;

width: 568px !important;;
height: 130px !important;;

background: linear-gradient(90deg, rgba(144, 87, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 98.96%) !important;
border-radius: 16px !important;

/* Inside auto layout */
flex: none !important;
order: 1 !important;;
flex-grow: 0 !important;

      
      }
      
        .email-mjspace{
      height:200px !important;
      }
     
      
@media (min-width:440px)  { 
      // phone display

       
      .title-text-size{
          font-size:18px !important;
        }
      
    	 .wecome-live-img2{
      		display:none !important;;
        }
      .wecome-live-img1{
      		display:inline !important;
        }
      .email-mjspace{
      height:200px !important;
      }
    
      .bookingtext > div{
         font-size:42px !important;
					

      }
      
      .mobile-card{
      display:none !important;
      mso-hide: all !important;
      }
      
       	 .bottom-space{
       height:300px !important;
      }
      
        	 .bottom-space-2{
       height:50px !important;
      }
      
    }
      
	
      
      
@media (max-width:441px)  { 
      //desktop size
   
       .img-container{
          //padding-top:50px !important;
      		font-size:12px !important;
        }
      
        .wecome-live-img1{
      		display:none !important;
      	.wecome-live-img2{
      		display:inline !important;
        }
      
    
        .booking-mail{
      height:261px !important;
      }
        .email-mjspace{
      height:100px !important;
      }
      
      .bookingtext > div{
         font-size:26px !important;


      }
      
        .desktop-card{
      display:none !important;
      mso-hide: all !important;
      }
      
      
      }
    </style>
    
  </head>
  <body style="word-spacing:normal;background-color:#eeeeee;">
    
    
      <div
         style="background-color:#eeeeee;"
      >
        
      
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    
      
      <div  style="margin:0px auto;max-width:600px;">
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
        >
          <tbody>
            <tr>
              <td
                 style="direction:ltr;font-size:0px;padding:0px;text-align:center;"
              >
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
            
      <div
         class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
      >
        
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
      >
        <tbody>
          
              <tr>
                <td
                   align="center" style="font-size:0px;padding:0px;word-break:break-word;"
                >
                  
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;" class="mj-full-width-mobile"
      >
        <tbody>
          <tr>
            <td  style="width:600px;" class="mj-full-width-mobile">
              
      <img
         height="auto" src="https://res.cloudinary.com/unionwealthmanagement/image/upload/v1731904325/email%20images/Hunt%20Ground%20EMails/Hero%20Images/Password_Hero_kw8tn2.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="600"
      />
    
            </td>
          </tr>
        </tbody>
      </table>
    
                </td>
              </tr>
            
        </tbody>
      </table>
    
      </div>
    
          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#1C1D1D" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    
<!--       
      <div  style="background:#1C1D1D;background-color:#1C1D1D;margin:0px auto;max-width:600px;">
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#1C1D1D;background-color:#1C1D1D;width:100%;"
        >
          <tbody>
            <tr>
              <td
                 style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
              >
            
      <div
         class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
      >
        
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
      >
        <tbody>
          
              <tr>
                <td
                   align="center" style="font-size:0px;padding:20px;word-break:break-word;"
                >
                  
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;" class="mj-full-width-mobile"
      >
        <tbody>
          <tr>
            <td  style="width:560px;" class="mj-full-width-mobile">
              
      <img
         height="auto" src="https://res.cloudinary.com/unionwealthmanagement/image/upload/v1732565748/email%20images/Hunt%20Ground%20EMails/icons/PAyment_Dicliuned_to1gor.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="560"
      />
    
            </td>
          </tr>
        </tbody>
      </table>
    
                </td>
              </tr>
            
        </tbody>
      </table>
    
      </div>
    
              </td>
            </tr>
          </tbody>
        </table>
        
      </div> -->
    
      
      <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#1C1D1D" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    
      
      <div  style="background:#1C1D1D;background-color:#1C1D1D;margin:0px auto;max-width:600px;">
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#1C1D1D;background-color:#1C1D1D;width:100%;"
        >
          <tbody>
            <tr>
              <td
                 style="direction:ltr;font-size:0px;padding:20px 0px;text-align:center;"
              >
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    
      
      <div  style="margin:0px auto;max-width:600px;">
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
        >
          <tbody>
            <tr>
              <td
                 style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
              >
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:middle;width:600px;" ><![endif]-->
            
      <div
         class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;"
      >
        
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:middle;" width="100%"
      >
        <tbody>
          
              <tr>
                <td
                   align="left" style="font-size:0px;padding:40px;padding-bottom:0px;word-break:break-word;"
                >
                  
      <div
         style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:600;line-height:1.5;text-align:left;color:#ffffff;"
      >Great news! Your payout has been successfully processed.</div>
    
                </td>
              </tr>
            
        </tbody>
      </table>
    
      </div>
    
          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]></td></tr></table></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#1C1D1D" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    
      
      <div  style="background:#1C1D1D;background-color:#1C1D1D;margin:0px auto;max-width:600px;">
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#1C1D1D;background-color:#1C1D1D;width:100%;"
        >
          <tbody>
            <tr>
              <td
                 style="direction:ltr;font-size:0px;padding:20px;text-align:center;"
              >
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><![endif]-->
                  
      <!-- Booking details Card Start -->
          <!--[if mso | IE]><tr><td class="desktop-card-outlook" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="desktop-card-outlook" role="presentation" style="width:560px;" width="560" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><v:rect style="width:560px;" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false"><v:fill origin="0.5, 0" position="0.5, 0" src="https://res.cloudinary.com/unionwealthmanagement/image/upload/v1731876040/email%20images/Hunt%20Ground%20EMails/Hero%20Images/gredient_bg_giuhdf.png" type="tile" /><v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0"><![endif]-->
          
      <div  class="desktop-card" style="background:url('https://res.cloudinary.com/unionwealthmanagement/image/upload/v1731876040/email%20images/Hunt%20Ground%20EMails/Hero%20Images/gredient_bg_giuhdf.png') center top / auto repeat;background-position:center top;background-repeat:repeat;background-size:auto;margin:0px auto;border-radius:15px;max-width:560px;">
        <div  style="line-height:0;font-size:0;">
        <table
           align="center" background="https://res.cloudinary.com/unionwealthmanagement/image/upload/v1731876040/email%20images/Hunt%20Ground%20EMails/Hero%20Images/gredient_bg_giuhdf.png" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:url('https://res.cloudinary.com/unionwealthmanagement/image/upload/v1731876040/email%20images/Hunt%20Ground%20EMails/Hero%20Images/gredient_bg_giuhdf.png') center top / auto repeat;background-position:center top;background-repeat:repeat;background-size:auto;width:100%;border-radius:15px;"
        >
          <tbody>
            <tr>
              <td
                 style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
              >
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:560px;" ><![endif]-->
            
      <div
         class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
      >
        
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
      >
        <tbody>
          
              <tr>
                <td
                   align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"
                >
                  
      <table
         cellpadding="0" cellspacing="0" width="100%" border="0" style="color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;table-layout:auto;width:100%;border:none;"
      >
        <tr>
            <td style="padding:0px;width:60px"><img src="https://res.cloudinary.com/unionwealthmanagement/image/upload/v1731870974/email%20images/Hunt%20Ground%20EMails/Hero%20Images/chart-pie_lnbhhh.png" width=40px></img></td>
            <td style="padding:0px 10px;color:#ffffff " >Payout Amount:</br>
           <span style="font-size:22px;line-height: 1.6;"> $${amount}  </span>
            </td>
          </tr>
      </table>
    
                </td>
              </tr>
            
        </tbody>
      </table>
    
      </div>
    
          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    
        <!--[if mso | IE]></v:textbox></v:rect></td></tr></table></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]></td></tr></table><![endif]-->
    
    <!-- Your Receipt details Card End -->
      
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#1C1D1D" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    
      
      <div  style="background:#1C1D1D;background-color:#1C1D1D;margin:0px auto;max-width:600px;">
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#1C1D1D;background-color:#1C1D1D;width:100%;"
        >
          <tbody>
            <tr>
              <td
                 style="direction:ltr;font-size:0px;padding:20px;padding-bottom:0px;text-align:center;"
              >
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:middle;width:560px;" ><![endif]-->
            
      <div
         class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;"
      >
        
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:middle;" width="100%"
      >
        <tbody>
          
              <tr>
                <td
                   align="left" style="font-size:0px;padding:0px 40px;word-break:break-word;"
                >
                  
      <div
         style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;line-height:1.5;text-align:left;color:#ffffff;"
      ></br>
      The funds should appear in your account shortly, depending on your payment provider's processing time.
  </br>  </br>
If you have any questions or need further assistance, feel free to reach out to us at help@huntgrounds.com.
  </br>  </br>
Thank you for being a valued member of the HuntGrounds community!
  </br>  </br>
Best regards,  </br>The HuntGrounds Team 🌲🏹</div>
    
                </td>
              </tr>
            
        </tbody>
      </table>
    
      </div>
    
          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#1C1D1D" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><v:rect style="width:600px;" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false"><v:fill origin="0, -0.5" position="0, -0.5" src="https://res.cloudinary.com/unionwealthmanagement/image/upload/v1731856572/email%20images/Hunt%20Ground%20EMails/Hero%20Images/Your_Booking_dear_f8meef.png" color="#1C1D1D" type="frame" size="1,1" aspect="atmost" /><v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0"><![endif]-->
          
      <div  style="background:#1C1D1D url('https://res.cloudinary.com/unionwealthmanagement/image/upload/v1731856572/email%20images/Hunt%20Ground%20EMails/Hero%20Images/Your_Booking_dear_f8meef.png') center top / contain no-repeat;background-position:center top;background-repeat:no-repeat;background-size:contain;margin:0px auto;max-width:600px;">
        <div  style="line-height:0;font-size:0;">
        <table
           align="center" background="https://res.cloudinary.com/unionwealthmanagement/image/upload/v1731856572/email%20images/Hunt%20Ground%20EMails/Hero%20Images/Your_Booking_dear_f8meef.png" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#1C1D1D url('https://res.cloudinary.com/unionwealthmanagement/image/upload/v1731856572/email%20images/Hunt%20Ground%20EMails/Hero%20Images/Your_Booking_dear_f8meef.png') center top / contain no-repeat;background-position:center top;background-repeat:no-repeat;background-size:contain;width:100%;"
        >
          <tbody>
            <tr>
              <td
                 style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
              >
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    
      
      <div  style="margin:0px auto;max-width:600px;">
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
        >
          <tbody>
            <tr>
              <td
                 style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
              >
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
            
      <div
         class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
      >
        
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
      >
        <tbody>
          
              <tr>
                <td
                   class="bottom-space" style="font-size:0px;word-break:break-word;"
                >
                  
      <div
         style="height:20px;line-height:20px;"
      >&#8202;</div>
    
                </td>
              </tr>
            
        </tbody>
      </table>
    
      </div>
    
          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]></td></tr></table></td></tr><tr><td class="" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><v:rect style="width:600px;" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false"><v:fill origin="0, -0.5" position="0, -0.5" src="https://res.cloudinary.com/unionwealthmanagement/image/upload/v1731854697/email%20images/Hunt%20Ground%20EMails/Hero%20Images/footer_backgroung_gredient_mygb7d.png" type="frame" size="1,1" aspect="atleast" /><v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0"><![endif]-->
          
      <div  style="background:url('https://res.cloudinary.com/unionwealthmanagement/image/upload/v1731854697/email%20images/Hunt%20Ground%20EMails/Hero%20Images/footer_backgroung_gredient_mygb7d.png') center top / cover no-repeat;background-position:center top;background-repeat:no-repeat;background-size:cover;margin:0px auto;border-radius:20px;max-width:600px;">
        <div  style="line-height:0;font-size:0;">
        <table
           align="center" background="https://res.cloudinary.com/unionwealthmanagement/image/upload/v1731854697/email%20images/Hunt%20Ground%20EMails/Hero%20Images/footer_backgroung_gredient_mygb7d.png" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:url('https://res.cloudinary.com/unionwealthmanagement/image/upload/v1731854697/email%20images/Hunt%20Ground%20EMails/Hero%20Images/footer_backgroung_gredient_mygb7d.png') center top / cover no-repeat;background-position:center top;background-repeat:no-repeat;background-size:cover;width:100%;border-radius:20px;"
        >
          <tbody>
            <tr>
              <td
                 style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
              >
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:middle;width:600px;" ><![endif]-->
            
      <div
         class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;"
      >
        
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:middle;" width="100%"
      >
        <tbody>
          
              <tr>
                <td
                   align="center" style="font-size:0px;padding:10px 25px;padding-bottom:10px;word-break:break-word;"
                >
                  
      <div
         style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:32px;font-weight:500;line-height:1;text-align:center;color:#ffffff;"
      >Need help?</div>
    
                </td>
              </tr>
            
        </tbody>
      </table>
    
      </div>
    
          <!--[if mso | IE]></td><td class="" style="vertical-align:middle;width:600px;" ><![endif]-->
            
      <div
         class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;"
      >
        
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:middle;" width="100%"
      >
        <tbody>
          
              <tr>
                <td
                   align="center" style="font-size:0px;padding:10px 25px;padding-top:10px;word-break:break-word;"
                >
                  
      <div
         style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;font-weight:300;line-height:1;text-align:center;color:#ffffff;"
      >We are available to answer your questions</div>
    
                </td>
              </tr>
            
        </tbody>
      </table>
    
      </div>
    
          <!--[if mso | IE]></td><td class="" style="vertical-align:middle;width:600px;" ><![endif]-->
            
      <div
         class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;"
      >
        
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:middle;" width="100%"
      >
        <tbody>
          
              <tr>
                <td
                   align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
                >
                  
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"
      >
        <tbody>
          <tr>
            <td  style="width:187px;">
              
      <img
         height="auto" src="https://res.cloudinary.com/unionwealthmanagement/image/upload/v1731855488/email%20images/Hunt%20Ground%20EMails/Hero%20Images/CTA_btn_yxwtma.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="187"
      />
    
            </td>
          </tr>
        </tbody>
      </table>
    
                </td>
              </tr>
            
        </tbody>
      </table>
    
      </div>
    
          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    
        <!--[if mso | IE]></v:textbox></v:rect></td></tr></table></td></tr><tr><td class="join-comunity-bg-outlook" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="join-comunity-bg-outlook" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><v:rect style="width:600px;" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false"><v:fill origin="0, -0.5" position="0, -0.5" src="https://res.cloudinary.com/unionwealthmanagement/image/upload/v1731864589/email%20images/Hunt%20Ground%20EMails/Hero%20Images/Frame_21_ziikch.png" type="frame" size="1,1" aspect="atleast" /><v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0"><![endif]-->
          
   
    
        <!--[if mso | IE]></v:textbox></v:rect></td></tr></table></td></tr><tr><td class="" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    
      
      <div  style="margin:0px auto;max-width:600px;">
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
        >
          <tbody>
            <tr>
              <td
                 style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
              >
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
            
      <div
         class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
      >
        
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
      >
        <tbody>
          
              <tr>
                <td
                   align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"
                >
                  
      <div
         style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#8A8A8A;"
      >At HuntGrounds.com ("we," "us," or "our"), we aim to provide a platform that helps users find hunting grounds efficiently. However, hunting carries inherent risks, and it is important to be aware of them. This Risk Disclosure outlines the potential risks associated with hunting activities, and by using our website, you acknowledge and accept these risks.
</br>
   </br>
1. Nature of Hunting Activities</br></br>Hunting is a physically demanding activity that may involve exposure to dangerous wildlife, adverse weather conditions, and unfamiliar terrain. As such, you should fully understand the risks before engaging in any hunting activities on the grounds listed on HuntGrounds.com.
</br>
  </br>
2. Third-Party Responsibility</br></br>HuntGrounds.com does not own or manage any of the hunting grounds listed on our platform. We provide a platform for users to connect with landowners and operators. The safety, accessibility, and condition of the hunting grounds are the responsibility of the respective landowners and operators. You are responsible for performing your own due diligence before entering any hunting grounds, and we strongly recommend confirming all details directly with the landowner or operator prior to visiting.</div>
    
                </td>
              </tr>
            
        </tbody>
      </table>
    
      </div>
    
          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]></td></tr></table></td></tr><tr><td class="" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    
      
    
      
      <!--[if mso | IE]></td></tr></table></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    
        <!--[if mso | IE]></v:textbox></v:rect></td></tr></table><![endif]-->
    
    
      </div>
    
  </body>
</html>
  `)

  
        return {
    title: title,
    template: template,
  };
};
