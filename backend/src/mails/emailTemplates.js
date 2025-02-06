export const received_Contact_Message = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Message From the Co</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f9f9f9;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 700px;
                margin: 50px auto;
                background-color: #fff;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }
            h2 {
                text-align: center;
                color: #333;
                font-size: 24px;
                margin-bottom: 20px;
            }
            .message-group {
                font-size: 16px;
                line-height: 1.6;
                color: #555;
                text-align: center;
                padding: 20px;
                background-color: #e4f7ff;
                border-left: 4px solid #00b1ff;
                border-radius: 5px;
            }
            .message-group span {
                font-weight: bold;
                color: #333;
            }

            /* Responsive */
            @media (max-width: 768px) {
                .container {
                    padding: 20px;
                }
                h2 {
                    font-size: 20px;
                }
                .message-group {
                    font-size: 14px;
                    padding: 15px;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>Message Received</h2>

            <div class="message-group">
                Thank you {user_name} for sending us a message. 
                We will contact you back at {user_email} shortly. 
                Your feedback is very important to us, and we will make sure to address your concerns as soon as possible. 
                In the meantime, feel free to browse through our website or check out our latest updates. 
                We appreciate your time and look forward to serving you better!
            </div>
        </div>
    </body>
    </html>
` // done

export const sent_Contact_Message = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Message from User</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 700px;
                margin: 50px auto;
                background-color: #fff;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }
            h2 {
                text-align: center;
                color: #333;
                font-size: 24px;
                margin-bottom: 20px;
            }
            .message-group {
                font-size: 16px;
                line-height: 1.6;
                color: #555;
                background-color: #e4f7ff;
                padding: 20px;
                border-left: 4px solid #00b1ff;
                border-radius: 5px;
            }
            .message-group p {
                margin: 10px 0;
            }
            .message-group span {
                font-weight: bold;
                color: #333;
            }

            /* Responsive design */
            @media (max-width: 768px) {
                .container {
                    padding: 20px;
                }
                h2 {
                    font-size: 20px;
                }
                .message-group {
                    font-size: 14px;
                    padding: 15px;
                }
            }
        </style>
    </head>
    <body>

        <div class="container">
            <h2>Message from the Asker</h2>

            <div class="message-group">
                <p><span>Name:</span> {user_name}</p>
                <p><span>Email:</span> {user_email}</p>
                <p><span>Message:</span> {message}</p>
            </div>
        </div>

    </body>
    </html>
` // done

export const received_Apply_Message = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Received Application Message</title>
        <style>
            /* CSS Styles */
            body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            }

            .container {
            width: 100%;
            max-width: 600px;
            margin: 20px;
            }

            .message-box {
            background-color: #e4f7ff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-left: 5px solid #00b1ff;
            }

            .message-box h2 {
            color: #333;
            font-size: 24px;
            margin-bottom: 10px;
            }

            .status {
            font-size: 16px;
            color: #333;
            margin-bottom: 20px;
            }

            .details {
            font-size: 14px;
            color: #555;
            margin-bottom: 15px;
            }

            .details p {
            margin: 5px 0;
            }

            .message-box p {
            font-size: 16px;
            color: #333;
            margin-top: 15px;
            }

            @media (max-width: 600px) {
            .container {
                padding: 10px;
            }

            .message-box {
                padding: 15px;
            }

            .message-box h2 {
                font-size: 20px;
            }

            .message-box p {
                font-size: 14px;
            }
            }
        </style>
        </head>
        <body>

        <div class="container">
            <div class="message-box">
            <h2>Application Received</h2>
            <p class="status">Thank you for applying to the position of <strong>{position}</strong> at CO. We have successfully received your application and will be reviewing it shortly.</p>
            <div class="details">
                <p><strong>Applicant Name:</strong> {user_name}</p>
                <p><strong>Applicant Email:</strong> {user_email}</p>
            </div>
            <p>If your qualifications meet our requirements, we will contact you for further steps. Thank you for your interest in joining our team!</p>
            </div>
        </div>
    
        </body>
        </html>

` // done

export const sent_Apply_Message = `

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Admin - Application Received</title>
        <style>
            /* CSS Styles */
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }

            .container {
                width: 100%;
                max-width: 800px;
                margin: 20px;
            }

            .message-box {
                background-color: #e4f7ff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                border-left: 5px solid #00b1ff; /* Blue bar */
            }

            .message-box h2 {
                color: #333;
                font-size: 24px;
                margin-bottom: 10px;
            }

            .status {
                font-size: 16px;
                color: #333;
                margin-bottom: 20px;
            }

            .details {
                font-size: 14px;
                color: #555;
                margin-bottom: 15px;
            }

            .details p {
                margin: 5px 0;
            }

            .message-box p {
                font-size: 16px;
                color: #333;
                margin-top: 15px;
            }

            .footer {
                font-size: 14px;
                color: #888;
                margin-top: 25px;
                text-align: center;
            }

            .download-link {
                margin-top: 15px;
                padding: 10px;
                background-color: #00b1ff;
                color: white;
                text-decoration: none;
                border-radius: 5px;
                display: inline-block;
            }

            .download-link:hover {
                background-color: #008bbf;
            }

            @media (max-width: 600px) {
                .container {
                    padding: 10px;
                }

                .message-box {
                    padding: 15px;
                }

                .message-box h2 {
                    font-size: 20px;
                }

                .message-box p {
                    font-size: 14px;
                }
            }
        </style>
    </head>
    <body>

    <div class="container">
        <div class="message-box">
            <h2>New Application Received</h2>
            <p class="status">You have received a new job application. Please find the details below:</p>
            <div class="details">
                <p><strong>Applicant Name:</strong> <span>{user_name}</span></p>
                <p><strong>Email:</strong> <span>{user_email}</span></p>
                <p><strong>Phone Number:</strong> <span>{user_phone}</span></p>
                <p><strong>Position Applied:</strong> <span>{position}</span></p>
                <p><strong>Qualifications:</strong> <span>{qualifications}</span></p>
                <p><strong>First Time Applicant:</strong> <span>{firstTime}</span></p>
                <p><strong>Work Remotely:</strong> <span>{workRemotely}</span></p>
                <p><strong>Interest in the Role:</strong> <span>{interest}</span></p>
                <p><strong>Experience:</strong> <span>{experience}</span></p>
                <p><strong>Skills:</strong> <span>{skills}</span></p>
                <p><strong>Motivation:</strong> <span>{motivation}</span></p>
                <p><strong>Future Goals:</strong> <span>{future}</span></p>
                <p><strong>Company Culture Fit:</strong> <span>{company_culture}</span></p>
                <p><strong>Cover Letter Message:</strong> <span>{message}</span></p>
                <p><strong>Date Submitted:</strong> <span>{date_submitted}</span></p>
            </div>
            <p>If the applicant's qualifications match the job requirements, you will be contacted for further steps. Otherwise, you can choose to reject the application or keep it in the database.</p>

        </div>
    </div>

    <div class="footer">
        <p>&copy; 2025 CO Corporation. All rights reserved.</p>
    </div>

    </body>
    </html>


`