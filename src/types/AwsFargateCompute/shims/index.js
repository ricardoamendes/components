module.exports.hello = (cloudEvent, context) => {
  /* eslint-disable-next-line no-console */
  console.log(cloudEvent, context)
  // // eslint-disable-next-line
  // console.log('cloudEvent:', cloudEvent)
  // // eslint-disable-next-line
  // console.log('context:', context)
  return { foo: 'bar' }
}
