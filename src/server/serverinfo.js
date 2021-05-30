const Host = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000/'
    // return 'http://192.168.15.11:3000/'
  } else {
    return ''
  }
}

export default { Host }
