export default class AppController {
  static getHomepage(request, response) {
    response.statusCode = 200;
    return response.end('Hello Holberton School!');
  }
}
