export default {
    Button: props => ({
      display: 'inline-block',
      fontWeight: '400',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      userSelect: 'none',
      border: '1px solid transparent',
      padding: '.375rem .75rem',
      fontSize: '1rem',
      lineHeight: '1.5',
      borderRadius: '.25rem',
      transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
      color: props.outline ? (props.type === 'primary' ? '#007bff' : '#6c757d') : '#fff',
      backgroundColor: props.outline ? 'transparent' : (props.type === 'primary' ? '#61C8A7' : '#6c757d'),
      borderColor: props.type === 'primary' ? '#61C8A7' : '#6c757d',
      '&:hover': {
          color: '#fff',
          backgroundColor: props.outline ? (props.type === 'primary' ? '#61C8A7' : '#6c757d') : (props.type === 'primary' ? '#61C8A7' : '#5a6268'),
          borderColor: props.outline ? (props.type === 'primary' ? '#61C8A7' : '#6c757d') : (props.type === 'primary' ? '#61C8A7' : '#545b62'),
      }
    }),
    TextInput: props => ({
      display: 'block',
      fontWeight: '400',
      textAlign: 'left',
      padding: '0 .75rem',
      border: '1px solid transparent',
      borderRadius: '.25rem',
      boxShadow: 'rgba(67, 90, 111, 0.204) 0px 0px 0px 1px inset, rgba(67, 90, 111, 0.145) 0px 1px 2px inset',
      outline: 'none',
      height: '32px',
      borderColor: props.isInvalid ? 'red' : 'auto',
      cursor: props.disabled ? 'not-allowed' : 'auto',
      backgroundColor: props.disabled ? 'rgba(67, 90, 111, 0.04)' : '#ffffff',
      ...props,
    })
};
