# stock-manager
An application to keep tab of your food inventory.

The application uses a raspberry pi to frequently take snaps of the inventory in your fridge. The image is uploaded into a remote server.
The the most recent state of your stock is now readily availabe while making shopping decisions.

The subsequent versions of the application can also detect the contents of your fridge and restock them automatically for you.

The application uses Mongo, Node and Express for server functionality. It uses amazon S3 service for image storage and Python for scripting Pi's function.

The subsequent version will make use of google's cloud vision service and Google's AutoML for detecting raw foods and automating restocking of foods.

### Version
0.1.0

### Installation

Run the following commands to start the application

```sh
$ npm install
```
```sh
$ npm start
```

Find deployment link here: https://safe-cliffs-18013.herokuapp.com/

P.S: The link redirects to the most recent snap in the database.




