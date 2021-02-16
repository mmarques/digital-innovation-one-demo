const createMongoClient = require('../shared/mongoClient');

module.exports = async context => {
  const { client: MongoClient, closeConnectionFn } = await createMongoClient();
  const Products = MongoClient.collection('products');
  const res = await Products.find({});
  const body = await res.toArray();
  
  console.log('GetProducts done')
  
  closeConnectionFn();
  context.res = { status: 200, body };
};
