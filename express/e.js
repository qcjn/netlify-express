
exports.handler = async (event, context) => {
  
  return {
    statusCode: 200,
    body: event.path.replace('/','')
  }
}
