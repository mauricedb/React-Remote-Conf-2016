/**
 * The movie database
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Cast', 'model/MovieRatings', 'model/Posters'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Cast'), require('./MovieRatings'), require('./Posters'));
  } else {
    // Browser globals (root is window)
    if (!root.TheMovieDatabase) {
      root.TheMovieDatabase = {};
    }
    root.TheMovieDatabase.Movie = factory(root.TheMovieDatabase.ApiClient, root.TheMovieDatabase.Cast, root.TheMovieDatabase.MovieRatings, root.TheMovieDatabase.Posters);
  }
}(this, function(ApiClient, Cast, MovieRatings, Posters) {
  'use strict';




  /**
   * The Movie model module.
   * @module model/Movie
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>Movie</code>.
   * @alias module:model/Movie
   * @class
   * @param id {Integer} 
   * @param title {String} 
   */
  var exports = function(id, title) {
    var _this = this;

    _this['id'] = id;
    _this['title'] = title;





  };

  /**
   * Constructs a <code>Movie</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Movie} obj Optional instance to populate.
   * @return {module:model/Movie} The populated <code>Movie</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('ratings')) {
        obj['ratings'] = MovieRatings.constructFromObject(data['ratings']);
      }
      if (data.hasOwnProperty('criticsConsensus')) {
        obj['criticsConsensus'] = ApiClient.convertToType(data['criticsConsensus'], 'String');
      }
      if (data.hasOwnProperty('abridgedDirectors')) {
        obj['abridgedDirectors'] = ApiClient.convertToType(data['abridgedDirectors'], ['String']);
      }
      if (data.hasOwnProperty('abridgedCast')) {
        obj['abridgedCast'] = ApiClient.convertToType(data['abridgedCast'], [Cast]);
      }
      if (data.hasOwnProperty('posters')) {
        obj['posters'] = Posters.constructFromObject(data['posters']);
      }
    }
    return obj;
  }

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {module:model/MovieRatings} ratings
   */
  exports.prototype['ratings'] = undefined;
  /**
   * @member {String} criticsConsensus
   */
  exports.prototype['criticsConsensus'] = undefined;
  /**
   * @member {Array.<String>} abridgedDirectors
   */
  exports.prototype['abridgedDirectors'] = undefined;
  /**
   * @member {Array.<module:model/Cast>} abridgedCast
   */
  exports.prototype['abridgedCast'] = undefined;
  /**
   * @member {module:model/Posters} posters
   */
  exports.prototype['posters'] = undefined;



  return exports;
}));


