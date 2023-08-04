const validations = {
  ref:{
    custom: {
      isValid: (value) => !value,
      message: 'Campo obrigatório'
    }
  }
}

export default validations