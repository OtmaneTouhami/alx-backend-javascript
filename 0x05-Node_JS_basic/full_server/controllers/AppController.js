/**
 * Contains the miscellaneous route handlers.
 * @author Otmane Touhami <https://github.com/OtmaneTouhami>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
