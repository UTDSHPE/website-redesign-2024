//Make the email a modular function so you can just add it in any component on any page
const Mailto = ({ email, subject = '', body = '', children, className = '' }) => {//props
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
    return <a href={`mailto:${email}${params}`} className={className}>
        {children}
    </a>;
  };
  export default Mailto;