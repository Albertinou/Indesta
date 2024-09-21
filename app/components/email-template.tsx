import * as React from 'react';

interface EmailTemplateProps {
  firstName: string,
  email: string,
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName, email, message
}) => (
  <div>
    <h1>Nauja žinutė iš puslapio nuo {firstName}</h1>
    <h2>Kontaktinis e-mail: {email}</h2>
    <h3>Žinutė:</h3>
    <h3 className='my-4'>{message}</h3>

  </div>
);
